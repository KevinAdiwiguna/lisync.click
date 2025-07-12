import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { Resend as ResendClient } from "resend";
import { generateLoginEmailHTML } from "@/components/organism/email-html";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma"; // ini dari generated
import { PrismaClient as DefaultPrismaClient } from "@prisma/client";


const adapterClient = new DefaultPrismaClient();
const resend = new ResendClient(process.env.AUTH_RESEND_KEY);

declare module "next-auth" {
	interface Session {
		user: {
			address: string;
			plan: string;
		} & DefaultSession["user"];
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	pages: {
		signIn: "/signin",
	},
	providers: [
		Google,
		Resend({
			from: "zync.click@vinend.my.id",
			sendVerificationRequest: async ({ identifier, url }) => {
				const { host } = new URL(url);
				const response = await resend.emails.send({
					from: "Zync.click <zync.click@vinend.my.id>",
					to: identifier,
					subject: "🔐 Login ke akunmu di Zync.click",
					html: generateLoginEmailHTML(url, host),
				});
				if (response.error) {
					throw new Error("Resend error: " + JSON.stringify(response.error));
				}
			},
		}),
	],

	adapter: PrismaAdapter(adapterClient),
	session: {
		strategy: "jwt",
	},
	secret: process.env.AUTH_SECRET,

	events: {
		async createUser({ user }) {
			await prisma.user.update({
				where: { id: user.id },
				data: { plan: "FREE" },
			});
		},
	},

	callbacks: {
		async jwt({ token, user }) {
			if (user?.email) {
				const dbUser = await prisma.user.findUnique({
					where: { email: user.email },
					select: { id: true, plan: true },
				});
				if (dbUser) {
					token.id = dbUser.id;
					token.plan = dbUser.plan;
				}
			}
			return token;
		},

		async session({ session, token }) {
			if (session.user && token) {
				session.user.id = token.id as string;
				session.user.plan = token.plan as string;
			}
			return session;
		},
	},
});

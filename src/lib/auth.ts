import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { Resend as ResendClient } from "resend";
import { generateLoginEmailHTML } from "@/components/organism/email-html";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma"; // ini dari generated

const resend = new ResendClient(process.env.AUTH_RESEND_KEY);

const defaultLimitsByPlan = {
	basic: [
		{ feature: "short_link_limit", value: 50 },
		{ feature: "qr_code_limit", value: 25 },
	],
	standard: [
		{ feature: "short_link_limit", value: 100 },
		{ feature: "qr_code_limit", value: 50 },
	],
	pro: [
		{ feature: "short_link_limit", value: 200 },
		{ feature: "qr_code_limit", value: 100 },
	],
	bisnis: [
		{ feature: "short_link_limit", value: 500 },
		{ feature: "qr_code_limit", value: 250 },
	],
};

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
			from: "lisync.click@vinend.my.id",
			sendVerificationRequest: async ({ identifier, url }) => {
				const { host } = new URL(url);
				const response = await resend.emails.send({
					from: "lisync<lisync.click@vinend.my.id>",
					to: identifier,
					subject: "Login to your Lisync account now using the secure magic link we’ve sent",
					html: generateLoginEmailHTML(url, host),
				});
				if (response.error) {
					throw new Error("Resend error: " + JSON.stringify(response.error));
				}
			},
		}),
	],

	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},
	secret: process.env.AUTH_SECRET,

	events: {
		async createUser({ user }) {
			const plan = "basic";

			await prisma.user.update({
				where: { id: user.id },
				data: { plan },
			});

			const limits = defaultLimitsByPlan[plan];

			if (limits && limits.length > 0) {
				await prisma.featureLimit.createMany({
					data: limits.map((limit) => ({
						userId: user.id!,
						feature: limit.feature,
						value: limit.value,
					})),
				});
			}
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

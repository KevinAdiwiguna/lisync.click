import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { Resend as ResendClient } from "resend";
import { generateLoginEmailHTML } from "@/components/organism/email-html"; // tempat kamu menyimpan fungsi HTML
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
const resend = new ResendClient(process.env.AUTH_RESEND_KEY!);

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
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},
	secret: process.env.AUTH_SECRET,
});

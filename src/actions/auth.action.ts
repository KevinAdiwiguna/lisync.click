"use server";

import { signIn } from "@/lib/auth";
export const GoogleAuth = async () => {
	await signIn("google", {
		redirect: true,
		redirectTo: "/",
	});
};

export const ResendAuth = async (formData: FormData) => {
	await signIn("resend", formData);
};

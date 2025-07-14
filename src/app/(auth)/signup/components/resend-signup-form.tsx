"use client";

import { useTransition, useState } from "react";
import Button from "@/components/atom/button";
import { ResendAuth } from "@/actions/auth.action";

const ResendEmailSignUpForm = () => {
	const [isPending, startTransition] = useTransition();
	const [email, setEmail] = useState("");

	const sendEmailToResend = (formData: FormData) => {
        startTransition(async () => {
            await ResendAuth(formData)
        })
    };

	return (
		<form className="space-y-4 w-full mb-2" action={sendEmailToResend}>
			<div className="text-left space-y-1">
				<label htmlFor="email" className="block text-sm font-medium text-base-content">
					Email Address
				</label>
				<input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full px-4 py-2 border border-base-300 rounded-md bg-base-100 text-base-content placeholder:text-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary" />
			</div>

			<Button type="submit" color="primary" className="w-full py-2" disabled={isPending}>
				{isPending ? "Sending..." : "Continue with Email"}
			</Button>
		</form>
	);
};

export default ResendEmailSignUpForm;

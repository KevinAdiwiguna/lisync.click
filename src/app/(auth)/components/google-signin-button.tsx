"use client";

import { FcGoogle } from "react-icons/fc";
import { useTransition } from "react";
import Button from "@/components/atom/button";
import { GoogleAuth } from "@/actions/auth.action";

const GoogleSignInButton = () => {
	const [isPending, startTransition] = useTransition();

	const googleSIgnIn = () => {
		startTransition(async () => {
      await GoogleAuth()
		});
	};

	return (
    <form action={googleSIgnIn}>
		<Button disabled={isPending} color="neutral" type="submit" iconLeft={<FcGoogle className="text-xl" />} className="w-full py-2 text-base">
			{isPending ? "Redirecting..." : "Sign in with Google"}
		</Button>
    </form>
	);
};

export default GoogleSignInButton;

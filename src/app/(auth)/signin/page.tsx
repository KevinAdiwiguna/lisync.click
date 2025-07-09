"use client";

import { FcGoogle } from "react-icons/fc";
import React from "react";
import Button from "@/components/atom/button";

const SignIn = () => {
	const handleGoogleSignIn = () => {
		console.log("Google Sign In triggered");
	};

	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-base-100/75 p-8 rounded-2xl shadow-xl border border-base-300 text-center space-y-6">
				<div className="space-y-1">
					<h1 className="text-3xl font-bold">
						Welcome to <span className="text-primary">ShortLink</span>
					</h1>
					<p className="text-sm text-base-content/70">Simplify your links. Track every click. Grow smarter.</p>
				</div>

				<Button color="neutral" iconLeft={<FcGoogle className="text-xl" />} onClick={handleGoogleSignIn} className="w-full py-2 text-base">
					Sign in with Google
				</Button>

				<div className="flex justify-center items-center gap-x-3 mb-2">
					<div className="w-full border-t border-black" />
					<span>OR</span>
					<div className="w-full border-t border-black" />
				</div>

				<form className="space-y-4 w-full mb-2" onSubmit={(e) => e.preventDefault()}>
					<div className="text-left space-y-1">
						<label htmlFor="email" className="block text-sm font-medium text-base-content">
							Email Address
						</label>
						<input type="email" id="email" name="email" required placeholder="you@example.com" className="w-full px-4 py-2 border border-base-300 rounded-md bg-base-100 text-base-content placeholder:text-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary" />
					</div>

					<Button type="submit" color="primary" className="w-full py-2">
						Continue with Email
					</Button>
				</form>

				<p className="text-xs text-base-content/60 leading-relaxed">Fast, free & secure link shortening — no strings attached.</p>
			</div>
		</div>
	);
};

export default SignIn;

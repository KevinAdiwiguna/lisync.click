import GoogleSignInButton from "../components/google-signin-button";
import ResendEmailSignUpForm from "./components/resend-signup-form";

const SignIn = () => {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-base-100/75 p-8 rounded-2xl shadow-xl border border-base-300 text-center space-y-6">
				<div className="space-y-1">
					<h1 className="text-3xl font-bold">
						Welcome to <span className="text-primary">ShortLink</span>
					</h1>
					<p className="text-sm text-base-content/70">Simplify your links. Track every click. Grow smarter.</p>
				</div>

				<GoogleSignInButton />

				<div className="flex justify-center items-center gap-x-3 mb-2">
					<div className="w-full border-t border-black" />
					<span>OR</span>
					<div className="w-full border-t border-black" />
				</div>

				<ResendEmailSignUpForm />

				<p className="text-xs text-base-content/60 leading-relaxed">Fast, free & secure link shortening — no strings attached.</p>
			</div>
		</div>
	);
};

export default SignIn;

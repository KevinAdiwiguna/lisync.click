import Button from "../atom/button";

export const JoinCard = () => {
	return (
		<section className="py-32">
			<div className="max-w-4xl mx-auto text-center">
				<div className="bg-gradient-to-r from-primary/5 to-secondary/10 backdrop-blur-xl rounded-box p-12 border border-base-300 shadow-xl">
					<h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Get Started?</h2>
					<p className="text-xl font-light mb-8">Join thousands of users who trust ShortLink for their URL shortening needs.</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button color="secondary">Sign in Free</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

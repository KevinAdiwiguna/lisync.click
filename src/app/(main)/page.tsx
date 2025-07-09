import Button from "@/components/atom/button";
import { FeatureCard } from "@/components/atom/feature-card";
import { JoinCard } from "@/components/molecule/join-card";
import { PricingCard } from "@/components/molecule/pricing-card";
import TestimonialCard from "@/components/molecule/testimonial-card";
import { features_constant } from "@/constant/features";
import { testimonials_constant } from "@/constant/testimonials";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
	return (
		<>
			<section className="min-h-[65vh] flex justify-center items-center">
				<div className="max-w-4xl mx-auto grid justify-center items-center text-center pt-20">
					<h1 className="text-6xl md:text-7xl font-light">
						Shorten URLs with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Style</span>
					</h1>
					<p className="text-xl md:text-2xl font-light mb-12 leading-relaxed">Transform long, messy URLs into clean, branded links that drive engagement and provide valuable insights.</p>
					<div className="flex justify-center flex-col sm:flex-row w-full items-center gap-4 mb-16">
						<Link href={"/signin"}>
							<Button className="py-4 px-5 w-full sm:w-fit" color="primary" iconRight={<FaArrowRightLong />}>
								Start For Free
							</Button>
						</Link>
						<Button className="py-4 px-5 w-full sm:w-fit" color="outline">
							View Demo
						</Button>
					</div>
				</div>
			</section>

			<section className="py-32">
				<div className="grid justify-center items-center text-center mb-20">
					<h2 className="text-5xl font-light mb-6">Powerful Features</h2>
					<p className="text-xl font-light max-w-3xl mx-auto">Everything you need to create, manage, and analyze your shortened URLs with professional-grade tools.</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features_constant.map((feature, index) => (
						<FeatureCard key={index} {...feature} />
					))}
				</div>
			</section>

			<section className="text-center py-32">
				<div className="mb-20">
					<h2 className="text-5xl font-light mb-6">Simple Pricing</h2>
					<div className="text-xl font-light">Choose the plan that fits your needs. Upgrade or downgrade at any time.</div>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<PricingCard title="Free" price="$0" period="month" description="Perfect for personal use" features={["Up to 100 links per month", "Basic analytics", "Standard support", "7-day link history"]} buttonLabel="Get Started Free" />
					<PricingCard title="Premium" price="$12" period="month" description="For professionals and businesses" features={["Unlimited links", "Custom branded URLs", "Advanced analytics & insights", "Priority support", "Unlimited link history", "API access"]} buttonLabel="Start Premium Trial" isPremium isPopular gradient />
				</div>
			</section>

			<section className="py-32">
				<div className="text-center mb-20">
					<h2 className="text-5xl font-lightmb-6">Loved by Thousands</h2>
					<p className="text-xl font-light">See what our customers are saying about ShortLink.</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{testimonials_constant.map((t, idx) => (
						<TestimonialCard key={idx} testimonial={t} />
					))}
				</div>
			</section>

			<JoinCard />
		</>
	);
}

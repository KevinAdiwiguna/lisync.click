import { FiCheck } from "react-icons/fi";
import Button from "../atom/button";
import Link from "next/link";

type PricingCardProps = {
	title: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	buttonLabel: string;
	isPremium?: boolean;
	isPopular?: boolean;
	gradient?: boolean;
};

export const PricingCard = ({ title, price, period, description, features, buttonLabel, isPremium = false, isPopular = false, gradient = false }: PricingCardProps) => {
	return (
		<div className={`${gradient ? "bg-gradient-to-br from-primary/5 to-secondary/10 shadow-xl border-base-300" : "bg-base-100/75 border-base-300 shadow-lg"} backdrop-blur-xl rounded-box p-8 border shadow-black/10 relative`}>
			{isPopular && (
				<div className="absolute -top-4 left-1/2 -translate-x-1/2">
					<div className="inline-flex items-center text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full">Most Popular</div>
				</div>
			)}

			<div className="text-center mb-8">
				{isPremium && (
					<div className="flex items-center justify-center gap-2 mb-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
							<path d="M5 21h14" />
						</svg>
						<h3 className="text-2xl font-light">{title}</h3>
					</div>
				)}
				{!isPremium && <h3 className="text-2xl font-light mb-2">{title}</h3>}

				<div className="mb-4">
					<span className="text-4xl font-light">{price}</span>
					<span className="">/{period}</span>
				</div>
				<p className="font-light">{description}</p>
			</div>

			<ul className="space-y-4 mb-8">
				{features.map((feature, index) => (
					<li key={index} className="flex items-center gap-3">
						<FiCheck className="h-5 w-5 text-green-600" />
						<span className="">{feature}</span>
					</li>
				))}
			</ul>

			{isPremium ? (
        <Link href="/signin">
				<button className={`cursor-pointer inline-flex items-center justify-center text-sm font-medium px-4 py-2 w-full h-12 rounded-field transition-colors bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"`}>{buttonLabel}</button>
        </Link>
			) : (
        <Link href="/signin">
				<Button color="secondary" className="w-full px-4 py-2 h-12">
					{buttonLabel}
				</Button>
        </Link>
			)}
		</div>
	);
};

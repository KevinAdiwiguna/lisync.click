import { FiCheck, FiX } from "react-icons/fi";
import Button from "../atom/button";
import Link from "next/link";
import { all_features, PricingFeatureKey } from "@/constant/pricing-plan";

type PricingCardProps = {
	title: string;
	price: string;
	description: string;
	features: Record<PricingFeatureKey, boolean | "incoming">;
	limits: {
		short_link_limit: number;
		qr_code_limit: number;
	};
	buttonLabel: string;
	isPremium?: boolean;
	isPopular?: boolean;
	gradient?: boolean;
};

export const PricingCard = ({ title, price, description, features, limits, buttonLabel, isPremium = false, isPopular = false, gradient = false }: PricingCardProps) => {
	return (
		<div className={`${gradient ? "bg-gradient-to-br from-primary/5 to-secondary/10 shadow-xl border-base-300" : "bg-base-100/75 border-base-300 shadow-lg"} backdrop-blur-xl rounded-box p-8 border shadow-black/10 relative`}>
			{isPopular && (
				<div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
					<span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Paling Populer</span>
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
				</div>
				<p className="font-light">{description}</p>
			</div>

			<div className="mb-4 space-y-1 text-center text-sm">
				<p>
					<strong>{limits.short_link_limit}</strong> Short Link
				</p>
				<p>
					<strong>{limits.qr_code_limit}</strong> QR Code
				</p>
			</div>

			<ul className="space-y-4 mb-8 text-sm">
				{all_features.map((feature) => {
					const value = features[feature.key];
					return (
						<li key={feature.key} className="flex justify-between items-center">
							<span>{feature.label}</span>
							{value === true ? <FiCheck className="h-5 w-5 text-green-500" /> : value === "incoming" ? <span className="text-xs text-gray-500 italic">Segera Hadir</span> : <FiX className="h-5 w-5 text-red-500" />}
						</li>
					);
				})}
			</ul>

			<Link href="/signin">
				<Button color={isPremium ? "primary" : "secondary"} className="w-full px-4 py-2 h-12">
					{buttonLabel}
				</Button>
			</Link>
		</div>
	);
};

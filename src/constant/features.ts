import { IconType } from "react-icons";
import { FiBarChart, FiLink2, FiShield, FiZap } from "react-icons/fi";
export type FeatureProps = {
	icon: IconType;
	title: string;
	description: string;
	premium: boolean;
};
export const features_constant: FeatureProps[] = [
	{
		icon: FiLink2,
		title: "Custom Short URLs",
		description: "Create branded, memorable links that reflect your brand identity.",
		premium: true,
	},
	{
		icon: FiBarChart,
		title: "Advanced Analytics",
		description: "Track clicks, geographic data, and user behavior in real-time.",
		premium: true,
	},
	{
		icon: FiShield,
		title: "Link Security",
		description: "Enterprise-grade security to protect your links and data.",
		premium: false,
	},
	{
		icon: FiZap,
		title: "Lightning Fast",
		description: "Instant URL shortening with global CDN for maximum speed.",
		premium: false,
	},
];

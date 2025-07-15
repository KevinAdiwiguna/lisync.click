import { IconType } from "react-icons";
import { FiLink2, FiTrendingUp, FiEdit, FiCamera } from "react-icons/fi";

export type FeatureProps = {
	icon: IconType;
	title: string;
	description: string;
	premium: boolean;
};

export const features_constant: FeatureProps[] = [
	{
		icon: FiLink2,
		title: "Shortener Link",
		description: "Perpendek URL panjang Anda secara gratis tanpa batasan dasar.",
		premium: false,
	},
	{
		icon: FiTrendingUp,
		title: "Analytics Click",
		description: "Lihat jumlah klik dan analisis performa link Anda secara gratis.",
		premium: false,
	},
	{
		icon: FiEdit,
		title: "Custom Slug",
		description: "Buat URL dengan slug khusus sesuai keinginan Anda untuk branding yang maksimal.",
		premium: true,
	},
	{
		icon: FiCamera,
		title: "Generate QR Code",
		description: "Buat kode QR profesional dari link Anda secara instan.",
		premium: true,
	},
];

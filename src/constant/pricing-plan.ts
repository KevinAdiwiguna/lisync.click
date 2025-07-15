export type PricingFeatureKey = "shortener_link" | "generate_qr" | "analytics_click" | "link_security" | "fast_shortening" | "redirect_without_captcha" | "no_ads" | "custom_url" | "advanced_analytics" | "custom_slug";

export const all_features: { key: PricingFeatureKey; label: string }[] = [
	{ key: "shortener_link", label: "Shortener Link" },
	{ key: "generate_qr", label: "Generate QR Code" },
	{ key: "analytics_click", label: "Analytics Click" },
	{ key: "link_security", label: "Keamanan Tautan" },
	{ key: "fast_shortening", label: "Pemendekan Super Cepat" },
	{ key: "redirect_without_captcha", label: "Redirect Tanpa CAPTCHA" },
	{ key: "no_ads", label: "Tanpa Iklan" },
	{ key: "custom_url", label: "URL Pendek Kustom" },
	{ key: "advanced_analytics", label: "Analitik Lanjutan" },
	{ key: "custom_slug", label: "Custom Slug" },
];

export type PricingPlan = {
	id: string;
	title: string;
	price: number; // IDR
	description: string;
	features: Record<PricingFeatureKey, boolean | "incoming">;
	limits: {
		short_link_limit: number;
		qr_code_limit: number;
	};
	isPopular?: boolean;
	isPremium?: boolean;
};

export const pricing_plans: PricingPlan[] = [
	{
		id: "basic",
		title: "Basic",
		price: 25000,
		description: "Paket hemat untuk mahasiswa dan penggunaan pribadi.",
		features: {
			shortener_link: true,
			generate_qr: false,
			analytics_click: true,
			link_security: true,
			fast_shortening: true,
			redirect_without_captcha: "incoming",
			no_ads: "incoming",
			custom_url: false,
			advanced_analytics: false,
			custom_slug: false,
		},
		limits: {
			short_link_limit: 50,
			qr_code_limit: 25,
		},
	},
	{
		id: "standard",
		title: "Standard",
		price: 50000,
		description: "Paket ideal untuk UMKM dan freelancer pemula.",
		features: {
			shortener_link: true,
			generate_qr: true,
			analytics_click: true,
			link_security: true,
			fast_shortening: true,
			redirect_without_captcha: "incoming",
			no_ads: "incoming",
			custom_url: false,
			advanced_analytics: false,
			custom_slug: false,
		},
		limits: {
			short_link_limit: 100,
			qr_code_limit: 50,
		},
		isPopular: true,
	},
	{
		id: "pro",
		title: "Pro",
		price: 100000,
		description: "Paket profesional untuk bisnis berkembang dan besar.",
		features: {
			shortener_link: true,
			generate_qr: true,
			analytics_click: true,
			link_security: true,
			fast_shortening: true,
			redirect_without_captcha: "incoming",
			no_ads: "incoming",
			custom_url: true,
			advanced_analytics: true,
			custom_slug: true,
		},
		limits: {
			short_link_limit: 200,
			qr_code_limit: 100,
		},
		isPremium: true,
	},
];

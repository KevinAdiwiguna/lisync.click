import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NavProvider } from "@/context/nav-context";
import Navbar from "@/components/molecule/navigation";
import { Footer } from "@/components/organism/footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ShortLink – Shorten URLs with Style & Intelligence",
	description:
		"Transform long, messy URLs into clean, branded links with ShortLink. Track clicks, manage URLs, and gain insights with blazing fast performance and enterprise-grade security.",
	metadataBase: new URL("https://shortlink.io"), // ganti dengan domainmu
	keywords: [
		"url shortener",
		"custom short links",
		"link analytics",
		"branded urls",
		"shorten url",
		"track clicks",
		"link management",
		"ShortLink",
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title: "ShortLink – Shorten URLs with Style & Intelligence",
		description:
			"Clean, branded links that drive engagement. Track clicks, manage URLs, and analyze traffic with ShortLink.",
		url: "https://shortlink.io",
		siteName: "ShortLink",
		images: [
			{
				url: "https://shortlink.io/og-image.png", // ganti sesuai OG image kamu
				width: 1200,
				height: 630,
				alt: "ShortLink – Shorten URLs with Style",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "ShortLink – Shorten URLs with Style & Intelligence",
		description:
			"Clean, branded links that drive engagement. Track clicks, manage URLs, and analyze traffic with ShortLink.",
		images: ["https://shortlink.io/og-image.png"], // ganti dengan asset asli
		creator: "@shortlink",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NavProvider>
					<Navbar />
					<div className="pt-20 container mx-auto px-8">{children}</div>
					<Footer />
				</NavProvider>
			</body>
		</html>
	);
}

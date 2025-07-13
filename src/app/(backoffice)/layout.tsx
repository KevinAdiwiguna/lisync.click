import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NavProvider } from "@/context/nav-context";
import Sidebar from "@/components/organism/sidebar";
import { TopBar } from "@/components/organism/top-bar";
import { SessionProvider } from "next-auth/react";
import { ReactQueryProvider } from "@/providers/react-query-provider";

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
	description: "Transform long, messy URLs into clean, branded links with ShortLink. Track clicks, manage URLs, and gain insights with blazing fast performance and enterprise-grade security.",
	metadataBase: new URL("https://shortlink.io"),
	keywords: ["url shortener", "custom short links", "link analytics", "branded urls", "shorten url", "track clicks", "link management", "ShortLink"],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title: "ShortLink – Shorten URLs with Style & Intelligence",
		description: "Clean, branded links that drive engagement. Track clicks, manage URLs, and analyze traffic with ShortLink.",
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
		description: "Clean, branded links that drive engagement. Track clicks, manage URLs, and analyze traffic with ShortLink.",
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
				<ReactQueryProvider>
					<NavProvider>
						<div className="max-h-screen h-screen flex">
							<div className="h-screen">
								<Sidebar />
							</div>
							<div className="overflow-auto max-h-screen w-full">
								<TopBar />
								<div className="p-6">
									<SessionProvider>{children}</SessionProvider>
								</div>
							</div>
						</div>
					</NavProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}

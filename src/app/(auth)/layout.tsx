import type { Metadata } from "next";
import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sign In – ShortLink",
	description:
		"Sign in to your ShortLink account to manage your branded links, track analytics, and access premium features. Fast, secure, and privacy-first login.",
	metadataBase: new URL("https://shortlink.io"), // ganti sesuai domain asli
	keywords: [
		"ShortLink sign in",
		"url shortener login",
		"login shortlink",
		"sign in to manage links",
		"link dashboard",
		"shortlink analytics",
	],
	openGraph: {
		title: "Sign In – ShortLink",
		description:
			"Access your ShortLink dashboard to manage your shortened URLs, view analytics, and customize your experience.",
		url: "https://shortlink.io/signin", // sesuaikan path
		siteName: "ShortLink",
		images: [
			{
				url: "https://shortlink.io/og-image-signin.png", // ganti ke OG image login kamu
				width: 1200,
				height: 630,
				alt: "ShortLink Sign In",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sign In – ShortLink",
		description:
			"Sign in to manage your links, view analytics, and access premium tools on ShortLink.",
		images: ["https://shortlink.io/og-image-signin.png"], // sesuaikan
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
				{children}
			</body>
		</html>
	);
}

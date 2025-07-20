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
	title: "Lisync – Pendekkan Link dengan Gaya & Analitik Profesional",
	description: "Ubah link panjang menjadi tautan pendek yang profesional dan mudah diingat di Lisync. Pantau klik, buat QR Code, dan kelola URL Anda dengan mudah.",
	metadataBase: new URL("https://lisync.click"),
	keywords: ["pemendek link", "pemendek url", "url shortener indonesia", "link pendek profesional", "qr code generator", "pembuat qr code indonesia", "custom short urls", "link analytics", "pendekkan url", "link shortener gratis", "lisync", "lisync.click"],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title: "Lisync – Pendekkan Link dengan Gaya & Analitik Profesional",
		description: "Pendekkan link panjang menjadi branded link yang stylish di Lisync. Pantau statistik dan kelola URL Anda dengan aman dan mudah.",
		url: "https://lisync.click",
		siteName: "Lisync",
		images: [
			{
				url: "https://lisync.click/og-image.png",
				width: 1200,
				height: 630,
				alt: "Lisync – Pemendek Link dan Pembuat QR Code Profesional Indonesia",
			},
		],
		locale: "id_ID",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Lisync – Pemendek Link Profesional & Analitik Canggih",
		description: "Gunakan Lisync. untuk memendekkan link panjang menjadi URL pendek yang mudah diingat dan profesional.",
		images: ["https://lisync.click/og-image.png"],
		creator: "@kepinkun112",
	},
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta name="apple-mobile-web-app-title" content="Lisync" />
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

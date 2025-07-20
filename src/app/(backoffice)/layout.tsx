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
	title: "Dashboard – Kelola Link Pendek & Analitik di Lisync.click",
	description: "Kelola link pendek Anda secara profesional di dashboard Lisync.click. Pantau klik, buat tautan bermerek, dan analisis trafik dengan keamanan tingkat lanjut.",
	metadataBase: new URL("https://lisync.click"),
	keywords: ["pemendek link", "kelola link pendek", "analitik klik", "tautan pendek profesional", "pendekkan url", "branded urls", "manajemen link", "Lisync", "Lisync.click"],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title: "Dashboard – Kelola Link Pendek & Analitik di Lisync.click",
		description: "Akses dashboard Lisync.click untuk mengelola tautan pendek, memantau statistik klik, dan menganalisis trafik dengan mudah.",
		url: "https://lisync.click/dashboard",
		siteName: "Lisync.click",
		images: [
			{
				url: "https://lisync.click/og-image.png",
				width: 1200,
				height: 630,
				alt: "Dashboard Lisync.click – Kelola Link Pendek & Analitik",
			},
		],
		locale: "id_ID",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Dashboard Lisync.click – Kelola Link & Pantau Statistik Klik",
		description: "Kelola link pendek dan QR Code Anda dengan mudah di Lisync.click. Pantau klik, analisis trafik, dan buat tautan bermerek secara profesional.",
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

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
	title: "Masuk Akun – Lisync",
	description: "Masuk ke akun Lisync.click untuk memendekkan link, membuat QR Code, dan mengakses analitik tautan secara profesional. Aman, cepat, dan mudah.",
	metadataBase: new URL("https://lisync.click"),
	keywords: ["login lisync", "masuk lisync", "lisync sign in", "url shortener indonesia", "pemendek link login", "kelola link pendek", "dashboard link", "qr code generator login"],
	openGraph: {
		title: "Masuk Akun – Lisync",
		description: "Akses dashboard Lisync.click dan mulai kelola tautan pendek Anda dengan mudah. Pantau analitik dan buat QR Code kapan saja.",
		url: "https://lisync.click/signin",
		siteName: "Lisync",
		images: [
			{
				url: "https://lisync.click/og-image.png",
				width: 1200,
				height: 630,
				alt: "Masuk Akun Lisync – Kelola Link Pendek & QR Code",
			},
		],
		locale: "id_ID",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Masuk Akun – Lisync",
		description: "Login ke Lisync.click untuk mengelola tautan pendek, membuat QR Code, dan mengakses analitik profesional.",
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
				{children}
			</body>
		</html>
	);
}

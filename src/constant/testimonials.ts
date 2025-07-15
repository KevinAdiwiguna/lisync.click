export type TestimonialProps = {
	name: string;
	role: string;
	company: string;
	content: string;
	avatar: string;
};

export const testimonials_constant: TestimonialProps[] = [
	{
		name: "Rina Safitri",
		role: "Pemilik Usaha Kecil",
		company: "Rina Bakery",
		content: "Lisync.click sangat membantu bisnis saya! Link jadi lebih rapi dan pelanggan mudah mengakses menu kami.",
		avatar: "/avatars/rina.jpg",
	},
	{
		name: "Bagus Pratama",
		role: "Mahasiswa",
		company: "Universitas Indonesia",
		content: "Buat tugas atau share link jadi lebih simpel pakai Lisync.click. QR code-nya juga keren banget!",
		avatar: "/avatars/bagus.jpg",
	},
	{
		name: "Dewi Lestari",
		role: "Sosial Media Spesialis",
		company: "Agensi Kreatif Jakarta",
		content: "Dengan custom URL dan analytics Lisync.click, kampanye klien jadi lebih terukur dan profesional.",
		avatar: "/avatars/dewi.jpg",
	},
];

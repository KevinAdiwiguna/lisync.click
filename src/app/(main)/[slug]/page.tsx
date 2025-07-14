import { notFound } from "next/navigation";
import { prisma } from "../../../lib/prisma";
import { headers } from "next/headers";

interface Props {
	params: { slug: string };
}

export default async function SlugPage({ params }: Props) {
	const headersList = await headers();
	const { slug } = params;

	const link = await prisma.shortLink.findUnique({
		where: {
			slug: slug,
			isActive: true,
		},
		select: {
			destination: true,
			id: true,
		},
	});

	if (!link) {
		notFound();
	}

	await prisma.shortLink.update({
		where: {
			slug: slug,
		},
		data: {
			clickCount: {
				increment: 1,
			},
		},
	});

	const country = null;
	const userAgent = headersList.get("user-agent") ?? null;
	const referrer = headersList.get("referer") ?? null;
	const ipAddress = headersList.get("x-forwarded-for") ?? null;

	await prisma.clickLog.create({
		data: {
			shortLinkId: link.id,
			country: country,
			userAgent: userAgent,
			referrer: referrer,
			ip: ipAddress,
		},
	});

	return (
		<div className="min-h-screen flex flex-col justify-center items-center text-center space-y-4">
			<h1 className="text-2xl font-semibold">Short Link</h1>
			<p className="text-base-content/80">Tujuan dari link ini:</p>
			<p className="text-primary text-lg break-all max-w-md">{link.destination}</p>

			<a href={link.destination} target="_blank" rel="noopener noreferrer" className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition">
				Pergi ke Halaman Asli
			</a>
		</div>
	);
}

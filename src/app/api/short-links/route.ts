// app/api/short-links/route.ts
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const session = await auth();
	if (!session?.user?.id) {
		return NextResponse.json({ success: false, error: "Unauthenticated" }, { status: 401 });
	}

	const { searchParams } = new URL(req.url);
	const page = parseInt(searchParams.get("page") || "1");
	const limit = parseInt(searchParams.get("limit") || "5");

	const data = await prisma.shortLink.findMany({
		where: { userId: session.user.id },
		orderBy: { createdAt: "desc" },
		skip: (page - 1) * limit,
		take: limit,
		select: {
			id: true,
			slug: true,
			destination: true,
			createdAt: true,
			clickCount: true,
			isActive: true,
			expiresAt: true,
			customSlug: true
		},
	});

	const total = await prisma.shortLink.count({ where: { userId: session.user.id } });

	return NextResponse.json({
		success: true,
		data,
		meta: {
			total,
			page,
			hasMore: page * limit < total,
		},
	});
}

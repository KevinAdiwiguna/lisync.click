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

	const skip = (page - 1) * limit;

	const data = await prisma.clickLog.findMany({
		where: {
			shortLink: {
				userId: session.user.id,
			},
		},
		orderBy: {
			clickedAt: "desc",
		},
		skip,
		take: limit,
		select: {
			id: true,
			clickedAt: true,
			userAgent: true,
			shortLinkId: true,
			shortLink: {
				select: {
					slug: true,
				},
			},
		},
	});

	const total = await prisma.clickLog.count({
		where: {
			shortLink: {
				userId: session.user.id,
			},
		},
	});

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

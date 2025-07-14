"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { GetFiveLastLinkResponse } from "@/types/shortlink";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

export const CreateLinkData = async (formData: FormData) => {
	const session = await auth();
	if (!session?.user?.id) {
		return {
			success: false,
			error: "Unauthenticated",
		};
	}

	const userId = session.user.id;

	const url = formData.get("url")?.toString().trim();
	const inputPath = formData.get("path")?.toString().trim();

	if (!url) {
		return {
			success: false,
			error: "URL is required",
		};
	}

	const user = await prisma.user.findUnique({
		where: { id: userId },
		select: { plan: true },
	});

	if (!user) {
		return {
			success: false,
			error: "User not found",
		};
	}

	const currentCount = await prisma.shortLink.count({
		where: { userId },
	});

	const featureLimit = await prisma.featureLimit.findUnique({
		where: {
			userId_feature: {
				userId,
				feature: "short_link_limit",
			},
		},
	});

	if (featureLimit && currentCount >= featureLimit.value) {
		return {
			success: false,
			error: "The shortlink limit has been reached for your account.",
		};
	}

	let slug: string;
	if (user.plan === "basic") {
		if (inputPath) {
			return {
				success: false,
				error: "Basic package cannot use custom slug.",
			};
		}
		slug = nanoid(7);
	} else {
		if (inputPath) {
			const existing = await prisma.shortLink.findUnique({
				where: { slug: inputPath },
			});
			if (existing) {
				return {
					success: false,
					error: "slug already used.",
				};
			}
			slug = inputPath;
		} else {
			slug = nanoid(7);
		}
	}

	const newLink = await prisma.shortLink.create({
		data: {
			userId,
			destination: url,
			slug,
		},
	});

	revalidatePath("/dashboard");
	return newLink;
};

export const GetFiveLastLink = async (): Promise<GetFiveLastLinkResponse> => {
	const session = await auth();

	if (!session?.user?.id) {
		return {
			success: false,
			error: "Unauthenticated",
		};
	}

	try {
		const result = await prisma.shortLink.findMany({
			where: {
				userId: session.user.id,
			},
			orderBy: {
				createdAt: "desc",
			},
			take: 5,
			select: {
				id: true,
				slug: true,
				destination: true,
				createdAt: true,
				clickCount: true,
				isActive: true,
				expiresAt: true,
			},
		});

		return {
			success: true,
			data: result,
		};
	} catch (error) {
		console.error("failed to get data:", error);
		return {
			success: false,
			error: "failed to get data",
		};
	}
};

export const DeleteShortLink = async (id: string): Promise<{ success: boolean; error?: string }> => {
	const session = await auth();

	if (!session?.user?.id) {
		return {
			success: false,
			error: "Unauthenticated",
		};
	}

	if (!id || typeof id !== "string") {
		return {
			success: false,
			error: "Invalid or missing ID",
		};
	}

	try {
		const shortLink = await prisma.shortLink.findUnique({
			where: { id },
			select: {
				id: true,
				userId: true,
			},
		});

		if (!shortLink || shortLink.userId !== session.user.id) {
			return {
				success: false,
				error: "Unauthorized access or link not found",
			};
		}

		await prisma.shortLink.delete({
			where: { id: shortLink.id },
		});

		revalidatePath("/dashboard/links");

		return {
			success: true,
		};
	} catch (error) {
		console.error("DeleteShortLink error:", error);
		return {
			success: false,
			error: "Internal server error",
		};
	}
};

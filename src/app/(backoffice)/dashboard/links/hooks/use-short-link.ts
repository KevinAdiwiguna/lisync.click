import { useInfiniteQuery } from "@tanstack/react-query";

type ShortLink = {
	id: string;
	slug: string;
	destination: string;
	createdAt: string;
	clickCount: number;
	isActive: boolean;
	expiresAt: string | null;
    customSlug: boolean
};

type PaginatedResponse = {
	success: boolean;
	data: ShortLink[];
	meta: {
		page: number;
		hasMore: boolean;
		total: number;
	};
};
export const useShortLinks = () => {
	return useInfiniteQuery<PaginatedResponse>({
		queryKey: ["short-links"],
		queryFn: async ({ pageParam = 1 }) => {
			const res = await fetch(`/api/short-links?page=${pageParam}&limit=20`);
			if (!res.ok) throw new Error("Gagal mengambil data");
			return res.json();
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.meta.hasMore ? lastPage.meta.page + 1 : undefined;
		},
	});
};

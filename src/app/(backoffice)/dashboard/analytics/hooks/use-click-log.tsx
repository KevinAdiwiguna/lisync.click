import { useInfiniteQuery } from "@tanstack/react-query";

type ClickLog = {
	id: string;
	country?: string | null;
	userAgent?: string | null;
	clickedAt: string;
	shortLink: {
		slug: string;
	};
};

type PaginatedResponse = {
	success: boolean;
	data: ClickLog[];
	meta: {
		page: number;
		hasMore: boolean;
		total: number;
	};
};

export const useClickLogs = () => {
	return useInfiniteQuery<PaginatedResponse>({
		queryKey: ["click-logs"],
		queryFn: async ({ pageParam = 1 }) => {
			const res = await fetch(`/api/short-links/analytics?page=${pageParam}&limit=20`);
			if (!res.ok) throw new Error("Gagal mengambil data klik");
			return res.json();
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.meta.hasMore ? lastPage.meta.page + 1 : undefined;
		},
	});
};

"use client";

import { useEffect, useRef } from "react";
import { useClickLogs } from "../hooks/use-click-log";

export const ClickLogList = () => {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useClickLogs();
	const loadMoreRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!hasNextPage || !loadMoreRef.current) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				fetchNextPage();
			}
		});

		const target = loadMoreRef.current;
		observer.observe(target);

		return () => observer.unobserve(target);
	}, [hasNextPage, fetchNextPage]);

	if (isLoading) {
		return (
			<div className="space-y-4">
				{Array.from({ length: 5 }).map((_, i) => (
					<ClickLogSkeleton key={i} />
				))}
			</div>
		);
	}

	return (
		<div className="space-y-4">
			{data?.pages.flatMap((page) =>
				page.data.map((log) => (
					<div
						key={log.id}
						className="bg-base-100/75 border border-base-300 py-3 px-4 shadow-md rounded-box flex flex-col md:flex-row md:justify-between md:items-center gap-4"
					>
						<div className="flex flex-col space-y-2 flex-grow">
							<div className="flex items-center gap-2 flex-wrap">
								<span className="font-semibold text-primary">{process.env.AUTH_URL}{log.shortLink.slug}</span>
							</div>

							<div className="text-sm text-base-content/80">
								<p>Clicked At: {new Date(log.clickedAt).toLocaleString("id-ID")}</p>
								<p>Country: {log.country || "Unknown"}</p>
								<p>Device: {log.userAgent || "Unknown"}</p>
							</div>
						</div>
					</div>
				))
			)}

			{hasNextPage && (
				<div ref={loadMoreRef} className="text-center py-4 text-sm text-base-content/60">
					{isFetchingNextPage ? "Loading more..." : "Scroll untuk load lagi..."}
				</div>
			)}

			{!hasNextPage && !isLoading && <div className="text-center py-4 text-sm text-base-content/60">Semua log sudah dimuat.</div>}
		</div>
	);
};

const ClickLogSkeleton = () => {
	return (
		<div className="bg-base-100/75 border border-base-300 py-3 px-4 shadow-md rounded-box flex flex-col animate-pulse gap-4">
			<div className="h-4 w-32 bg-base-300 rounded" />
			<div className="h-3 w-44 bg-base-300 rounded" />
			<div className="h-3 w-40 bg-base-300 rounded" />
			<div className="h-3 w-52 bg-base-300 rounded" />
		</div>
	);
};

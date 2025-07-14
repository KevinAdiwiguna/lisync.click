"use client";

import { useEffect, useRef } from "react";
import { useShortLinks } from "../hooks/use-short-link";
import Link from "next/link";
import Button from "@/components/atom/button";
import { IoOpenOutline } from "react-icons/io5";
import { CopyButton } from "@/components/atom/copy-button";
import { ButtonDeleteLink } from "./delete-button";
import { FaCrown } from "react-icons/fa";

export const ShortLinkList = () => {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } = useShortLinks();
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

	const handleDeletedLink = () => {
		refetch();
	};

	if (isLoading) {
		return (
			<div className="space-y-4">
				{Array.from({ length: 5 }).map((_, i) => (
					<ShortLinkSkeleton key={i} />
				))}
			</div>
		);
	}

	return (
		<div className="space-y-4">
			{data?.pages.flatMap((page) =>
				page.data.map((res) => {
					const origin = typeof window !== "undefined" ? window.location.origin : "";
					const fullLink = `${origin}/${res.slug}`;

					return (
						<div key={res.id} className="bg-base-100/75 border border-base-300 py-3 px-4 shadow-md rounded-box flex flex-col md:flex-row md:justify-between md:items-center gap-4">
							<div className="flex flex-col space-y-2 flex-grow">
								<div className="flex items-center gap-2 flex-wrap">
									<span className="text-success-content text-lg md:text-xl truncate max-w-full block">{res.destination}</span>
									{res.customSlug && (
										<span className="flex items-center gap-1 text-yellow-500 text-sm" title="Premium user">
											<FaCrown className="w-4 h-4" />
											<span className="font-semibold">Premium</span>
										</span>
									)}
								</div>

								<Link href={fullLink} className="text-sm text-primary underline break-words" target="_blank">
									{fullLink}
								</Link>

								<div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mt-2 text-base-content/80">
									<p>Created: {new Date(res.createdAt).toLocaleDateString("id-ID")}</p>
									<p>Clicks: {res.clickCount}</p>
									<p>Adds: {res.withAds === true ? "on" : "off"}</p>
									<p>Captcha: {res.captcha === true ? "on" : "off"}</p>
								</div>
							</div>

							<div className="flex justify-start md:justify-end items-center gap-2 flex-wrap">
								<Link href={fullLink} target="_blank">
									<Button color="outline" className="p-2">
										<IoOpenOutline className="w-4 h-4" />
									</Button>
								</Link>
								<CopyButton text={fullLink} />
								<ButtonDeleteLink linkId={res.id} onDeleted={handleDeletedLink} />
							</div>
						</div>
					);
				})
			)}

			{hasNextPage && (
				<div ref={loadMoreRef} className="text-center py-4 text-sm text-base-content/60">
					{isFetchingNextPage ? "Loading more..." : "Scroll untuk load lagi..."}
				</div>
			)}

			{!hasNextPage && !isLoading && <div className="text-center py-4 text-sm text-base-content/60">Semua link sudah dimuat.</div>}
		</div>
	);
};

const ShortLinkSkeleton = () => {
	return (
		<div className="bg-base-100/75 border border-base-300 py-3 px-4 shadow-md rounded-box flex flex-col md:flex-row justify-between items-center animate-pulse gap-4">
			<div className="flex flex-col space-y-2 flex-grow">
				<div className="flex items-center gap-2">
					<div className="h-5 w-44 bg-base-300 rounded" />
					<div className="h-4 w-20 bg-yellow-200 rounded" />
				</div>
				<div className="h-4 w-56 bg-primary/30 rounded" />
				<div className="flex flex-wrap gap-4 mt-2">
					<div className="h-3 w-24 bg-base-300 rounded" />
					<div className="h-3 w-16 bg-base-300 rounded" />
				</div>
			</div>
			<div className="flex items-center gap-2 pr-2">
				<div className="h-8 w-8 bg-base-300 rounded" />
				<div className="h-8 w-8 bg-base-300 rounded" />
				<div className="h-8 w-8 bg-base-300 rounded" />
			</div>
		</div>
	);
};

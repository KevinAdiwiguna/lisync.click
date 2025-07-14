export interface ShortLinkItem {
    id: string;
    slug: string;
    destination: string;
    createdAt: Date;
    clickCount: number;
    isActive: boolean;
    expiresAt: Date | null;
}

export interface GetFiveLastLinkResponse {
    success: boolean;
    data?: ShortLinkItem[];
    error?: string;
}


export interface GetFiveLastLinkResponse {
	success: boolean;
	data?: ShortLinkItem[];
	error?: string;
	meta?: {
		page: number;
		total: number;
		hasMore: boolean;
	};
}

"use client";

import { FiTrash2, FiLoader } from "react-icons/fi";
import { DeleteShortLink } from "@/actions/link.action";
import { useTransition } from "react";

export const ButtonDeleteLink = ({
	linkId,
	onDeleted,
}: {
	linkId: string;
	onDeleted: () => void;
}) => {
	const [loading, startTransition] = useTransition();

	const handleDelete = () => {
		startTransition(async () => {
			const res = await DeleteShortLink(linkId);
			if (res.success) {
				onDeleted();
			} else {
				console.error(res.error);
			}
		});
	};

	return (
		<button
			type="button"
			className="cursor-pointer p-2 rounded-field hover:bg-red-100 transition-colors border border-red-500 text-red-500 disabled:opacity-50"
			disabled={loading}
			title="Delete"
			onClick={handleDelete}
		>
			{loading ? <FiLoader size={18} className="animate-spin" /> : <FiTrash2 size={18} />}
		</button>
	);
};

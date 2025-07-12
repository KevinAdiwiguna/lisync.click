"use client";
import { FiPlus } from "react-icons/fi";
import Button from "../atom/button";
import { useSession } from "next-auth/react";

export const CreateLink = () => {
	const { data: session } = useSession();
	return (
		<div className="w-full rounded-box bg-base-100/75 border-base-300 shadow-xl p-4 space-y-3">
			<div className="flex items-center gap-x-4">
				<FiPlus className="h-6 w-6 text-primary" />
				<h2 className="text-xl">Quik Create</h2>
			</div>
			<form className="flex flex-col lg:flex-row gap-4">
				<input type="url" placeholder="https://example.com/your-long-url" className="flex-1 p-3 rounded-field border border-base-300" />
				<input type="text" placeholder="custom-name (premium)" className="rounded-field p-3 border border-base-300 disabled:cursor-not-allowed" disabled={session?.user.plan === "FREE"} />
				<Button type="submit" color="primary">
					Create Link
				</Button>
			</form>
		</div>
	);
};

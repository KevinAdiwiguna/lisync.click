"use client";
import Button from "../atom/button";
import { useSession } from "next-auth/react";
import { useTransition } from "react";
import { CreateLinkData } from "@/actions/link.action";

export const CreateLink = () => {
	const { data: session } = useSession();
	const [loading, startTransition] = useTransition();

	const createLink = (formData: FormData) => {
		startTransition(async () => {
			await CreateLinkData(formData);
		});
	};
	return (
		<form className="flex flex-col lg:flex-row gap-4" action={createLink}>
			<input name="url" type="url" placeholder="https://example.com/your-long-url" className="flex-1 p-3 rounded-field border border-base-300" />
			<input name="path" type="text" placeholder="custom-name (premium)" className="rounded-field p-3 border border-base-300 disabled:cursor-not-allowed" disabled={session?.user.plan === "basic"} />
			<Button type="submit" color="primary">
				{loading ? "Creating..." : "Create Link"}
			</Button>
		</form>
	);
};

import { FiPlus } from "react-icons/fi";
import { CreateLink } from "../atom/create-link";

import { GetFiveLastLink } from "@/actions/link.action";
import { CopyButton } from "../atom/copy-button";

export const CreateLinkContainer = async () => {
	const getFiveLastLink = await GetFiveLastLink();
	return (
		<div className="w-full rounded-box bg-base-100/75 border-base-300 shadow-xl p-4 space-y-3">
			<div className="flex items-center gap-x-4">
				<FiPlus className="h-6 w-6 text-primary" />
				<h2 className="text-xl">Quik Create</h2>
			</div>
			<CreateLink />

			<div className="space-y-2 mt-4">
				{getFiveLastLink?.data?.map((res) => (
					<div key={res.id} className="bg-success/45 border-success py-2 px-4  rounded-field flex justify-between items-center">
						<span className="text-success-content">{`${process.env.AUTH_URL}/${res.slug}`}</span>
						<CopyButton text={`${process.env.AUTH_URL}/${res.slug}`} />
					</div>
				))}
			</div>
		</div>
	);
};

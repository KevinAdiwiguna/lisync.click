import { CreateLink } from "@/components/molecule/create-link";
import { StatCardContainer, StatCardContainerskeleton } from "@/components/molecule/stat-card";
import React, { Suspense } from "react";


const page = () => {
	return (
		<div className="space-y-8">
			<Suspense fallback={<StatCardContainerskeleton />}>
				<StatCardContainer />
			</Suspense>

            <CreateLink />
		</div>
	);
};

export default page;

import { CreateLinkContainer, CreateLinkContainerSkeleton } from "@/components/molecule/create-link";
import { StatCardContainer, StatCardContainerskeleton } from "@/components/molecule/stat-card";
import React, { Suspense } from "react";

const page = () => {
	return (
		<div className="space-y-8">
			<Suspense fallback={<StatCardContainerskeleton />}>
				<StatCardContainer />
			</Suspense>

			<Suspense fallback={<CreateLinkContainerSkeleton />}>
				<CreateLinkContainer />
			</Suspense>
		</div>
	);
};

export default page;

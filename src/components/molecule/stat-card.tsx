import { IconType } from "react-icons";
import { IoLinkOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { RiVipCrown2Line } from "react-icons/ri";

type StatCardProps = {
	icon: IconType;
	counter: number;
	label: string;
	premium: boolean
};

import { GetTotalClick, GetTotalClickPerDay, GetTotalLink } from "@/actions/stat.action";

export const StatCardContainer = async () => {
	const totalClick = await GetTotalClick();
	const totalClickPerDay = await GetTotalClickPerDay();
	const totalLink = await GetTotalLink();

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
			<StatCard counter={totalClick} icon={IoLinkOutline} label="Total Links" premium={false} />
			<StatCard counter={totalClickPerDay} icon={FaArrowTrendUp} label="Total Clicks" premium={false} />
			<StatCard counter={totalLink} icon={LuChartColumnIncreasing} label="Clicked Today" premium={false} />
			<StatCard counter={2} icon={RiVipCrown2Line} label="Incoming Feature" premium={true} />
		</div>
	);
};

export const StatCardContainerskeleton = async () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<StatCardSkeleton />
			<StatCardSkeleton />
			<StatCardSkeleton />
			<StatCardSkeleton />
		</div>
	);
};

export const StatCardSkeleton = () => {
	return (
		<div className="bg-base-100/75 shadow-xl rounded-box border border-base-300 p-6 w-full animate-pulse">
			<div className="p-3 bg-primary/10 w-fit rounded-field">
				<div className="h-5 w-5 bg-primary/30 rounded" />
			</div>
			<div className="h-6 w-16 bg-base-300 rounded mt-4" />
			<div className="h-4 w-24 bg-base-200 rounded mt-2" />
		</div>
	);
};

const StatCard = ({ counter, icon: Icon, label }: StatCardProps) => {
	return (
		<div className="bg-base-100/75 shadow-xl rounded-box border border-base-300 p-6 w-full">
			<div className="p-3 bg-primary/15 w-fit rounded-field">
				<Icon className="h-5 w-5 text-primary" />
			</div>
			<p className="text-xl font-semibold mt-4">{counter}</p>
			<p className="text-sm text-base-content/60">{label}</p>
		</div>
	);
};

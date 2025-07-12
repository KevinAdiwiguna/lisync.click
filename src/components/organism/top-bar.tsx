"use client";

import { useNav } from "@/context/nav-context";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export const TopBar = () => {
	const { isOpen, toggle } = useNav();
	const path = usePathname();

	let title = "Dashboard";
	let description = "Dashboard";

	if (path === "/dashboard") {
		title = "Dashboard";
		description = "Welcome back! Here's your link performance summary.";
	} else if (path === "/my-links") {
		title = "My Links";
		description = "Manage and create your shortened URLs.";
	} else if (path === "/Analytics") {
		title = "Analytics";
		description = "Detailed insights into your link performance.";
	} else if (path === "/Settings") {
		title = "Settings";
		description = "Manage your account and preferences.";
	}
	return (
		<div className="bg-base-100 shadow w-full flex justify-between items-center p-4 border-b border-base-300" >
			<div className="flex justify-center items-center gap-x-3">
				<button onClick={toggle} aria-label="Toggle Menu" className="lg:hidden">
					{isOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
				</button>
				<div>
					<h1 className="font-light text-xl">{title}</h1>
					<p className="hidden lg:block">{description}</p>
				</div>
			</div>

			<div></div>
		</div>
	);
};

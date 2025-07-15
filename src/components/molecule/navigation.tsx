"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "@/components/atom/button";
import { useNav } from "@/context/nav-context";

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-base-200 border-gray-200">
			<div className="md:hidden">
				<MobileNav />
			</div>
			<div className="hidden md:flex">
				<DesktopNav />
			</div>
		</nav>
	);
}

function MobileNav() {
	const { isOpen, toggle, close } = useNav();

	return (
		<div className="flex items-center justify-between p-4">
			<div className="">
				<span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">lisync</span>
			</div>
			<button onClick={toggle} aria-label="Toggle Menu">
				{isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
			</button>

			{isOpen && (
				<div className="absolute top-14 left-0 w-full bg-base-200 shadow-md">
					<div className="flex flex-col gap-2 px-4 py-4">
						<NavLink href="#features" onClick={close}>
							Features
						</NavLink>
						<NavLink href="#pricing" onClick={close}>
							Pricing
						</NavLink>
						<NavLink href="#review" onClick={close}>
							Review
						</NavLink>
						<Button color="outline" onClick={close}>
							<Link href={"/signin"}>Sign In</Link>
						</Button>
						<Button color="primary" onClick={close}>
							<Link href={"/signin"}>Get Started</Link>
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

function DesktopNav() {
	return (
		<div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
			<div className="">
				<span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">lisync</span>
			</div>
			<div className="flex items-center gap-6">
				<NavLink href="#features">Features</NavLink>
				<NavLink href="#pricing">Pricing</NavLink>
				<NavLink href="#review">Review</NavLink>
				<Link href={"/signin"}>
					<Button color="outline">Sign In</Button>
				</Link>
				<Link href={"/signin"}>
					<Button color="primary">Get Started</Button>
				</Link>
			</div>
		</div>
	);
}

function NavLink({ href, children, onClick }: { href: string; children: ReactNode; onClick?: () => void }) {
	return (
		<Link href={href} onClick={onClick} className="text-sm font-medium hover:underline">
			{children}
		</Link>
	);
}

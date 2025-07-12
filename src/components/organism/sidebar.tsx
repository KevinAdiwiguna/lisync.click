"use client";

import Link from "next/link";
import { useNav } from "@/context/nav-context";
import { FaHome, FaLink, FaChartBar, FaCog } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Sidebar() {
  const { isOpen, close } = useNav();

  return (
    <>
      {/* Backdrop Mobile */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity lg:hidden h-screen",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={close}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-base-100 shadow z-40 transform transition-transform lg:translate-x-0 border-base-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:static lg:block"
        )}
      >
        <div className="p-4 font-bold text-xl flex items-center gap-2">
        <Image src={"/logo.png"} alt="Zync.click logo" width={45} height={45} />
          <h1>Zync.Click</h1>
        </div>
        <nav className="mt-4 space-y-2 px-4">
          <SidebarLink href="/dashboard" icon={<FaHome size={18} />}>Overview</SidebarLink>
          <SidebarLink href="/dashboard/links" icon={<FaLink size={18} />}>My Links</SidebarLink>
          <SidebarLink href="/dashboard/analytics" icon={<FaChartBar size={18} />}>Analytics</SidebarLink>
          <SidebarLink href="/dashboard/settings" icon={<FaCog size={18} />}>Settings</SidebarLink>
        </nav>
      </aside>
    </>
  );
}

function SidebarLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 py-2 px-3 rounded-field transition-colors",
        isActive
          ? "bg-base-300 font-semibold"
          : " hover:bg-neutral/10"
      )}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

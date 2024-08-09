"use client";

import Link from "next/link";
import { UserButton } from "@/components/auth";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  const clsname = (route: string) => cn(
    "text-base text-white",
    pathname === route && 'font-medium text-primary'
  )
  return (
    <div className="bg-gradient flex justify-between items-center px-6 py-4 rounded-xl w-full shadow-sm">
      <div className="flex gap-6">
        <Link href="/client" className={clsname('/client')}>Client</Link>
        <Link href="/server" className={clsname('/server')}>Server</Link>
        <Link href="/admin" className={clsname('/admin')}>Admin</Link>
        <Link href="/settings" className={clsname('/settings')}>Settings</Link>
      </div>
      <UserButton />
    </div>
  );
}

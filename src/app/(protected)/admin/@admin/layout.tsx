"use client"
import { useSelectedLayoutSegment } from "next/navigation";


export default function AdminLayout({
    children,
    admin,
    user,
  }: React.PropsWithChildren<{ admin: React.ReactNode; user: React.ReactNode }>) {
    const allSegment = useSelectedLayoutSegment()
    
    return <div>
    {children}
    {allSegment}
    </div>
  }
  
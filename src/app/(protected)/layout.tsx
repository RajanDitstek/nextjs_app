import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Navbar } from "./_components/navbar";
import { Toaster } from "sonner";

export default async function ProtectedLayout({ 
  children 
}: { 
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <div className="h-full">
        <div className="flex flex-col gap-10 items-center justify-center">
          <Navbar />
          {children}
          <Toaster  richColors closeButton />
        </div>
      </div>
    </SessionProvider>
  )
}
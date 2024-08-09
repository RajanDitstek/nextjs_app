'use client'

import { UserInfo } from "@/components/user-module";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function ServerPage() {
  const user = useCurrentUser()

  return (
    <div>
      <UserInfo user={user} label="Client component" />
    </div>
  )
} 
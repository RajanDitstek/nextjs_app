import { UserInfo } from "@/components/user-module";
import { currentUser } from "@/lib/auth-lib";

export default async function ServerPage() {
  const user = await currentUser()

  return (
    <div>
      <UserInfo user={user} label="Server component" />
    </div>
  )
} 
import { NewPasswordForm } from "@/components/auth"
import { Suspense } from "react"

export default function NewPasswordPage() {
  return (
    <Suspense>
      <NewPasswordForm />
    </Suspense>
  )
}
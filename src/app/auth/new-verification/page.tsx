import { NewVerificationForm } from "@/components/auth";
import { Suspense } from "react";

export default function NewVerificationPage() {
  return (
    <Suspense>
      <NewVerificationForm />
    </Suspense>
  )
}
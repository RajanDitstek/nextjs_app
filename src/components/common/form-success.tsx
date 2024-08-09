import { CheckCircle } from "lucide-react"

interface FormSuccessProps {
  message?: string
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null

  return (
    <div className="flex items-center gap-2 bg-emerald-500/15 rounded-md text-sm text-emerald-500 p-3">
      <CheckCircle className="size-4" />
      {message}
    </div>
  )
}
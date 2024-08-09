import { FaExclamationTriangle } from "react-icons/fa";

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-2 bg-destructive/15 rounded-md text-sm text-destructive p-3">
      <FaExclamationTriangle className="size-4" />
      {message}
    </div>
  );
}

import { CardWrapper } from "@/components/common";
import { FaExclamationTriangle } from "react-icons/fa";

export function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <FaExclamationTriangle className="text-destructive size-6" />
      </div>
    </CardWrapper>
  );
}

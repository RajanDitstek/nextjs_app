"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/app-routes";
import { AuthProviders } from "@/types/app";

export function Social() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  function onClick(provider: AuthProviders) {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div className="flex items-center w-full gap-2">
      <Button
        size="lg"
        variant="outline"
        onClick={() => onClick(AuthProviders.GOOGLE)}
        className="w-full"
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => onClick(AuthProviders.GITHUB)}
        className="w-full"
      >
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
}

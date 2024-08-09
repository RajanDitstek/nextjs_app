"use client";

import { AppRoutes } from "@/lib/app-routes";
import { LoginForm } from "@/components/auth";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui";
import { ActionModes } from "@/types/app";
import { useRouter } from "next/navigation";

type LoginActionProps = React.PropsWithChildren<{
  mode?: ActionModes;
  asChild?: boolean;
}>;

export function LoginAction(props: LoginActionProps) {
  const { asChild, children, mode } = props;
  const router = useRouter();

  const onClick = () => {
    router.push(AppRoutes.LOGIN);
  };

  if (mode === ActionModes.MODAL) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}

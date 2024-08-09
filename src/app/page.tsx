import { LoginAction } from "@/components/auth";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

const font = Raleway({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center gap-y-6 bg-gradient">
      <h1
        className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className
        )}
      >
        Authentication Toolkit
      </h1>

      <p className="text-white text-lg">
        Complete solution for NextJS authentication
      </p>

      <div>
        <LoginAction>
          <Button variant={"secondary"}>Login</Button>
        </LoginAction>
      </div>
    </main>
  );
}

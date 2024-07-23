import { Link } from "next-view-transitions";
import Balancer from "react-wrap-balancer";

import { auth } from "@local/auth";
import { cn } from "@local/ui";
import { buttonVariants } from "@local/ui/button";

import LoginButton from "@/components/signIn";

export default async function Home() {
  const session = await auth();

  return (
    <main className="container flex min-h-[calc(100vh-4.0625rem)] flex-col items-center justify-center gap-6 overflow-hidden pb-8 pt-6 md:py-10">
      <h1
        className="z-20 animate-fade-up bg-gradient-to-b from-foreground to-primary bg-clip-text py-8 text-center text-4xl font-bold text-transparent sm:text-8xl"
        style={{
          animationDelay: "0.20s",
          animationFillMode: "forwards",
        }}
      >
        <Balancer>Welcome to FlexRoster</Balancer>
      </h1>

      <div className="flex flex-col justify-between px-2 py-2 pb-2 sm:flex-row">
        {session ? (
          <Link
            prefetch={false}
            href="/dashboard"
            className={cn(
              "m-2 text-2xl font-medium",
              buttonVariants({ size: "lg", variant: "outline" }),
            )}
          >
            Dashboard
          </Link>
        ) : (
          <LoginButton />
        )}

        <Link
          prefetch={false}
          href="/help"
          className={cn(
            "m-2 text-2xl font-medium",
            buttonVariants({ size: "lg", variant: "outline" }),
          )}
        >
          Help
        </Link>
        <BottomGradient />
      </div>
    </main>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

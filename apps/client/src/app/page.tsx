import { Link } from "next-view-transitions";

import { cn } from "@local/ui";
import { buttonVariants } from "@local/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="z-20 bg-gradient-to-b from-foreground to-primary bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-8xl">
        Welcome to FlexRoster
      </h1>

      <div className="flex justify-between px-2">
        <Link
          prefetch={false}
          href="/dashboard"
          className={cn(
            "text-2xl font-medium",
            buttonVariants({ size: "lg", variant: "outline" }),
          )}
        >
          Login
        </Link>
      </div>
      <div className="pt-2">
        <Link
          prefetch={false}
          href="/help"
          className={cn(
            "text-2xl font-medium",
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

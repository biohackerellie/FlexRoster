import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-center">
      <h1 className="z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-8xl">
        Welcome to FLEX
      </h1>

      <div>
        <Button asChild>
          <Link prefetch={false} href="/dashboard">
            Open Dashboard
          </Link>
        </Button>
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

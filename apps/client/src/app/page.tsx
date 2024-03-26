import Link from "next/link";

import { ButtonGlow } from "@/components/ui/buttonGlow";

export default async function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-center">
      <h1 className="z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-8xl">
        Welcome to FLEX
      </h1>

      <div>
        <ButtonGlow>
          <Link href="/dashboard">Open Dashboard</Link>
        </ButtonGlow>
      </div>
    </main>
  );
}

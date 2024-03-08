import Link from "next/link";

import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center  p-12">
      <h1 className="text-8xl font-bold">Welcome to STEAM</h1>

      <div>
        <Button asChild>
          <Link href="/dashboard">Open Dashboard</Link>
        </Button>
      </div>
    </main>
  );
}

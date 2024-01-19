import fetch from '@/lib/eden';
import { env } from '@/env.mjs';

async function getData() {
  const data = await fetch('/api/classes/', {});
  return data.data;
}

export default async function Home() {
  const classes = await getData();
  console.log(classes);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome to STEAM
    </main>
  );
}

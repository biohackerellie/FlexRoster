import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          Welcome to the Student Steam Scheduler
        </h1>
        <h2 className="text-4xl font-bold text-center">
          Please login to continue
        </h2>
      </div>
    </main>
  );
}

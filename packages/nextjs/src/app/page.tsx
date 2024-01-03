import Image from 'next/image';
import { Button } from '@/components/ui/buttons/button';
import { auth, signIn } from '@student_scheduler/auth';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          Welcome to the Student Steam Scheduler
        </h1>
        <form>
          <h2 className="text-4xl font-bold text-center">
            Please
            <Button
              size="lg"
              formAction={async () => {
                'use server';
                await signIn('azure-ad');
              }}
            >
              login
            </Button>
            to continue
          </h2>
        </form>
      </div>
    </main>
  );
}

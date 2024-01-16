import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { auth, signIn } from '@/lib/auth';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <Button
          formAction={async () => {
            'use server';
            await signIn();
          }}
        >
          Sign in
        </Button>
      </form>
    </main>
  );
}

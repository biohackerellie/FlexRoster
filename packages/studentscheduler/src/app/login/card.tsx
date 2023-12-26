'use client';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/buttons/button';
import React from 'react';
import { LogIn } from 'lucide-react';

const handleLogin = async () => {
  await signIn('azure-ad', { callbackUrl: '/' });
};

export default function LoginCard() {
  return (
    <>
      <div className="drop-shadow-md absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-lg    ">
        <div>
          <LogIn />
          <Button
            size={'lg'}
            className=" w-full text-foreground font-bold text-4xl"
            variant="outline"
            onClick={() => handleLogin()}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

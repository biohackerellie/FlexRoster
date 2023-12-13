'use client';
import { signIn } from 'next-auth/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from '@nextui-org/react';
import React from 'react';
import { LogIn } from 'lucide-react';

const handleLogin = async () => {
  await signIn('azure-ad', { callbackUrl: '/' });
};

export default function LoginCard() {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[600px] max-h-[780px]"
      shadow="sm"
    >
      <CardHeader>
        <h2 className="text-2xl text-foreground font-semibold">Login</h2>
      </CardHeader>
      <CardBody>
        <Button endContent={<LogIn />} onPress={() => handleLogin()}>
          Login
        </Button>
      </CardBody>
    </Card>
  );
}

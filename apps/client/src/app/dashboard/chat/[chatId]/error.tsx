"use client";

import { useEffect } from "react";

import { Button } from "@local/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@local/ui/card";
import { Shell } from "@local/ui/shell";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  let message = "An error occurred. Please try again later.";
  if (error.message) {
    message = error.message;
  }
  return (
    <Shell>
      <Card>
        <CardContent>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Something went wrong!
            </CardTitle>
          </CardHeader>
          <p className="text-lg">{message}</p>
          <Button onClick={reset} className="mt-4">
            Try again
          </Button>
        </CardContent>
      </Card>
    </Shell>
  );
}

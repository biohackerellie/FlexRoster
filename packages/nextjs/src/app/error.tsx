'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
      <p>{error.digest}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import { env } from '@/env.js';
import { useRouter } from 'next/navigation';

interface SocketData {
  message: string;
}

// interface SocketHeaders {
//   to: string;
//   from: string;
// }

export default function useWebSocket() {
  const router = useRouter();
  const ws = useRef<WebSocket>();

  const [messages, setMessages] = useState<SocketData[]>([]);

  useEffect(() => {
    ws.current = new WebSocket(env.NEXT_PUBLIC_SOCKET);

    ws.current.onopen = (headers) => {
      console.log('socket opened');
    };
    ws.current.onclose = (ev) => {
      console.log(ev.code);
      if (ev.code === 4001) {
        router.push('/login');
      }
      console.log('socket closed');
    };
    ws.current.onmessage = (ev: MessageEvent<string>) => {
      const data: SocketData = JSON.parse(ev.data);
      setMessages((prev) => [...(prev ?? []), data]);
    };
    return () => {
      ws.current?.close();
    };
  }, []);

  return {
    ws: ws.current,
    messages,
  };
}

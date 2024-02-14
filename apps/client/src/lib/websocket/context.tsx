import { createContext, useContext, useEffect, useMemo } from "react";

export const WebSocketContext = createContext<WebSocket | null>(null);

export interface WebSocketProviderProps {
  children: React.ReactNode;
  url: string;
  protocols?: string[] | string;
  binaryType?: BinaryType;
}

/**
 * Provides websocket instance to its children via context
 * @param props Websocket parameters and children
 * @returns JSX Element
 */

export function WebSocketProvider({
  children,
  url,
  protocols,
  binaryType,
}: WebSocketProviderProps) {
  const isBrowser = typeof window !== "undefined";
  const instance = useMemo(() => {
    if (!isBrowser) return null;
    const client = new WebSocket(url, protocols);
    if (binaryType) client.binaryType = binaryType;
    return client;
  }, [isBrowser, url, protocols]);

  useEffect(() => {
    if (instance?.readyState !== WebSocket.OPEN) return;
    return () => instance.close();
  }, []);

  return (
    <WebSocketContext.Provider value={instance}>
      {children}
    </WebSocketContext.Provider>
  );
}

export const WebSocketConsumer = WebSocketContext.Consumer;

/**
 * Access the websocket instance from anywhere in the app as long as its children are wrapped in WebSocketProvider
 * @returns WebSocket instance
 */
export function useWebSocket() {
  const context = useContext(WebSocketContext);
  if (context === undefined)
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  return context;
}

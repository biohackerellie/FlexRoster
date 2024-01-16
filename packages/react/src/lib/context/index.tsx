import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from '../auth';
import React from 'react';
import { PublicClientApplication } from '@azure/msal-browser';

const msalInstance = new PublicClientApplication(msalConfig);

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}

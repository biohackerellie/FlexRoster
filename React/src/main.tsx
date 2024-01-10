import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
  rootRouteWithContext,
} from '@tanstack/react-router';

import RootComponent from './components/root';

import './index.css';

const rootRoute = rootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
});

const indexRoute = new Route({ getParentRoute: () => rootRoute, path: '/' });

const routeTree = rootRoute.addChildren([indexRoute]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

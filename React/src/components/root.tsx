import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
const RootComponent = () => (
  <div>
    <h1>Hello World</h1>
    <Outlet />
    <TanStackRouterDevtools />
  </div>
);

export default RootComponent;

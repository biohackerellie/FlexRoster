import TestComponent from './components/testComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-black">
        <h1>Hello World</h1>
        hello
        <TestComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Dashboard from "./views/dashboard";
import { onApiCallRetry } from "./utils/errroAPICall";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 3000,
      retry: (failureCount, error) => onApiCallRetry(failureCount, error),
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
}

export default App;

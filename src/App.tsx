import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { TourProviderWrapper } from './components/common/tour/tour-provider-wrapper';
import { store } from './redux/store';
import { RouteList } from './routes/routerList';
import { onApiCallRetry } from './utils/errroAPICall';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 3000,
      retry: (failureCount, error) => onApiCallRetry(failureCount, error),
    },
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TourProviderWrapper>
          <RouteList />
        </TourProviderWrapper>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

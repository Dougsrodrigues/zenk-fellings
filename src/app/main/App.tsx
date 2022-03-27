import React from 'react';
import { QueryClientProvider } from 'react-query';

import { makeDataFetchingClient } from '~/app/main/factories/data-fetching-factory';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigator } from '~/app/main/routes/MainNavigator';

export default function App() {
  return (
    <QueryClientProvider client={makeDataFetchingClient()}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

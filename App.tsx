import React from 'react';
import { QueryClientProvider } from 'react-query';

import { View } from 'react-native';

import { makeDataFetchingClient } from '~/app/main/factories/data-fetching-factory';
import { Home } from './src/modules/Home/presentation/screens/Home';

export default function App() {
  return (
    <QueryClientProvider client={makeDataFetchingClient()}>
      <View>
        <Home />
      </View>
    </QueryClientProvider>
  );
}

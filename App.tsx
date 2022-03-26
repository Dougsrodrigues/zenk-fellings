import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { View } from 'react-native';

import { Home } from './src/modules/Home/presentation/screens/Home';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <Home />
      </View>
    </QueryClientProvider>
  );
}

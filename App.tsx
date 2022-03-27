import React from 'react';
import { QueryClientProvider } from 'react-query';

import { makeDataFetchingClient } from '~/app/main/factories/data-fetching-factory';
import { MakeHomeScreen } from '~/modules/Home/main/factories/home-screen-factory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={makeDataFetchingClient()}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={MakeHomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

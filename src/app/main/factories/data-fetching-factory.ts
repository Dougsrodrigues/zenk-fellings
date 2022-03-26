import { QueryClient } from 'react-query';

export const makeDataFetchingClient = () => {
  return new QueryClient();
};

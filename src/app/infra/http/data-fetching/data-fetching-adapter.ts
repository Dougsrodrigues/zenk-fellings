import { QueryFunction, QueryKey, QueryOptions, useQuery } from 'react-query';

type ErrorType = {
  message: string;
};

export const useDataFetchingAdapter = <T>(
  queryKey: QueryKey,
  queryFunction: QueryFunction<T>,
  options?: QueryOptions<T>,
) => {
  const { error, ...rest } = useQuery(queryKey, queryFunction, options);

  const errorTypes = error as ErrorType;

  return { error: errorTypes, ...rest };
};

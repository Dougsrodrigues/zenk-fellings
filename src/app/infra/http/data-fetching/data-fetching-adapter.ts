import {
  QueryFunction,
  QueryKey,
  QueryOptions,
  useQuery,
  UseQueryResult,
} from 'react-query';

export const useDataFetchingAdapter = <T>(
  queryKey: QueryKey,
  queryFunction: QueryFunction<T>,
  options?: QueryOptions<T>,
): UseQueryResult<T> => {
  return useQuery(queryKey, queryFunction, options);
};

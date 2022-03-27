import { useDataFetchingAdapter } from '~/app/infra/http/data-fetching/data-fetching-adapter';
import { IGetFeelingsUseCase } from '../../domain/use-cases/get-fellings-use-case-interface';

interface UseGetFeelingsProps {
  getFeelingsUseCase: IGetFeelingsUseCase;
}
export const useGetFeelings = ({ getFeelingsUseCase }: UseGetFeelingsProps) => {
  const { data, isLoading, isError, error } = useDataFetchingAdapter(
    'get-feelings',
    () => getFeelingsUseCase.getFeelings(),
  );

  return { data, isLoading, isError, error };
};

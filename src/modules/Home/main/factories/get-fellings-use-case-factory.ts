import { makeAxiosHttpClient } from '~/app/main/factories/axios-http-client-factory';
import { GetFeelingsUseCase } from '../../data/use-cases/get-fellings-use-case';

export const makeGetFeelingsUseCase = () => {
  return new GetFeelingsUseCase(makeAxiosHttpClient());
};

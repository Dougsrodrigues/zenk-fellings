import { api } from '~/app/infra/http/axios/api';
import { AxiosHttpClient } from '~/app/infra/http/axios/axios-http';

export const makeAxiosHttpClient = (): AxiosHttpClient =>
  new AxiosHttpClient(api);

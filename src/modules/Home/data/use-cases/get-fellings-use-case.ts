import { UnauthorizedError } from '~/app/domain/errors/unauthorized-error';
import { UnexpectedError } from '~/app/domain/errors/unexpected-error';
import {
  HttpClient,
  HttpMethod,
  HttpStatusCode,
} from '~/app/domain/types/http-interfaces';
import { Feelings } from '../../domain/types';
import { IGetFeelingsUseCase } from '../../domain/use-cases/get-fellings-use-case-interface';

export class GetFeelingsUseCase implements IGetFeelingsUseCase {
  endpoint = `/fellingss`;

  constructor(private readonly httpClient: HttpClient<Feelings[]>) {}

  async getFeelings(): Promise<Feelings[]> {
    const data = await this.httpClient.request({
      url: this.endpoint,
      method: HttpMethod.get,
    });

    switch (data.httpStatus) {
      case HttpStatusCode.ok:
        return data.httpDataResponse;
      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError();
      default:
        throw new UnexpectedError();
    }
  }
}

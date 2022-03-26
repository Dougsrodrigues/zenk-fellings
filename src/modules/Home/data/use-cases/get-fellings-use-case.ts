import { UnauthorizedError } from '~/app/domain/errors/unauthorized-error';
import { UnexpectedError } from '~/app/domain/errors/unexpected-error';
import {
  HttpClient,
  HttpMethod,
  HttpStatusCode,
} from '~/app/domain/types/http-interfaces';
import { Fellings } from '../../domain/types';
import { IGetFillingsUseCase } from '../../domain/use-cases/get-fellings-use-case-interface';

export class GetFillingsUseCase implements IGetFillingsUseCase {
  endpoint = `/fellings`;

  constructor(private readonly httpClient: HttpClient<Fellings[]>) {}

  async getFellings(): Promise<Fellings[]> {
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

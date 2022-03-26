import { AxiosInstance, AxiosResponse } from 'axios';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from '~/app/domain/types/http-interfaces';

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly api: AxiosInstance) {}

  async request(params: HttpRequest): Promise<HttpResponse> {
    let data: AxiosResponse;
    let httpStatus: HttpStatusCode;

    try {
      const response = await this.api.request({
        url: params.url,
        method: params.method,
        data: params.body,
        headers: params.headers,
      });

      data = response.data;
      httpStatus = response.status as HttpStatusCode;
    } catch (error) {
      data = error;
      httpStatus = error.status as HttpStatusCode;
    }

    const httpResponse = {
      data,
      httpStatus,
    };

    return httpResponse;
  }
}

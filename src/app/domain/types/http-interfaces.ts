export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export enum HttpMethod {
  post = 'post',
  get = 'get',
  put = 'put',
  delete = 'delete',
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export interface HttpClient<R = any> {
  request: (params: HttpRequest) => Promise<HttpResponse<R>>;
}

export type HttpResponse<T = any> = {
  httpDataResponse: T;
  httpStatus: HttpStatusCode;
};

export interface SerializedApiError {
  isSerializedApiError: true;
  status: number;
  name?: string;
  statusText?: string;
  stack?: string;
  code?: string;
}

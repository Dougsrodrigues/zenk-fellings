import axios from 'axios';
import { createSerializedApiErrorInterceptor } from './create-serialized-api-error-interceptor';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.response.use(undefined, createSerializedApiErrorInterceptor);

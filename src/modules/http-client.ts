import axios, { AxiosInstance } from 'axios';
import { ApiResponse, IAxiosRequestConfig } from '../interfaces';
import { registerRequestInterceptor } from '../utils/registerRequestInterceptor';
import { registerResponseInterceptor } from '../utils/registerResponseInterceptor';

export class HttpClient {
  instance: AxiosInstance;

  constructor(config: IAxiosRequestConfig) {
    this.instance = this.init(config);
  }

  private init(config: IAxiosRequestConfig) {
    const { interceptors } = config;
    const instance = axios.create(config);

    if (interceptors) {
      const { request: requestInterceptors, response: responseInterceptors } =
        interceptors;

      requestInterceptors &&
        registerRequestInterceptor(this.instance, requestInterceptors);

      responseInterceptors &&
        registerResponseInterceptor(this.instance, responseInterceptors);
    }

    return instance;
  }

  post<P = unknown, R = unknown>(
    url: string,
    data?: P,
    config?: IAxiosRequestConfig
  ): Promise<R> {
    return this.instance.post(url, data, config);
  }

  get<R = unknown>(url: string, config?: IAxiosRequestConfig): Promise<R> {
    return this.instance.get(url, config);
  }
}

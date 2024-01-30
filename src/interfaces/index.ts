import {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export type ApiResponse<D = any> = {
  code: number;
  data?: D;
  msg?: string;
};

export type AxiosfulfilledInterceptor<V = any> = {
  (value: V): V | Promise<V>;
};

export type AxiosRejectedInterceptor = {
  (error: any): any;
};

export type AxiosInterceptor<V = any> = {
  onFulfilled: ((value: V) => V | Promise<V>) | null;
  onRejected?: AxiosRejectedInterceptor;
};

export type AxiosRequestInterceptor =
  AxiosInterceptor<InternalAxiosRequestConfig>;

export type AxiosResponseInterceptor<T = any, D = any> = AxiosInterceptor<
  AxiosResponse<T, D>
>;

export interface IAxiosRequestConfig<D = any, R = ApiResponse<any>>
  extends AxiosRequestConfig<D> {
  retryCount?: number;
  useGlobalInterceptors?: boolean;
  /**
   * for auth retry url config
   * sometimes it maybe diff with the baseURL
   */
  authHandle?: (config: IAxiosRequestConfig<D>) => R;
  interceptors: {
    request: AxiosRequestInterceptor[] | AxiosRequestInterceptor;
    response: AxiosResponseInterceptor[] | AxiosResponseInterceptor;
  };
}

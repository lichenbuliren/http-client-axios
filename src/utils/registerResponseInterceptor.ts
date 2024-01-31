import { AxiosInstance } from 'axios';
import { AxiosResponseInterceptor } from '../interfaces';

/**
 * regist response interceptors to axios instance
 *
 * first in, first out
 *
 * @param instance axois instance
 * @param responseInterceptors response interceptor
 */
export const registerResponseInterceptor = <T = any, D = any>(
  instance: AxiosInstance,
  responseInterceptors:
    | AxiosResponseInterceptor<T, D>[]
    | AxiosResponseInterceptor<T, D>
): void => {
  if (Array.isArray(responseInterceptors)) {
    responseInterceptors.forEach((responseInterceptor) => {
      const { onFulfilled, onRejected } = responseInterceptor;
      instance.interceptors.response.use(onFulfilled, onRejected);
    });
  } else {
    const { onFulfilled, onRejected } = responseInterceptors;
    instance.interceptors.response.use(onFulfilled, onRejected);
  }
};

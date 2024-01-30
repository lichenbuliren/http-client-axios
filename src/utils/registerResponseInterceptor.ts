import { AxiosInstance } from 'axios';
import { AxiosResponseInterceptor } from '../interfaces';

export const interceptorResponseRegister = <T = any, D = any>(
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

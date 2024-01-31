import { AxiosInstance } from 'axios';
import { AxiosRequestInterceptor } from '../interfaces';

/**
 * register axios request interceptors
 *
 * first in, last excute
 *
 * @param instance
 * @param rquestInterceptors
 */
export const registerRequestInterceptor = (
  instance: AxiosInstance,
  rquestInterceptors: AxiosRequestInterceptor[] | AxiosRequestInterceptor
): void => {
  if (Array.isArray(rquestInterceptors)) {
    rquestInterceptors.forEach((requestInterceptor) => {
      const { onFulfilled, onRejected } = requestInterceptor;
      instance.interceptors.request.use(onFulfilled, onRejected);
    });
  } else {
    const { onFulfilled, onRejected } = rquestInterceptors;
    instance.interceptors.request.use(onFulfilled, onRejected);
  }
};

import axios, { AxiosInstance } from 'axios';
import { IAxiosRequestConfig } from '../interfaces';

export class HttpClient {
  instance: AxiosInstance;

  constructor(config: IAxiosRequestConfig) {
    const { useGlobalInterceptors } = config;
    this.instance = axios.create(config);
  }
}

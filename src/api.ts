import axios, { AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = config.headers.Authorization || localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const request = async <Type>(
  method: string,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<Type> => {
  return axiosInstance
    .request<Type>({
      method,
      url,
      data,
      ...config,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const get = async <Type>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<Type> => {
  return request<Type>('get', url, undefined, config);
};

const post = async <Type>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<Type> => {
  return request<Type>('post', url, data, config);
};

const put = async <Type>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<Type> => {
  return request<Type>('put', url, data, config);
};

const remove = async <Type>(
  url: string,
  data?: object,
  config?: AxiosRequestConfig,
): Promise<Type> => {
  return request<Type>('delete', url, data, config);
};

const patch = async <Type>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<Type> => {
  return request<Type>('patch', url, data, config);
};

export { get, post, put, remove, patch };

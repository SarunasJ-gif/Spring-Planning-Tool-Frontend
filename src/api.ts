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

const request = async <T>(
  method: string,
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return axiosInstance
    .request<T>({
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

const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return request<T>('get', url, undefined, config);
};

const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return request<T>('post', url, data, config);
};

const put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return request<T>('put', url, data, config);
};

const remove = async <T>(
  url: string,
  data?: object,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return request<T>('delete', url, data, config);
};

const patch = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return request<T>('patch', url, data, config);
};

export { get, post, put, remove, patch };

import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    console.log("axios iraso tokena i headeri", token);
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("axios pilnas configas su tokenu?", config);
  return config;
});

const request = async <T>(
  method: string,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
    console.log(`requeste esantis Bearer ${token}`);
  }
  try {
    console.log("paleidziamas kreipimasi i endpointa ",axiosInstance);
    const response = await axiosInstance.request<T>({
      method,
      url,
      data,
      ...config,
    });
    console.log("GAUTAS GERAS atsakymas", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('gaunama Axios error message: ', error.message);
    }
    console.error("Error occurred while making request with URL: ", url, " data: ", data, " config: ", config, " Error: ", error);
    throw error;
  }
};


const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return request<T>('get', url, undefined, config);
};

const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
    console.log("POST funkcijos metodas aktyvuojamas URL: ", url, " data: ", data, " config: ", config);
  return request<T>('post', url, data, config );
};

const put = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return request<T>('put', url, data, config);
};

const remove = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return request<T>('delete', url, data, config);
};

const patch = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return request<T>('patch', url, data, config);
};

export { get, post, put, remove, patch };

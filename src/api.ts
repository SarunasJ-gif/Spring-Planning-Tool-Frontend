import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token =
      config.headers.Authorization ||
      (await new Promise((resolve) => {
        setTimeout(() => {
          resolve(localStorage.getItem('token'));
        }, 0);
      }));
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
);

const request = async <T>(
  method: string,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return axiosInstance
    .request<T>({
      method,
      url,
      ...config,
      data,
    })
    .then((response: AxiosResponse<T>) => {
      console.log(response.data);
      return response.data;
    });
};
const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return request<T>('get', url, config);
};

const post = async <T>(
  url: string,
  config?: AxiosRequestConfig,
  data?: unknown,
): Promise<T> => {
  return request<T>('post', url, data, config);
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

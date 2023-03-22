import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

class Api {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(
    url: string,
    token?: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
      const response = await axios.get(`${this.baseUrl}${url}`, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async post<T>(
    url: string,
    data?: any,
    token?: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
      const response = await axios.post(`${this.baseUrl}${url}`, data, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async put<T>(
    url: string,
    data?: any,
    token?: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
      const response = await axios.put(`${this.baseUrl}${url}`, data, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete<T>(
    url: string,
    token?: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
      const response = await axios.delete(`${this.baseUrl}${url}`, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async patch<T>(
    url: string,
    data?: any,
    token?: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
      const response = await axios.patch(`${this.baseUrl}${url}`, data, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default Api;

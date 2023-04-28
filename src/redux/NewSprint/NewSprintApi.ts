/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Sprint {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface CreateSprintResponse {
  sprintId: string;
}

export async function post(url: string, config?: AxiosRequestConfig, data?: any): Promise<AxiosResponse> {
    const response = await axios.post("/sprint", {}, data);
    return response;
  }

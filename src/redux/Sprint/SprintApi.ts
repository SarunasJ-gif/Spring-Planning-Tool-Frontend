import { get, put } from '../../api';

export const getSprint = async (payload: any) => {
  const { id } = payload;
  const response = await get(`http://localhost:8080/sprint/${id}`);
  console.log(response);
  return response;
};

export const startSprint = async (id: number) => {
  return await put(`/sprint/${id}/active`);
};

export const endSprint = async (id: number) => {
  return await put(`/sprint/${id}/historical`);
};
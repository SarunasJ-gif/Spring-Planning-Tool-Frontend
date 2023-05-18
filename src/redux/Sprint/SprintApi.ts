import { get, put } from '../../api';

export const startSprint = async (id: number) => {
  return await put(`/sprint/${id}/active`);
};

export const endSprint = async (id: number) => {
  return await put(`/sprint/${id}/historical`);
};
export const getSprint = () => {return get(`/sprint/active`)};

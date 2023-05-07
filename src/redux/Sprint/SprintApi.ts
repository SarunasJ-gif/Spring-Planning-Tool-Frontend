import { get } from '../../api';

export const getSprint = async (payload: any) => {
  const { id } = payload;
  const response = await get(`sprint/${id}`);
  return response;
};

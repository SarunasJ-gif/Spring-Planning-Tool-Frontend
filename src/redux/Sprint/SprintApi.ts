import { get } from '../../api';

export const getSprint = async (payload: any) => {
  const { id } = payload;
  const response = await get(`http://localhost:8080/sprint/${id}`);
  console.log(response);
  return response;
};

import { get } from '../../api';

export const getSprints = async (payload: any) => {
    const { id } = payload;
    const response = await get(`/sprint`);
    console.log(response);
    return response;
};



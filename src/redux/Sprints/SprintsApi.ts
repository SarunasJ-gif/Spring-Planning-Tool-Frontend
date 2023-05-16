import { get } from '../../api';

export const getSprints = async (payload: any) => {
    const { id } = payload;
    const response = await get(`http://localhost:8080/sprint`);
    console.log(response);
    return response;
};



import { get } from '../../api';

export const getSprints = () => {
    const response = get(`/sprint`);
    console.log(response);
    return response;
};



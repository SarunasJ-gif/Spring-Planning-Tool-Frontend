import { get } from '../../api';
import { Sprint } from '../../types/NewSprintTypes';

export const getSprintsApi = () => {
    return get<Sprint[]>('/sprint');
};



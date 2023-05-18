import { get } from '../../api';
import { Sprint } from '../../types/NewSprintTypes';

export const getSprintsApi = () => {
    return get<Sprint[]>('/sprint');
};

export const getSelectedSprintApi = (id: number) => {
    return get<Sprint>('/sprint/${id}');
};



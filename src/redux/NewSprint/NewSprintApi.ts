import { post } from '../../api';
import { Sprint } from '../../types/NewSprintTypes';

export const createSprintAPI = (sprintData: Sprint) => { post('/sprint', sprintData);
};

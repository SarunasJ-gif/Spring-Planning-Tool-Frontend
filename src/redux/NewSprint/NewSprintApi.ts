import { post } from '../../api';
import { Sprint } from '../../types/NewSprintTypes';

export const createSprint = (sprintData: Sprint) => {
  post('/sprint', sprintData);
};

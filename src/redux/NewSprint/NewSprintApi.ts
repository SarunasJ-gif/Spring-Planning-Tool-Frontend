import { post } from '../../api';
import { NewSprint } from './NewSprintReducer';

export const createSprint = (sprintData: NewSprint) => {
  post('/sprint', sprintData);
};

import { post } from '../../api';
import { NewSprintData } from './NewSprintReducer';

export const createSprint = (sprintData: NewSprintData) => {
  console.log(sprintData);
  post('/sprint', sprintData);
};

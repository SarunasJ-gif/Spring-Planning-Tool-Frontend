import { Member, TaskData } from '../../types/NewSprintTypes';
import mock_task from '../../components/TasksTable/mock_task.json';

export type Sprint = {
  title: string;
  startDate: string | null;
  endDate: string | null;
  tasks: TaskData[];
  memberTeamId: string | null;
  members: Member[];
  isHistorial: boolean | null;
  isActive: boolean | null;
};
const initialState: Sprint = {
  title: 'Sourcery - Sprint 1',
  startDate: '2023-04-24',
  endDate: '2023-05-05',
  tasks: mock_task,
  members: [],
  memberTeamId: null,
  isHistorial: null,
  isActive: null,
};

// @ts-ignore
const reducer = (state = initialState, { type, payload }) => {
  return state;
};
export default reducer;

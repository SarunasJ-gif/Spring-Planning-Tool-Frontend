export type Sprint = {
  [id: string]: any;
  title: string;
  startDate: string;
  endDate: string;
  tasks: TaskData[];
  members: Member[];
  isHistorial: boolean | null;
  isActive: boolean | null;
};

export type Task = {
  keyValue: string;
  keyColor: string;
  description: string;
  type: string;
  oldPoints: number;
  remainingPoints: number;
  newPoints: number;
};

export type MemberWorkingDay = {
  day: string;
  task: Task;
};

export type Member = {
  firstName: string;
  lastName: string;
  memberId: string;
  workingDays: MemberWorkingDay[];
};

export type TaskData = {
  id: number;
  keyValue: string;
  keyColor: string;
  description: string;
  type: string;
  oldPoints: number;
  remainingPoints: number;
  newPoints: number;
};

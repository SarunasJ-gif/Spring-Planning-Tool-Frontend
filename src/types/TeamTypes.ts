import { Role } from "../enums/enums";

export type Team = {
  [id: string]: any;
  name: string;
  completedProjects: number;
  completedTasks: number;
  members: Member[];
}

export type TableRowElementProps = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any;
  index: number;
}

export type Member = {
  id: number;
  firstName: string;
  lastName: string;
  memberId: number;
  name: string;
  role: Role;
};


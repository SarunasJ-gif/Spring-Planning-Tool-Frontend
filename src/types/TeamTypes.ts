import { Role } from "../enums/enums";
import { Member } from "./NewSprintTypes";

export type Team = {
  map(arg0: (team: any) => { name: string; members: number; projects: number; tasks: number; }): unknown;
  id: number;
  name: string;
  completedProjects: number;
  completedTasks: number;
  members: Member[];
}

export type TableRowElementProps = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      row: {
        id: number;
        role: Role; 
        email: string;
        name: string
      };
  index: number;
}



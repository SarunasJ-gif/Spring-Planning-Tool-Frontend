import { Role } from "../../../enums/enums";
import { Row } from "../../../types/TeamTypes";

export const rows: Row[] = [
  {
    id: 1,
    memberId:1,
    name: 'Laura Sunshine',
    role: Role.FRONT_END,
  },
  {
    id: 2,
    memberId:2,
    name: 'Matt Brok',
    role: Role.BACK_END,
  },
  {
    id: 3,
    memberId:3,
    name: 'Conel Mclane',
    role: Role.DESIGNER,
  },
  {
    id: 4,
    memberId:4,
    name: 'John Smit',
    role: Role.TESTER,
  },
  {
    id: 5,
    memberId:5,
    name: 'Gavin Nealson',
    role: Role.FRONT_END,
  },
];

import { Role } from "../../enums/enums";
import { Member } from "../../types/TeamTypes";

export const TeamMembersMock: Member[] = [
  {
    id: 1,
    firstName:'',
    lastName: '',
    memberId:1,
    name: 'Laura Sunshine',
    role: Role.FRONT_END,
  },
  {
    id: 2,
    firstName:'',
    lastName: '',
    memberId:2,
    name: 'Matt Brok',
    role: Role.BACK_END,
  },
  {
    id: 3,
    firstName:'',
    lastName: '',
    memberId:3,
    name: 'Conel Mclane',
    role: Role.DESIGNER,
  },
  {
    id: 4,
    firstName:'',
    lastName: '',
    memberId:4,
    name: 'John Smit',
    role: Role.TESTER,
  },
  {
    id: 5,
    firstName:'',
    lastName: '',
    memberId:5,
    name: 'Gavin Nealson',
    role: Role.FRONT_END,
  },
];

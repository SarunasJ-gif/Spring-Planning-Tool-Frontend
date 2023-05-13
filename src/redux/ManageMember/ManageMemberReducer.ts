import { Role } from '../../enums/enums';
import * as actions from './ManageMemberActionType';

export type MemberState = { 
  id: number;
  firstName: string;
  lastName: string;
  memberId: number| null;
  name: string;
  role: Role;
  email: string;
};

export const initialState: {members: MemberState[]} = { members: []};

// @ts-ignore
const reducer = (state = initialState,  { type, payload }) => {
  switch (type) {
      case actions.GET_MEMBER_REQUEST:
        return {...state };
      case actions.GET_MEMBER_SUCCESS:
        return { ...state, members: payload };
        case actions.UPDATE_MEMBER_ROLE:
      return { ...state, members: state.members.map((member) =>
          member.id === payload.memberId ? { ...member, role: payload.newRole }: member ),};
    default:
      return state;
  }
};
export default reducer;


import { Member } from '../../types/NewSprintTypes';
import * as actions from './ManageMemberActionType';

 export const initialState: {members: Member[]} = { members: []};

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

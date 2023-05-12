import * as actions from './ManageMemberActionType';

export type MemberState = { 
  id: number;
  firstName: string;
  lastName: string;
  memberId: number| null;
  name: string;
  role: string;
  email: string;
};

const initialState: {members: MemberState[]} = { members: []};

// @ts-ignore
const reducer = (state = initialState,  { type, payload }) => {
  switch (type) {
      case actions.GET_MEMBER_REQUEST:
        return {...state };
      case actions.GET_MEMBER_SUCCESS:
        return { ...state, members: payload };
      case actions.UPDATE_MEMBER_ROLE: {
          const { memberId, role } = payload;
        return { ...state, members: state.members.map((member) => member.id === memberId ? { ...member, role: role } : member),};}
    default:
      return state;
  }
};
export default reducer;

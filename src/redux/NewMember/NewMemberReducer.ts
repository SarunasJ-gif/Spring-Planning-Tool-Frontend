import * as actions from './NewMemberActionType';

export type MemberState = {
  member: {
  firstName: string;
  lastName: string;
  memberId: number| null;
  name: string;
  role: string;

};
}

const initialState: MemberState = {
  member: {
    firstName: '',
    lastName: '',
    memberId: null,
    name: '',
    role: '',
  }
};


// @ts-ignore
const reducer = (state = initialState,  { type, payload }) => {
  switch (type) {
      case actions.GET_MEMBER:
        return {...state };
      case actions.GET_MEMBER_SUCCESS:
        return { ...state, members: payload };
        case actions.REMOVE_TEAM_MEMBER:
          return {
            ...state,
          };
    default:
      return state;
  }
};

export default reducer;

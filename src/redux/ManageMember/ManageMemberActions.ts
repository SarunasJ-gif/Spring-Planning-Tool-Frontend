
import { Member } from '../../types/TeamTypes';
import * as actions from './ManageMemberActionType';

export const getMembersRequest = () => ({
  type: actions.GET_MEMBER_REQUEST
});

export const getMembersSuccess = (members: Member[]) => ({
  type: actions.GET_MEMBER_SUCCESS,
  payload: members,
});



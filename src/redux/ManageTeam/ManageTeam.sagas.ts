import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_TEAM_MEMBER, GET_ALL_TEAM_MEMBERS,  REMOVE_TEAM_MEMBER, UPDATE_TEAM_NAME } from './ManageTeamActionType';
import { addTeamMember, getTeamMembersAPI, removeTeamMember,  updateTeamNameAPI } from './ManageTeamApi';
import { getAllTeamMembersSuccess, removeTeamMemberSuccess, updateTeamName } from './ManageTeamActions';
import { Member } from '../../types/NewSprintTypes';



export function* updateTeamNameSaga(action: any) {
  try {
    const { teamId, newName } = action.payload;
    yield call(updateTeamNameAPI, teamId, newName);
    yield put(updateTeamName(teamId, newName));
  } catch (e) {
    console.error(e);
  }
}
export function* getAllTeamMembersSaga() {
  try {
    const members: Member[] = yield call(getTeamMembersAPI);
    yield put(getAllTeamMembersSuccess(members));
  } catch (e) { console.error(e);}
}
export function* addTeamMemberSaga(action: any) {
  try {
    const { memberId } = action.payload;
    yield call(addTeamMember, memberId);
  } catch (e) {console.error(e);}
}
function* removeTeamMemberSaga(action: any) {
  try {
    const { memberId } = action.payload;
    yield call(removeTeamMember, memberId);
    yield put(removeTeamMemberSuccess(memberId));
  }  catch (e) { console.error(e);}
}
export default function* newTeamSaga() {
  yield takeLatest(UPDATE_TEAM_NAME, updateTeamNameSaga); 
  yield takeLatest(ADD_TEAM_MEMBER, addTeamMemberSaga); 
  yield takeLatest(REMOVE_TEAM_MEMBER, removeTeamMemberSaga); 
  yield takeLatest(GET_ALL_TEAM_MEMBERS, getAllTeamMembersSaga);
}








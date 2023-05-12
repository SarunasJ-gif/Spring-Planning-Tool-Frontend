import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_TEAM_MEMBER, GET_ALL_TEAM_DATA, GET_ALL_TEAM_MEMBERS,  REMOVE_TEAM_MEMBER, UPDATE_TEAM_NAME } from './ManageTeamActionType';
import { addTeamMember, getTeamDataAPI, getTeamMembersAPI, removeTeamMember,  updateTeamNameAPI } from './ManageTeamApi';
import { getAllTeamDataSuccess, getAllTeamMembersSuccess, removeTeamMemberSuccess, updateTeamName } from './ManageTeamActions';
import { Member } from '../../types/NewSprintTypes';
import { Team } from '../../types/TeamTypes';

export function* getAllTeamDataSaga() {
  try {
    const teams: Team[] = yield call(getTeamDataAPI);
    yield put(getAllTeamDataSuccess(teams));
  } catch (e) { console.error(e);}
}
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
  yield takeLatest(GET_ALL_TEAM_DATA, getAllTeamDataSaga);
}








import { get, post, put, remove } from "../../api";
import { Role } from "../../enums/enums";
import { Team } from "../../types/TeamTypes";

export const getTeamDataAPI = () => { return get<Team[]>("/team");}
export const updateTeamNameAPI = (teamId: number, name: String) => { return put(`/${teamId}/update/`,{ name }); };//todo
export const addTeamMember = ( memberId: number) => { post(`/team/1/member/`, {memberId});} //paduoti visa membery ??
export const updateTeamMemberRole = (memberId: number, role: Role) => { return put(`/1/update/${memberId}`, { role }); };//todo
export const removeTeamMember = (memberId: number) => { return remove(`/team/1/member/${memberId}`)}; // veikia




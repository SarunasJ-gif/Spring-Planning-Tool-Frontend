import { get, post, put, remove } from "../../api";
import { Member } from "../../types/NewSprintTypes";
import { Team } from "../../types/TeamTypes";

export const getTeamDataAPI = () => { return get<Team>("/team");} 
export const getTeamDataApiMAIN = () => { return get<Team>("/team/1");} 
export const updateTeamNameAPI = (teamId: number, name: String) => { return put(`/${teamId}/update/`,{ name }); };//todo

export const getTeamMembersAPI = () => { return get<Member[]>("/member/team/1");} 
export const addTeamMember = ( id: number) => { post(`/team/1/member`, {id});} 

export const removeTeamMember = (memberId: number) => { return remove(`/team/1/member/${memberId}`)}; 




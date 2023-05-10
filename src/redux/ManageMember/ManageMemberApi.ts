import { get, post, put, remove } from "../../api";
import { Role } from "../../enums/enums";
import { Member } from "../../types/TeamTypes";

export const getMembers = () => { return get<Member[]>("/member") ;}
export const updateTeamMemberRole = (memberId: number, role: Role) => { return put(`/1/update/${memberId}`, { role }); };
export const removeTeamMember = (memberId: number) => { return remove(`/team/1/delete/${memberId}`)};
export const addTeamMember = ( memberId: number) => { post(`/team/1/member/${memberId}`);}
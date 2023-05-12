import { get, put } from "../../api";
import { Role } from "../../enums/enums";
import { Member } from "../../types/NewSprintTypes";

export const getMembersAPI = () => { return get<Member[]>("/member") ;} 
export const updateTeamMemberRoleAPI = (memberId: number, role: Role) => { return put(`/1/update/${memberId}`, { role }); };
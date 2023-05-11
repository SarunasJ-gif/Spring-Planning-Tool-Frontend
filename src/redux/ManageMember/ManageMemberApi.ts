import { get, put } from "../../api";
import { Role } from "../../enums/enums";
import { Member } from "../../types/TeamTypes";

export const getMembersAPI = () => { return get<Member[]>("/member") ;} //works
export const updateTeamMemberRoleAPI = (memberId: number, role: Role) => { return put(`/1/update/${memberId}`, { role }); };
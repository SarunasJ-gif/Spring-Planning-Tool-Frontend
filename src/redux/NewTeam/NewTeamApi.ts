import { get, post, remove } from "../../api";
import { Role } from "../../enums/enums";

export const createNewTeam = (teamData: unknown ) => { post("/team", teamData);}
export const getTeamData = () => { get("/team");}
export const removeTeamMember = (memberId: number) => { remove("/team/delete/", {memberId}); } //?

export const addTeamMember = (teamId: string, memberId: number, name: string, role: Role) => {
    post(`/team/${teamId}/member`, { memberId, name, role });}

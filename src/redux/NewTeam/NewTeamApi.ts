import { post } from "../../api";
import { remove } from "../../api";

export const createTeam = (teamData: unknown ) => { post("/team", teamData);}
export const deleteTeamMember = (memberId: number) => { remove("/team/delete/", {memberId}); } //?


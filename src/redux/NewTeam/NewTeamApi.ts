import { post } from "../../api";
import { remove } from "../../api";

export const createNewTeam = (teamData: unknown ) => { post("/team", teamData);}
export const removeTeamMember = (memberId: number) => { remove("/team/delete/", {memberId}); } //?


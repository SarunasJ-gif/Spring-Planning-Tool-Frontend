import { get, post, remove } from "../../api";

export const createNewTeam = (teamData: unknown ) => { post("/team", teamData);}
export const getTeamData = () => { get("/team");}
export const removeTeamMember = (memberId: number) => { remove("/team/delete/", {memberId}); } //?


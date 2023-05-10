import { get, post } from "../../api";

export const createNewTeam = (teamData: unknown ) => { post("/team", teamData);} 
export const getTeamData = () => { get("/team");}




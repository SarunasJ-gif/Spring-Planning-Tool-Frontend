import { post } from "../../api";

export const createSprint = (sprintData: any) => { post("/sprint", sprintData, undefined);}
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import { post } from "../../api";

export const createSprint = (sprintData: unknown) => post("/sprint", undefined, sprintData);
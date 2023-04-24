/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import { post } from "../../api";

export const createSprint = (sprint: unknown) => post("sprint", undefined, sprint);
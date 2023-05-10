import { get } from "../../api";
import { Member } from "../../types/TeamTypes";

export const getMembers = () => { return get<Member[]>("/member") ;}

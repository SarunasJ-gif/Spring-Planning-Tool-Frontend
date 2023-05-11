import { get } from "../../api";
import { Member } from "../../types/TeamTypes";

export const getMembersAPI = () => { return get<Member[]>("/member") ;} //works

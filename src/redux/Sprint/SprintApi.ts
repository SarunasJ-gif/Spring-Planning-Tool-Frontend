import { get } from '../../api';

export const getSprint = () => {return get(`/sprint/activeFull`)};

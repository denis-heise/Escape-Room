import { Quest, State } from '../../types/types';
import { StoreSlice } from '../../utils/const';

export type InitialStateSiteData = {
  quests: Quest[],
}

export const getQuests = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Quest[] => SITE_DATA.quests;

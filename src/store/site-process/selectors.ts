import { State } from '../../types/types';
import { StoreSlice } from '../../utils/const';

export type initialStateSiteProcess = {
  linkMenu: string,
  nameFilter: string,
};

export const getLinkMenu = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): string => SITE_PROCESS.linkMenu;
export const getFilterName = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): string => SITE_PROCESS.nameFilter;

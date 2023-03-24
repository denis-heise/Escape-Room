import { createSlice } from '@reduxjs/toolkit';
import { initialStateSiteProcess } from './selectors';
import { StoreSlice } from '../../utils/const';
import { headerMenuLinks } from '../../mocks/header';
import { selectFilter, selectLinkMenu } from '../actions';
import { genreFilters } from '../../mocks/main';

const initialState: initialStateSiteProcess = {
  linkMenu: headerMenuLinks[0].name,
  nameFilter: genreFilters[0].genre,
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteData,
  initialState: initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(selectLinkMenu, (state, action) => {
      state.linkMenu = action.payload;
    }).addCase(selectFilter, (state, action) => {
      state.nameFilter = action.payload;
    });
  }
});

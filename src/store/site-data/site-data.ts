import { createSlice } from '@reduxjs/toolkit';
import { InitialStateSiteData } from './selectors';
import { StoreSlice } from '../../utils/const';
import { fetchQuests } from '../actions';

const initialState: InitialStateSiteData = {
  quests: [],
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState: initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetchQuests.fulfilled, (state, action) => {
      state.quests = action.payload;
    });
  }
});

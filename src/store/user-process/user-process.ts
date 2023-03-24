import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../utils/const';
import { fetchOrder } from '../actions';
import { initialStateUserProcess } from './selectors';

const initialState: initialStateUserProcess = {
  order: null,
};

export const userProcess = createSlice({
  name: StoreSlice.SiteData,
  initialState: initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetchOrder.fulfilled, (state, action) => {
      state.order = action.payload;
    });
  }
});

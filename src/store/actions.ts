import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Order, Quest } from '../types/types';
import { ApiRoute } from '../utils/const';

export type Extra = {
  extra: AxiosInstance;
};

export const Action = {
  FETCH_QUESTS: 'quests/fetch',
  FETCH_QUEST: 'quest/fetch',
  POST_ORDER: 'orders/post-order',
  SELLECT_LINK: 'site/select-link-menu',
  SELLECT_FILTER: 'site/select-filter',
};

export const selectLinkMenu = createAction<string>(Action.SELLECT_LINK);
export const selectFilter = createAction<string>(Action.SELLECT_FILTER);
export const fetchQuests = createAsyncThunk<Quest[], undefined, Extra>(
  Action.FETCH_QUESTS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Quest[]>(`${ApiRoute.Quests}`);
    return data;
  });
export const fetchOrder = createAsyncThunk<Order, Order, Extra>(Action.POST_ORDER,
  async ({ name, phone, peopleCount, isLegal }, { extra: api }) => {
    const { data } = await api.post<Order>(`${ApiRoute.Orders}`, { name, phone, peopleCount, isLegal });
    return data;
  });

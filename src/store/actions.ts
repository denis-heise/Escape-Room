import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Order, Quest } from '../types/types';
import { localQuests } from '../mocks/quests';

export type Extra = {
  extra: unknown;
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
  () => Promise.resolve(localQuests)
);

export const fetchOrder = createAsyncThunk<Order, Order, Extra>(
  Action.POST_ORDER,
  (orderData) => Promise.resolve(orderData)
);

import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './reduser';
import { createApi } from '../components/api/api';
import { fetchQuests } from './actions';

const api = createApi();

const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    },
  }),
});

store.dispatch(fetchQuests());

export {store};

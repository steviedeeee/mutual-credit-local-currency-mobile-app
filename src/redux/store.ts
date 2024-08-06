import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import transactionReducer from './reducers/transaction';
import userReducer from './reducers/user';
import exchangeReducer from './reducers/exchange';

const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    user: userReducer,
    exchange: exchangeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

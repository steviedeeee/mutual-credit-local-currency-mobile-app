import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IExchange} from '../../interfaces/api/exchange';
import {callListExchanges} from '../../fakeApis/exchange';

interface ExchangeSliceState {
  exchanges: IExchange[];
  isLoading: boolean;
}

const initialState: ExchangeSliceState = {
  exchanges: [],
  isLoading: false,
};

interface ISearchExchangeParams {
  searchText?: string;
}

export const searchExchanges = createAsyncThunk(
  'exchange/searchExchanges',
  async (params?: ISearchExchangeParams) => {
    const dataExchanges = await callListExchanges();

    return {
      data: dataExchanges,
    };
  },
);

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    addExchange: (state, action: PayloadAction<IExchange>) => {
      state.exchanges = [action.payload, ...state.exchanges];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(searchExchanges.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(searchExchanges.fulfilled, (state, action) => {
      state.isLoading = false;
      state.exchanges = action.payload.data as IExchange[];
    });
  },
});

export const {addExchange, setIsLoading} = exchangeSlice.actions;
export default exchangeSlice.reducer;

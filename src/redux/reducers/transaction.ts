import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITransaction} from '../../interfaces/api/transaction';
import {callListTransactions} from '../../fakeApis/transaction';

interface TransactionSliceState {
  transactions: ITransaction[];
  isLoading: boolean;
}

const initialState: TransactionSliceState = {
  transactions: [],
  isLoading: false,
};

interface ISearchTransactionParams {
  searchText?: string;
}

export const searchTransactions = createAsyncThunk(
  'transaction/searchTransactions',
  async (params?: ISearchTransactionParams) => {
    const dataTransactions = await callListTransactions();

    return {
      data: dataTransactions,
    };
  },
);

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.transactions = [action.payload, ...state.transactions];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(searchTransactions.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(searchTransactions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.transactions = action.payload.data as ITransaction[];
    });
  },
});

export const {addTransaction, setIsLoading} = transactionSlice.actions;
export default transactionSlice.reducer;

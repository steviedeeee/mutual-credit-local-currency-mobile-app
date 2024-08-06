import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITransaction} from '../../interfaces/api/transaction';
import {callListUsers} from '../../fakeApis/user';
import {IUser} from '../../interfaces/api/user';

interface UserSliceState {
  users: IUser[];
  isLoading: boolean;
}

const initialState: UserSliceState = {
  users: [],
  isLoading: false,
};

interface ISearchUserParams {
  searchText?: string;
}

export const searchUsers = createAsyncThunk(
  'user/searchUsers',
  async (params?: ISearchUserParams) => {
    const dataUsers = await callListUsers();

    return {
      data: dataUsers,
    };
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users = [action.payload, ...state.users];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(searchUsers.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(searchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data as IUser[];
    });
  },
});

export const {addUser, setIsLoading} = userSlice.actions;
export default userSlice.reducer;

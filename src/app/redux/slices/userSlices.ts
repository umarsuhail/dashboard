import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState,User } from '../../utils/types';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      addUser(state, action: PayloadAction<User>) {
        state.users.push(action.payload);
      },
      setUsers(state, action: PayloadAction<User[]>) {
        state.users = action.payload;
      },
      setLoading(state, action: PayloadAction<boolean>) {
        state.loading = action.payload;
      },
      setError(state, action: PayloadAction<string | null>) {
        state.error = action.payload;
      },
    },
  });
  console.log(initialState,'initialState');
  
  export const { addUser,setUsers, setLoading, setError } = userSlice.actions;

  export default userSlice.reducer;

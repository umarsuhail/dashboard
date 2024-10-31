import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState,User } from '../../utils/types';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  deletedUsers: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      addUser(state, action: PayloadAction<User>) {
        state.users.push(action.payload);
      },
      deleteUser(state, action: PayloadAction<string>) {
        const userToDelete = state.users.find(user => user.id === action.payload);
        if (userToDelete) {
          state.deletedUsers&&state.deletedUsers.push(userToDelete);  
          state.users = state.users.filter(user => user.id !== action.payload);  
        }
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
  
  export const { addUser,setUsers, setLoading, setError,deleteUser } = userSlice.actions;

  export default userSlice.reducer;

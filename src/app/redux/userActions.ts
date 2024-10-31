import { User } from '../utils/types';
import { AppDispatch } from './store';
import { addUser, setLoading, setError } from './slices/userSlices';

export const createUser = (newUser: User) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch(addUser(newUser));
      dispatch(setError(null));
    } catch (error) {
      console.log(error);
      
      dispatch(setError("Failed to create user"));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
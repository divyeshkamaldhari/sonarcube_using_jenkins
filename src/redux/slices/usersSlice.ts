import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../../intefaces/redux/slices/usersSlice.interfaces';

const initialState: CounterState = {
  userList: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAllUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllUserList } = usersSlice.actions;

export default usersSlice.reducer;

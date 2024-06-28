import { createSlice } from "@reduxjs/toolkit";

const toggleStates = createSlice({
  name: "updateState",
  initialState: {
    sidebarValue: { name: "", heading: "" },
  },
  reducers: {
    setActiveSidebarValue: (state, action) => {
      state.sidebarValue = action.payload;
    },
  },
});

export const { setActiveSidebarValue } = toggleStates.actions;

export default toggleStates.reducer;

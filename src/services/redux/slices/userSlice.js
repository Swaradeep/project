import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    deleteUser: (state) => {
      return {};
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

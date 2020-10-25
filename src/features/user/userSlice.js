import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  exp: "",
  role: "",
  token: "",
};

// export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
//   const response = await client.get("/fakeApi/user");
//   return response.user;
// });

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdded(state, action) {
      const { token } = action.payload;
      state.token = token;
    },
  },
});

export default userSlice.reducer;

export const { userAdded } = userSlice.actions;

export const selectUser = (state) => state.user;

export const selectUserToken = (state) => state.user.token;

import { createSlice } from "@reduxjs/toolkit";
import reducers from "../reducers/userReducer";

const userSlice = createSlice({
	name: "user",
	initialState: {
		details: null,
	},
	reducers,
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;

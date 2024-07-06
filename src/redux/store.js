import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import querySlice from "./slices/querySlice";
import recomendedSlice from "./slices/recomendedSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
		filter: querySlice,
		recomended: recomendedSlice,
	},
});

export default store;

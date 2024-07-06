import { createSlice } from "@reduxjs/toolkit";
import reducers from "../reducers/queryReducer";

const querySlice = createSlice({
	name: "filter",
	initialState: {
		category: "",
		keyword: "",
		apiVendor: "",
	},
	reducers,
});

export const { setCategory, setKeyword, setApiVendor, onClearFilters } = querySlice.actions;
export default querySlice.reducer;

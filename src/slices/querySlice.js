import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
	name: "filter",
	initialState: {
		category: "",
		keyword: "",
		apiVendor: "",
	},
	reducers: {
		setCategory: (state, action) => {
			console.log("category", state.category, " payload", action.payload);
			state.category = action.payload;
		},
		setKeyword: (state, action) => {
			console.log("keyword", state.keyword, " payload", action.payload);
			state.keyword = action.payload;
		},
		setApiVendor: (state, action) => {
			state.apiVendor = action.payload;
		},
		onClearFilters: (state) => {
			state.apiVendor = "";
			state.category = "";
			state.keyword = "";
		},
	},
});

export const { setCategory, setKeyword, setApiVendor, onClearFilters } = querySlice.actions;
export default querySlice.reducer;

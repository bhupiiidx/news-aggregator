import { createSlice } from "@reduxjs/toolkit";

const recomendedSlice = createSlice({
	name: "recomended",
	initialState: {
		recomendedArticles: [],
		relevantCategory: [],
		loading: "",
	},
	reducers: {
		setRecomendedArticles: (state, action) => {
			state.recomendedArticles = action.payload;
		},
		setRelevantCategory: (state, action) => {
			!state.relevantCategory.includes(action.payload) && state.relevantCategory.push(action.payload);
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const { setRecomendedArticles, setRelevantCategory, setLoading } = recomendedSlice.actions;
export default recomendedSlice.reducer;

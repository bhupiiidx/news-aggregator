import { createSlice } from "@reduxjs/toolkit";
import reducers from "../reducers/recomendedReducer";

const recomendedSlice = createSlice({
	name: "recomended",
	initialState: {
		recomendedArticles: [],
		relevantCategory: [],
		loading: "",
	},
	reducers,
});

export const { setRecomendedArticles, setRelevantCategory, setLoading } = recomendedSlice.actions;
export default recomendedSlice.reducer;

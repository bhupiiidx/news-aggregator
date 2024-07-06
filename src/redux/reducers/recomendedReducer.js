const reducers = {
	setRecomendedArticles: (state, action) => {
		state.recomendedArticles = action.payload;
	},
	setRelevantCategory: (state, action) => {
		!state.relevantCategory.includes(action.payload) && state.relevantCategory.push(action.payload);
	},
	setLoading: (state, action) => {
		state.loading = action.payload;
	},
};
export default reducers;

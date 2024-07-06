const reducers = {
	setCategory: (state, action) => {
		state.category = action.payload;
	},
	setKeyword: (state, action) => {
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
};
export default reducers;

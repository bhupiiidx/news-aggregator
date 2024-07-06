const reducers = {
	setUserDetails: (state, action) => {
		state.details = action.payload;
	},
};
export default reducers;

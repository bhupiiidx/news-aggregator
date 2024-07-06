import React, { useEffect } from "react";
import { CssBaseline, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/nav/Header";
import News from "./Components/pages/News";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./redux/slices/userSlice";
import RecommendedForYou from "./Components/pages/RecomendedForYou";
import SearchResults from "./Components/pages/SearchResults";
import RouteHeader from "./Components/nav/RouteHeader";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setUserDetails({ name: "John Doe", email: "john.doe@example.com" }));
	}, [dispatch]);
	return (
		<Router>
			<CssBaseline />
			<Header />
			<RouteHeader />
			<Container>
				<Routes>
					<Route exact path="/" element={<News />} />
					<Route path="/for-you" element={<RecommendedForYou />} />
					<Route path="/search-results" element={<SearchResults />} />
				</Routes>
			</Container>
		</Router>
	);
};

export default App;

import React, { useState, useEffect } from "react";
import { Container, CssBaseline } from "@mui/material";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/Filter";
import ArticleList from "./Components/ArticleList";
import { fetchArticles } from "./services/api";

const App = () => {
	const [articles, setArticles] = useState([]);
	const [filters, setFilters] = useState({ date: "", category: "", source: "" });

	const handleSearch = async (keyword) => {
		const response = await fetchArticles(keyword, filters);
		setArticles(response.data);
	};

	const handleFilterChange = (name, value) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[name]: value,
		}));
	};

	const handleClearFilters = () => {
		setFilters({ date: "", category: "", source: "" });
	};

	useEffect(() => {
		handleSearch("");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filters]);

	return (
		<div>
			<CssBaseline />
			<Header />
			<Container>
				<SearchBar onSearch={handleSearch} />
				<Filter filters={filters} onFilterChange={handleFilterChange} onClearFilters={handleClearFilters} />
				<ArticleList articles={articles} />
			</Container>
		</div>
	);
};

export default App;

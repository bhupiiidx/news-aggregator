import React, { useState, useEffect } from "react";
import { Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import ArticleList from "./components/ArticleList";
import { fetchArticles } from "./services/api";

const App = () => {
	const [articles, setArticles] = useState([]);
	const [filters, setFilters] = useState({ date: "", category: "", source: "" });

	const handleSearch = async (keyword) => {
		const response = await fetchArticles(keyword, filters);
		setArticles(response.data.articles);
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

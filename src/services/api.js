import axios from "axios";

const API_KEY = "YOUR_API_KEY"; // Replace with your NewsAPI key
const BASE_URL = "https://newsapi.org/v2";

export const fetchArticles = (keyword = "", filters = {}) => {
	let url = `${BASE_URL}/everything?q=${keyword}&apiKey=${API_KEY}`;

	if (filters.date) {
		// Apply date filter logic here
	}

	if (filters.category) {
		url += `&category=${filters.category}`;
	}

	if (filters.source) {
		url += `&sources=${filters.source}`;
	}

	return axios.get(url);
};

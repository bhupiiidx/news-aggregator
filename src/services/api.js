import axios from "axios";
const { REACT_APP_NEWSAPI_APIKEY, REACT_APP_THEGUARDIANS_APIKEY, REACT_APP_NEWYORKTIMES_APIKEY } = process.env;

//! NEWSAPI
// Demo URL => https://newsapi.org/v2/top-headlines?apiKey=<api-key>&category=business&pages=1
const NEWS_API_BASE_URL = "https://newsapi.org/v2/";
const create_newsapi = async (keyword = "", filters = {}) => {
	let url = "";
	if (keyword) {
		url = `${NEWS_API_BASE_URL}everything?apiKey=${REACT_APP_NEWSAPI_APIKEY}&language=en`;
	} else {
		url = `${NEWS_API_BASE_URL}top-headlines?apiKey=${REACT_APP_NEWSAPI_APIKEY}&language=en&category=${filters?.category || "genral"}`;
	}
	try {
		const axios_response = await axios.get(url);
		const response = axios_response?.data;
		const data = [];
		if (response?.status) {
			response?.articles?.map((article) =>
				data.push({
					id: article.id,
					url: article.url,
					title: article.title,
					urlToImage: article.urlToImage,
					description: article.description || "",
					source: "The News Api",
					section: article?.source?.name || "",
					sub_section: article?.author || "",
				})
			);
		}
		return { data, status: response.status, error: "" };
	} catch (err) {
		return { data: [], status: false, error: err.message };
	}
};

//! THEGUARDIANS
// Demo URL => https://content.guardianapis.com/search?api-key=<api-key>
const THEGUARDIANS_API_BASE_URL = "https://content.guardianapis.com/search";
const create_guardianapis = async (keyword, filters) => {
	let url = `${THEGUARDIANS_API_BASE_URL}?api-key=${REACT_APP_THEGUARDIANS_APIKEY}`;
	if (keyword) {
		url += `&q=${keyword}`;
	}
	if (filters?.category) {
		url += `&q=${filters.category}`;
	}
	try {
		const axios_response = await axios.get(url);
		const response = axios_response?.data?.response;
		const data = [];
		if (response?.status) {
			response?.results?.map((article) =>
				data.push({
					id: article.id,
					url: article.web_url,
					title: article.webTitle,
					urlToImage: "",
					description: "",
					source: "The Guardians",
					section: article.type,
					sub_section: article.sectionName,
				})
			);
		}
		return { data, status: response.status, error: "" };
	} catch (err) {
		return { data: [], status: false, error: err.message };
	}
};

//! The NEWYORKTIMES
// Demo URL => https://api.nytimes.com/svc/search/v2/articlesearch.json?page=1&q=train&sort=relevance&api-key=<api-key>
const NEWYORKTIMES_API_BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const create_nytimes = async (keyword, filters) => {
	let url = `${NEWYORKTIMES_API_BASE_URL}?api-key=${REACT_APP_NEWYORKTIMES_APIKEY}&relavance=newest`;
	if (keyword) {
		url += `&q=${keyword}`;
	}
	if (filters?.category) {
		url += `&q=${filters.category}`;
	}
	try {
		const { data: response } = await axios.get(url);
		const data = [];
		if (response.status) {
			const { docs } = response.response;

			docs?.map((article) =>
				data.push({
					id: article._id,
					url: article.web_url,
					title: article.abstract,
					urlToImage: article?.multimedia?.length > 0 ? "https://www.nytimes.com/" + article.multimedia[0].url : "",
					description: article.lead_paragraph,
					source: "The New York Times",
					section: article.section_name,
					sub_section: article.news_desk,
				})
			);
		}
		return { data, status: response.status, error: "" };
	} catch (err) {
		return { data: [], status: false, error: err.message };
	}
};

export const fetchArticles = async (keyword = "", filters = {}) => {
	let data = {};
	if (filters?.source === "NEWSAPI") {
		data = await create_newsapi(keyword, filters);
	} else if (filters?.source === "THEGUARDIANS") {
		data = await create_guardianapis(keyword, filters);
	} else if (filters?.source === "NEWYORKTIMES") {
		data = await create_nytimes(keyword, filters);
	} else {
		const data1 = await create_newsapi(keyword, filters);
		const data2 = await create_guardianapis(keyword, filters);
		const data3 = await create_nytimes(keyword, filters);
		data = { data: [...data1.data, ...data2.data, ...data3.data], status: true, error: "" };
	}
	return data;
	// return { data: [], status: true, error: "" };
};

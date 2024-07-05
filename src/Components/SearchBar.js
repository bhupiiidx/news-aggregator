import React from "react";
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
	const [keyword, setKeyword] = React.useState("");

	const handleSearch = () => {
		onSearch(keyword);
	};

	return (
		<Box display="flex" justifyContent="center" my={2}>
			<TextField variant="outlined" label="Search for articles" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
			<Button variant="contained" color="primary" onClick={handleSearch}>
				Search
			</Button>
		</Box>
	);
};

export default SearchBar;

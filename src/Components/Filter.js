import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box, Button } from "@mui/material";

const Filter = ({ filters, onFilterChange, onClearFilters }) => {
	const handleChange = (event) => {
		const { name, value } = event.target;
		onFilterChange(name, value);
	};

	return (
		<Box display="flex" justifyContent="space-around" my={2}>
			<FormControl sx={{ minWidth: "100px" }} variant="outlined">
				<InputLabel>Category</InputLabel>
				<Select name="category" value={filters.category} onChange={handleChange} label="Category">
					<MenuItem value="">All</MenuItem>
					<MenuItem value="business">Business</MenuItem>
					<MenuItem value="technology">Technology</MenuItem>
					<MenuItem value="sports">Sports</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ minWidth: "100px" }} variant="outlined">
				<InputLabel>Source</InputLabel>
				<Select name="source" value={filters.source} onChange={handleChange} label="Source">
					<MenuItem value="NEWSAPI" selected>
						NewsApi
					</MenuItem>
					<MenuItem value="THEGUARDIANS">The Guardians</MenuItem>
					<MenuItem value="NEWYORKTIMES">New York Times</MenuItem>
				</Select>
			</FormControl>
			<Button variant="contained" color="secondary" onClick={onClearFilters}>
				Clear Filters
			</Button>
		</Box>
	);
};

export default Filter;

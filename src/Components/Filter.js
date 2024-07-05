import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box, Button } from "@mui/material";

const Filter = ({ filters, onFilterChange, onClearFilters }) => {
	const handleChange = (event) => {
		const { name, value } = event.target;
		onFilterChange(name, value);
	};

	return (
		<Box display="flex" justifyContent="space-around" my={2}>
			<FormControl variant="outlined">
				<InputLabel>Date</InputLabel>
				<Select name="date" value={filters.date} onChange={handleChange} label="Date">
					<MenuItem value="">All</MenuItem>
					<MenuItem value="today">Today</MenuItem>
					<MenuItem value="week">This Week</MenuItem>
					<MenuItem value="month">This Month</MenuItem>
				</Select>
			</FormControl>
			<FormControl variant="outlined">
				<InputLabel>Category</InputLabel>
				<Select name="category" value={filters.category} onChange={handleChange} label="Category">
					<MenuItem value="">All</MenuItem>
					<MenuItem value="business">Business</MenuItem>
					<MenuItem value="technology">Technology</MenuItem>
					<MenuItem value="sports">Sports</MenuItem>
				</Select>
			</FormControl>
			<FormControl variant="outlined">
				<InputLabel>Source</InputLabel>
				<Select name="source" value={filters.source} onChange={handleChange} label="Source">
					<MenuItem value="">All</MenuItem>
					<MenuItem value="bbc-news">BBC News</MenuItem>
					<MenuItem value="the-verge">The Verge</MenuItem>
					<MenuItem value="cnn">CNN</MenuItem>
				</Select>
			</FormControl>
			<Button variant="contained" color="secondary" onClick={onClearFilters}>
				Clear Filters
			</Button>
		</Box>
	);
};

export default Filter;

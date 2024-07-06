import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { onClearFilters, setApiVendor, setCategory } from "../../redux/slices/querySlice";

const Filter = () => {
	const { apiVendor, category } = useSelector((state) => state.filter);
	const dispatch = useDispatch();


	return (
		<Box display="flex" justifyContent="space-around" my={2}>
			<FormControl sx={{ minWidth: { md: "200px", xs: "100px" } }} size="small" variant="outlined">
				<InputLabel>Category</InputLabel>
				<Select name="category" value={category} onChange={(e) => {
					console.log("Category setCategory", setCategory, ' | value', e.target.value)
					dispatch(setCategory(e.target.value))
				}} label="Category">
					<MenuItem value="">All</MenuItem>
					<MenuItem value="business">Business</MenuItem>
					<MenuItem value="technology">Technology</MenuItem>
					<MenuItem value="sports">Sports</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ minWidth: { md: "200px", xs: "100px" } }} size="small" variant="outlined">
				<InputLabel>Source</InputLabel>
				<Select name="source" value={apiVendor} onChange={(e) => dispatch(setApiVendor(e.target.value))} label="Source">
					<MenuItem value="all">All</MenuItem>
					<MenuItem value="NEWSAPI">NewsApi</MenuItem>
					<MenuItem value="THEGUARDIANS">The Guardians</MenuItem>
					<MenuItem value="NEWYORKTIMES">New York Times</MenuItem>
				</Select>
			</FormControl>
			<Button variant="contained" size="small" color="error" onClick={() => dispatch(onClearFilters())}>
				Clear Filters
			</Button>
		</Box>
	);
};

export default Filter;

import React from "react";
import { FormControl, InputAdornment, IconButton, Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setKeyword } from "../../redux/slices/querySlice";
import { useNavigate } from 'react-router-dom';
import "./searchBar.css"


const SearchBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const keyword = useSelector((state) => state.filter.keyword);

	const handleSearch = () => {
		navigate.push('/search-results');
	};
	return (
		<FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
			<Input
				id="standard-adornment-password"
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleSearch}
						><SearchIcon />
						</IconButton>
					</InputAdornment>
				}
				onChange={(e) => {
					dispatch(setKeyword(e.target.value))
					console.log('e.target.value', e.target.value);
				}}
				value={keyword}
				label="Search for articles"
			/>
		</FormControl>
	)
};

export default SearchBar;

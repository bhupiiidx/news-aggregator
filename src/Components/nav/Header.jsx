import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchBar from "./SearchBar";


const Header = () => (
	<>
		<AppBar position="static" color="error">
			<Box sx={{ display: 'flex', justifyContent: "space-between" }}>
				<Toolbar sx={{ flexShrink: 1 }} >
					<Typography variant="h6">News Aggregator</Typography>
				</Toolbar>
				<Box sx={{ width: '50%' }}>
					<SearchBar />
				</Box>
				<Toolbar sx={{ flexShrink: 1 }} >
					<Typography variant="h6">News Aggregator</Typography>
				</Toolbar>
			</Box>
		</AppBar>
		<AppBar position="static" color="success">
			<Box sx={{ display: 'flex', justifyContent: "space-between" }}>
				<Toolbar sx={{ flexShrink: 1 }} >
					<Typography variant="h6">News Aggregator</Typography>
				</Toolbar>
				<Toolbar sx={{ flexShrink: 1 }} >
					<Typography variant="h6">News Aggregator</Typography>
				</Toolbar>
			</Box>
		</AppBar>
	</>
);

export default Header;

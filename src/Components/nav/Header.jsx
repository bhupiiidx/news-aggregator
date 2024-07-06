import React from "react";
import { Toolbar, Typography, Box } from "@mui/material";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";
import "./header.css"


const Header = () => (
	<>
		<Box className="iconWrapper">
			<Toolbar sx={{ flexShrink: 1 }} >
				<Typography variant="h6">News Aggregator</Typography>
			</Toolbar>
			<Box sx={{
				width: { xs: '95%', md: "50%" },
				padding: "10px",
			}}>
				<SearchBar />
			</Box>
			<Box className="userWrapper">
				<Box className="forYou">
					<Link to="/for-you">
						For You
					</Link>
				</Box>
				<UserProfile />
			</Box>
		</Box>
	</>
);

export default Header;

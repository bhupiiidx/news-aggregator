import React from "react";
import { Grid } from "@mui/material";
import ArticleCard from "./ArticleCard";
import { useDispatch, useSelector } from 'react-redux';
import { setRelevantCategory } from '../../slices/recomendedSlice';

const ArticleList = ({ articles }) => {
	const dispatch = useDispatch();
	const relevantCategory = useSelector((state) => state.recomended.relevantCategory);
	const handleRecondedLike = (category) => {
		dispatch(setRelevantCategory(category));
	}

	return (
		<Grid container spacing={3}>
			{articles.map((article, index) => (
				<Grid item xs={12} sm={6} md={4} key={index}>
					<ArticleCard
						article={article}
						handleRecondedLike={handleRecondedLike}
						recomended={relevantCategory.includes(article.sub_section)} />
				</Grid>
			))}
		</Grid>
	);
};

export default ArticleList;

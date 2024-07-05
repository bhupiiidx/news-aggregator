import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";

const ArticleCard = ({ article }) => (
	<Card>
		<CardActionArea href={article.url} target="_blank">
			<CardMedia component="img" alt={article.title} height="140" image={article.urlToImage} title={article.title} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{article.title}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					{article.description}
				</Typography>
			</CardContent>
		</CardActionArea>
	</Card>
);

export default ArticleCard;

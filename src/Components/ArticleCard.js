import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Stack, Chip } from "@mui/material";
import "./articleCard.css";
const ArticleCard = ({ article }) => (
	<Card>
		<CardActionArea href={article.url} target="_blank">
			{article.urlToImage && <CardMedia component="img" alt={article.title} height="140" image={article.urlToImage} title={article.title} />}
			<CardContent>
				<Chip size="small" label={article.source} color="error" />
				<Typography className="title" gutterBottom variant="h5" component="div">
					{article.title}
				</Typography>
				{(article.section || article.sub_section) && (
					<Stack direction="row" spacing={1} sx={{ my: 1 }}>
						{article.section && <Chip size="small" label={article.section} color="primary" />}
						{article.sub_section && <Chip size="small" label={article.sub_section} color="success" />}
					</Stack>
				)}
				{article.description && (
					<Typography className="description" variant="body2" color="textSecondary">
						{article.description}
					</Typography>
				)}
			</CardContent>
		</CardActionArea>
	</Card>
);

export default ArticleCard;

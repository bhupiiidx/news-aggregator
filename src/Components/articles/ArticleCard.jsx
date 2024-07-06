import React from 'react';
import { Card, CardContent, CardMedia, Typography, Stack, Chip } from "@mui/material";
import "./articleCard.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
const ArticleCard = ({ article, handleRecondedLike, recomended }) => {

	return (
		<Card>
			{article.urlToImage && <CardMedia component="img" alt={article.title} height="140" image={article.urlToImage} title={article.title} />}
			<CardContent>
				<Stack direction="row" spacing={1}>
					{article.source === "The News Api" && <Chip size="small" label={article.source} variant="outlined" color="success" />}
					{article.source === "The Guardians" && <Chip size="small" label={article.source} variant="outlined" color="error" />}
					{article.source === "The New York Times" && <Chip size="small" label={article.source} variant="outlined" color="warning" />}
					{article.section && <Chip size="small" label={article.section} variant="outlined" color="primary" />}
					{article.sub_section && <Chip
						size="small"
						label={article.sub_section}
						variant="outlined"
						color="secondary"
						onClick={() => handleRecondedLike(article.sub_section)}
						onDelete={() => { }}
						deleteIcon={recomended ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
					/>}
				</Stack>
				<Typography className="title" gutterBottom variant="h5" component="div">
					{article.title}
				</Typography>
				{article.description && (
					<Typography className="description" variant="body2" color="textSecondary">
						{article.description}
					</Typography>
				)}
			</CardContent>
		</Card>
	);
}

export default ArticleCard;

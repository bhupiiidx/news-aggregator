import React from 'react'
import { Box, Typography } from "@mui/material";
import ArticleList from './ArticleList';

function ArticlesWrapper({ sectionTitle, articles }) {
    return (
        <Box my={2}>
            <Typography gutterBottom variant="h5" component="div">{sectionTitle}</Typography>
            <ArticleList articles={articles} />
        </Box>
    )
}

export default ArticlesWrapper
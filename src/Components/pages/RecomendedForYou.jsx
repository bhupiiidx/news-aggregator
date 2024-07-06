import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchArticles } from '../../services/api';
import ArticlesWrapper from '../articles/ArticlesWrapper';
import { Container, Typography, LinearProgress, Box } from "@mui/material";

const RecommendedForYou = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const category = useSelector((state) => state.recomended.relevantCategory);

    useEffect(() => {
        if (category) {
            const fetchRecommendedArticles = async () => {
                const response = await fetchArticles('', { category: category.join("&q=") });
                setArticles(response.data);
                setLoading(false);
            };
            fetchRecommendedArticles();
        }
    }, [category]);
    return (
        <Container mt={2}>
            {category ?
                <>
                    {loading ? (
                        <Box sx={{ width: "100%" }}>
                            <LinearProgress />
                        </Box>
                    ) : (
                        <ArticlesWrapper sectionTitle="Recommended for You" articles={articles} />
                    )}
                </>
                :
                <Typography variant="h6">Nothing is here for you..... Explore More</Typography>}
        </Container>
    );
};

export default RecommendedForYou;

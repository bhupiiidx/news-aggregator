import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchArticles } from '../../services/api';
import ArticlesWrapper from '../articles/ArticlesWrapper';
import Container from "@mui/material/Container";

const RecommendedForYou = () => {
    const [articles, setArticles] = useState([]);
    const category = useSelector((state) => state.filter.relevantCategory);

    useEffect(() => {
        if (category) {
            const fetchRecommendedArticles = async () => {
                const response = await fetchArticles('', { category: category.join("&q=") });
                setArticles(response.data);
            };
            fetchRecommendedArticles();
        }
    }, [category]);
    if (articles) {
        return (
            <Container>
                <ArticlesWrapper sectionTitle="Recommended for You" articles={articles} />
            </Container>
        );

    }
    return <></>
};

export default RecommendedForYou;

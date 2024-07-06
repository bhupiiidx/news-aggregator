import React, { useState, useEffect } from "react";
import { Container, Box, LinearProgress } from "@mui/material";
import { useSelector } from 'react-redux';
import { fetchArticles } from "../../services/api";
import ArticlesWrapper from "../articles/ArticlesWrapper";

const SearchResults = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const { keyword } = useSelector((state) => state.filter);

    const fetchData = async () => {
        setLoading(true);
        const response = await fetchArticles(keyword);
        setLoading(false);
        setArticles(response.data);
    };



    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);

    return (
        <div>
            <Container>
                {loading ? (
                    <Box sx={{ width: "100%" }}>
                        <LinearProgress />
                    </Box>
                ) : (
                    <ArticlesWrapper articles={articles} sectionTitle="Trending News" />
                )}
            </Container>
        </div>
    );
};

export default SearchResults;

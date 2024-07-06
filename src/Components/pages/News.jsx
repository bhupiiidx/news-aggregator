import React, { useState, useEffect } from "react";
import { Container, Box, LinearProgress } from "@mui/material";
import { useSelector } from 'react-redux';
import Filter from "../nav/Filter";
import { fetchArticles } from "../../services/api";
import ArticlesWrapper from "../articles/ArticlesWrapper";

const News = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const { category, apiVendor } = useSelector((state) => state.filter);

    const fetchData = async () => {
        setLoading(true);
        const response = await fetchArticles("", { category, source: apiVendor });
        setLoading(false);
        setArticles(response.data);
    };



    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, apiVendor]);

    return (
        <div>
            {/* <SearchBar onSearch={fetchData} keyword={keyword} setKeyword={setKeyword} /> */}
            <Container>
                <Filter />
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

export default News;

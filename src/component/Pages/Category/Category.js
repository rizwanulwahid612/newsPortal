import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const categotyNews = useLoaderData()
    return (
        <div>
            <h2>Category{categotyNews.length}</h2>
            {
                categotyNews.map(news => <NewsSummeryCard
                key={news._id}
                news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;
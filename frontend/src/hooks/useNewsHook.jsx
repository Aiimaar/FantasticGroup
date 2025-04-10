import client from '../utils/contentfulClient.js';
import { useState, useEffect } from 'react';

export const useNewsHook = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        client.getEntries({ content_type: 'newsArticles' })
            .then((data) => {
                const fetchedNews = data.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.title,
                    description: item.fields.description, 
                    image: item.fields.image?.[0]?.fields?.file?.url || null,
                    slug: item.fields.slug,
                }));

                setNews(fetchedNews);
            })
            .catch((error) => {
                setError(error);
                console.error('Error fetching news:', error);
            });
    }, []);

    return { news, error }; 
};


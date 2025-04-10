import client from '../utils/contentfulClient.js';
import { useState, useEffect } from 'react';

export const useArticleHook = () => {
    const [article, setArticle] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        client.getEntries({ content_type: 'goGreen' })
            .then((data) => {
                console.log("🧪 All entries in space:", data.items);
                const fetchedArticle = data.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.title,
                    description: item.fields.description, 
                    image: item.fields.image?.[0]?.fields?.file?.url
                    ? "https:" + item.fields.image[0].fields.file.url
                    : null,

                    slug: item.fields.slug,
                }));

                setArticle(fetchedArticle);
            })
            .catch((error) => {
                setError(error);
                console.error('Error fetching articles:', error);
            });
    }, []);

    return { article, error }; 
};


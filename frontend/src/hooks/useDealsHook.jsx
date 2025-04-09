import client from '../utils/contentfulClient.js';
import { useState, useEffect } from 'react';

export const useDealsHook = () => {
    const [deals, setDeals] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        client.getEntries({ content_type: 'deals' })
            .then((data) => {
                const fetchedDeals = data.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.title,
                    image: `https:${item.fields.image?.fields?.file?.url ?? ''}` || null

       
                }));

                setDeals(fetchedDeals);
            })
            .catch((error) => {
                setError(error);
                console.error('Error fetching deals:', error);
            });
    }
    , []);
    return { deals, error };
};
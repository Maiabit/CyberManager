import { useState, useEffect, useCallback } from 'react';

import { getItems } from '../services/api';



export const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getItems(endpoint);
            setData(response.data);
            setError(null);
        } catch (err) {
            console.error(`Error en useFetch (${endpoint}):`, err);
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [endpoint]);

  
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    
    return { data, loading, error, reload: fetchData };
};

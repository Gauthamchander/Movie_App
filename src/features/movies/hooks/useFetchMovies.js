import { useState, useEffect, use } from 'react';
import { fetchDataAPI } from '../../../api/apiClient';

const useFetchMovies = (endpoint, params = {}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const response = await fetchDataAPI(endpoint, null, params);
                setData(response.results);
                setTotalPages(response.total_pages || 1);
            } catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();

     }, [endpoint, JSON.stringify(params)]); 

     return { data, loading, error, totalPages };
}

export default useFetchMovies;
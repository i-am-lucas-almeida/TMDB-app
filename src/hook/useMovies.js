import { useState } from 'react';

const useMovies = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchMovies = async () => {

        try {

            setLoading(true);

            const res = await fetch(url);

            const items = await res.json();

            setData(items);

            setLoading(false);

        } catch (error) {

            console.log(error.message);
            setError(true);

        }

    }

    return { data, fetchMovies, error, loading }

}

export default useMovies;
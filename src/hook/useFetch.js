import { useEffect, useState } from 'react';

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {

            try {

                setLoading(true);

                const res = await fetch(url);

                const items = await res.json();

                setData(items);

                setLoading(false);

            } catch(error) {

                console.log(error.message);

                setError(true);

            }

        }

        fetchData();

    }, [url]);

    return { data, error, loading };

}


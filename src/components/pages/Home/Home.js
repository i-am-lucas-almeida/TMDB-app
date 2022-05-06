import { useEffect, useState } from 'react';
import MediaCard from '../../layout/MediaCard';
import FormSearch from '../../layout/FormSearch';
import '../Home/Home.css';

export default function Home() {

    const API_KEY = process.env.REACT_APP_API_KEY;

    const [trending, setTrending] = useState([]);

    const getTrendingMedias = (API) => {

        fetch(API)

            .then((resp) => resp.json())
            .then((data) => {

                setTrending(data.results);

            });

    }

    useEffect(() => {

        getTrendingMedias(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=pt-BR`);

    }, [API_KEY]);

    return (

        <>

            <FormSearch/>

            <div className='container'>

                <h1 className="title">Filmes Populares</h1>

                <div className='home__container_content'>

                    {trending.length > 0 && trending.map((trend) =>

                        <MediaCard key={trend.id} {...trend} />

                    )}

                </div>

            </div>

        </>
    )

}
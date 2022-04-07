import { useEffect, useState } from 'react';
import MediaCard from '../../layout/MediaCard';
import Search from '../../layout/Search';
import Trending from '../../layout/Trending';
import '../Home/Home.css';

export default function Home() {

    const TRENDINGMEDIA = 'https://api.themoviedb.org/3/trending/all/week?api_key=dea7f3e045b86feae02c7593524b211d';
    const SEARCHTRENDING = 'https://api.themoviedb.org/3/search/multi?api_key=dea7f3e045b86feae02c7593524b211d&query='

    const [trending, setTrending] = useState([]);
    const [searchTrending, setSearchTrending] = useState('');
    const [results, setResults] = useState(false);

    const getTrendingMedias = (API) => {

        fetch(API)
            .then((resp) => resp.json())
            .then((data) => {

            setTrending(data.results);

        });

    }

    useEffect(() => {

        getTrendingMedias(TRENDINGMEDIA);

    }, []);

    const handleOnSubmit = (e) => {

        e.preventDefault();

        getTrendingMedias(SEARCHTRENDING + searchTrending);
        setResults(true);

    }

    const handleOnChange = (e) => {

        setSearchTrending(e.target.value);

    }

    return(

        <div className='container'>

            <Search nameCategory='trending_search' placeholder_category='Search for movies or TV series' search_value={searchTrending} event_change={handleOnChange} event_submit={handleOnSubmit} />

            {results === true ? '' :

                <div>
                    
                    <h1 className='title'>Trending</h1>
                    <Trending/>

                </div>

            }

            <h1 className='title'>{results === true ? `${'Found'} ${trending.length} ${' Results For '} ${"'"}${searchTrending}${"'"}` : 'Recommended For You'}</h1>

            <div className='home__container_content'>

                {trending.length > 0 && trending.map((trend) => <MediaCard key={trend.id} {...trend} />)}

            </div>

        </div>

    )

}
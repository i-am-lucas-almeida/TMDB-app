import { useEffect, useState } from 'react';
import MediaCard from '../../layout/MediaCard';
import '../Series/Series.css';
import Search from '../../layout/Search';

export default function Series() {

    const POPULARSERIES = 'https://api.themoviedb.org/3/tv/popular?api_key=dea7f3e045b86feae02c7593524b211d&language=en-US&page=1';
    const SEARCHSERIES = 'https://api.themoviedb.org/3/search/tv?api_key=dea7f3e045b86feae02c7593524b211d&query='

    const [series, setSeries] = useState([]);
    const [searchSeries, setSearchSeries] = useState('');
    const [results, setResults] = useState(false);

    const getSeries = (API) => {

        fetch(API)
            .then((resp) => resp.json())
            .then((data) => {

            setSeries(data.results);

        });

    }

    useEffect(() => {

        getSeries(POPULARSERIES);

    }, []);

    const handleOnSubmit = (e) => {

        e.preventDefault();

        getSeries(SEARCHSERIES + searchSeries);
        setResults(true);

    }

    const handleOnChange = (e) => {

        setSearchSeries(e.target.value);

    }

    return(

        <div className='container'>

            <Search nameCategory='serie_search' placeholder_category='Search for TV series' search_value={searchSeries} event_change={handleOnChange} event_submit={handleOnSubmit} />

            <h1 className='title'>{results === true ? `${'Found'} ${series.length} ${' Results For '} ${"'"}${searchSeries}${"'"}` : 'Most popular TV series'}</h1>

            <div className='series__container_content'>

                {series.length > 0 && series.map((serie) => <MediaCard key={serie.id} {...serie} />)}

            </div>

        </div>

    )

}
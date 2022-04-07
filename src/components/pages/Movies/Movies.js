import { useEffect, useState } from 'react';
import '../Movies/Movies.css';
import Search from '../../layout/Search';
import MediaCard from '../../layout/MediaCard';

export default function Movies() {

    const POPULARMOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=dea7f3e045b86feae02c7593524b211d&language=en-US&page=1';
    const SEARCHMOVIES = 'https://api.themoviedb.org/3/search/movie?api_key=dea7f3e045b86feae02c7593524b211d&query=';

    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState('');
    const [results, setResults] = useState(false);

    const getMovies = (API) => {

        fetch(API)
            .then((resp) => resp.json())
            .then((data) => {

            setMovies(data.results);

        });

    }

    useEffect(() => {

        getMovies(POPULARMOVIES);

    }, []);

    const handleOnSubmit = (e) => {

        e.preventDefault();

        getMovies(SEARCHMOVIES + searchMovies);
        setResults(true);

    }

    const handleOnChange = (e) => {

        setSearchMovies(e.target.value);

    }

    return(

        <div className='container'>

            <Search nameCategory='movie_search' id_category='movie_search' placeholder_category='Search for movies' search_value={searchMovies} event_change={handleOnChange} event_submit={handleOnSubmit} />

            <h1 className='title'>{results === true ? `${'Found'} ${movies.length} ${' Results For '} ${"'"}${searchMovies}${"'"}` : 'Most popular movies'}</h1>

            <div className='movies__container_content'>

                {movies.length > 0 && movies.map((movie) => <MediaCard key={movie.id} {...movie} />)}

            </div>

        </div>

    )

}
import MediaCard from "../../layout/MediaCard";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Search = () => {

    const API_KEY = process.env.REACT_APP_API_KEY;

    const { id } = useParams();

    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${id}`)

            .then((resp) => resp.json())
            .then((data) => {

                setSearchMovies(data.results);

            });

    }, [API_KEY, id]);

    return (

        <div className='container'>

            <div className='home__container_content'>

                {searchMovies.length > 0 && searchMovies.map((trend) =>

                    <MediaCard key={trend.id} {...trend} />

                )}

            </div>

        </div>

    );

}

export default Search;
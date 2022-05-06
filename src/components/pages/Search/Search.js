import MediaCard from "../../layout/MediaCard";
import FormSearch from '../../layout/FormSearch';
import ErrorMessage from "../../layout/ErrorMessage";
import Loader from '../../../components/layout/Loader';

import { useParams } from "react-router-dom";
import { useFetch } from "../../../hook/useFetch";

const Search = () => {

    const { id } = useParams();

    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${id}&page=1`;

    const { data, error, loading } = useFetch(URL);

    return (

        <>

            <FormSearch />

            {error && <ErrorMessage />}

            {loading && <Loader/>}

            {!loading &&

                <div className='container'>

                    <div className='home__container_content'>

                        {data.results && data.results.map((trend) =>

                            <MediaCard key={trend.id} {...trend} />

                        )}

                    </div>

                </div>

            }

        </>

    );

}

export default Search;
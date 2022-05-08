import '../Movies/Movies.css';
import { useParams } from 'react-router-dom';
import {useState} from 'react';
import FormSearch from '../../layout/FormSearch';
import ErrorMessage from '../../layout/ErrorMessage';
import Loader from '../../layout/Loader';
import MediaCard from '../../layout/MediaCard';
import Pagination from '../../layout/Pagination';

import { useFetch } from '../../../hook/useFetch';
import { getMovies } from '../../../lib/apiLinks';
import useTitle from '../../layout/useTitle';

const Movies = () => {

    let [page, setPage] = useState('');

    const { name, id } = useParams();

    useTitle(`Filmes App | ${name}`)

    const URL = getMovies(id, page);

    const { data, error, loading } = useFetch(URL);

    const totalPages = data.total_pages;
    const current_page = data.page;

    page = current_page;

    console.log(data.results)

    return (

        <>

            <FormSearch setPage={setPage} current_page={current_page} />

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <div className='container'>

                    <h1 className="title">{name}</h1>

                    <div className='movies__container'>

                        {data.results && data.results.map((item) =>

                            <MediaCard key={item.id} {...item} />

                        )}

                    </div>

                    <Pagination setPage={setPage} currentPage={current_page} totalPages={totalPages} />

                </div>

            }

        </>

    );

}

export default Movies;
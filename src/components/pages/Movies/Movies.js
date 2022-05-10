import useMovies from '../../../hook/useMovies';
import usePagination from '../../../hook/usePagination';

import { useParams } from 'react-router-dom';
import {useEffect} from 'react';
import FormSearch from '../../layout/FormSearch';
import ErrorMessage from '../../layout/ErrorMessage';
import Loader from '../../layout/Loader';
import MediaCard from '../../layout/MediaCard';
import Pagination from '../../layout/Pagination';

import { getMovies } from '../../../lib/apiLinks';
import useTitle from '../../layout/useTitle';

const Movies = () => {

    const { name, id } = useParams();

    useTitle(`Filmes App | ${name}`)

    const { setActualPage, actualPage } = usePagination();

    const URL = getMovies(id, actualPage);

    const { data, error, loading, fetchMovies } = useMovies(URL);

    const totalPages = data.total_pages;

    useEffect(() => {

        fetchMovies(actualPage);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actualPage]);

    return (

        <>

            <FormSearch />

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

                    <Pagination setActualPage={setActualPage} currentPage={actualPage} totalPages={totalPages} />

                </div>

            }

        </>

    );

}

export default Movies;
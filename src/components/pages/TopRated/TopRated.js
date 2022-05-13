import {useEffect} from 'react';

import useMovies from '../../../hook/useMovies';
import usePagination from '../../../hook/usePagination';

import FormSearch from '../../layout/FormSearch';
import ErrorMessage from '../../layout/ErrorMessage';
import Loader from '../../layout/Loader';
import MediaCard from '../../layout/MediaCard';
import Pagination from '../../layout/Pagination';

import { getTopRated } from '../../../lib/apiLinks';
import useTitle from '../../layout/useTitle';

const TopRated = () => {

    useTitle(`Filmes App | Top TMDB`);

    const { setActualPage, actualPage } = usePagination();

    const URL = getTopRated(actualPage);

    const { data, error, loading, fetchMovies } = useMovies(URL);

    const totalPages = data.total_pages;

    useEffect(() => {

        fetchMovies(URL);

    }, [URL]);

    return (

        <>

            <FormSearch />

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <div className='container'>

                    <h1 className="title">Filmes Top TMDB</h1>

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

export default TopRated;
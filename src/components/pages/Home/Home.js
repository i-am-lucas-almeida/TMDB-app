import { useEffect } from 'react';
import useMovies from '../../../hook/useMovies';
import usePagination from '../../../hook/usePagination';

import Pagination from '../../layout/Pagination';
import MediaCard from '../../layout/MediaCard';
import useTitle from '../../layout/useTitle';

import FormSearch from '../../layout/FormSearch';
import ErrorMessage from '../../layout/ErrorMessage';
import Loader from '../../layout/Loader';
import { getTrending } from '../../../lib/apiLinks';

const Home = () => {

    useTitle('Filmes App | Home');

    const { setActualPage, actualPage } = usePagination();

    const URL = getTrending(actualPage);

    const { data, error, loading, fetchMovies } = useMovies(URL);

    const totalPages = data.total_pages;

    useEffect(() => {

        fetchMovies(actualPage);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actualPage]);

    return (

        <>

            <FormSearch/>

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <div className='container'>

                    <h1 className="title">Filmes Populares</h1>

                    <div className='movies__container'>

                        {data.results && data.results.map((item) =>

                            <MediaCard key={item.id} {...item} />

                        )}

                    </div>

                    <Pagination setActualPage={setActualPage} currentPage={actualPage} totalPages={totalPages} />

                </div>

            }

        </>
    )

}

export default Home;
import { useEffect } from 'react';

import useMovies from '../../../hook/useMovies';
import usePagination from '../../../hook/usePagination';

import FormSearch from '../../layout/FormSearch';
import ErrorMessage from '../../layout/ErrorMessage';
import Loader from '../../layout/Loader';
import MediaCard from '../../layout/MediaCard';
import Pagination from '../../layout/Pagination';

import { getUpcoming } from '../../../lib/apiLinks';
import useTitle from '../../layout/useTitle';

const Releases = () => {

    useTitle(`Filmes App | Em breve`);

    const { setActualPage, actualPage } = usePagination();

    const URL = getUpcoming(actualPage);

    const { data, error, loading, fetchMovies } = useMovies(URL);

    const totalPages = data.total_pages;

    useEffect(() => {

        fetchMovies(actualPage);

    }, [actualPage]);

    return (

        <>

            <FormSearch />

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <div className='container'>

                    <h1 className="title">Lançamentos</h1>

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

export default Releases;
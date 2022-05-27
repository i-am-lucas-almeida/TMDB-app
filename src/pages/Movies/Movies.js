import { useParams } from 'react-router-dom';

import { useFetch } from '../../hook/useFetch';
import usePagination from '../../hook/usePagination';
import Footer from '../../components/layout/Footer';

import FormSearch from '../../components/layout/FormSearch';
import ErrorMessage from '../../components/layout/ErrorMessage';
import Loader from '../../components/layout/Loader';
import MediaCard from '../../components/layout/MediaCard';
import Pagination from '../../components/layout/Pagination';

import { getMovies } from '../../lib/apiLinks';
import useTitle from '../../components/layout/useTitle';

const Movies = () => {

    const { name, id } = useParams();

    useTitle(`Filmes App | ${name}`)

    const { setActualPage, actualPage } = usePagination();

    const URL = getMovies(id, actualPage);

    const { data, error, loading } = useFetch(URL);

    const totalPages = data.total_pages;

    return (

        <>

            <FormSearch />

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <>

                    <div className='container'>

                        <h1 className="title">{name}</h1>

                        <div className='movies__container'>

                            {data.results && data.results.map((item) =>

                                <MediaCard key={item.id} {...item} />

                            )}

                        </div>

                        <Pagination
                            setActualPage={setActualPage}
                            currentPage={actualPage}
                            totalPages={totalPages}
                        />

                    </div>

                    <Footer />

                </>

            }

        </>

    );

}

export default Movies;
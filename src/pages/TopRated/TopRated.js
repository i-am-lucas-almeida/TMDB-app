import { useFetch } from '../../hook/useFetch';
import usePagination from '../../hook/usePagination';
import Footer from '../../components/layout/Footer';

import FormSearch from '../../components/layout/FormSearch';
import ErrorMessage from '../../components/layout/ErrorMessage';
import Loader from '../../components/layout/Loader';
import MediaCard from '../../components/layout/MediaCard';
import Pagination from '../../components/layout/Pagination';

import { getTopRated } from '../../lib/apiLinks';
import useTitle from '../../components/layout/useTitle';

const TopRated = () => {

    useTitle(`Filmes App | Top TMDB`);

    const { setActualPage, actualPage } = usePagination();

    const URL = getTopRated(actualPage);

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

                        <h1 className="title">Filmes Top TMDB</h1>

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

export default TopRated;
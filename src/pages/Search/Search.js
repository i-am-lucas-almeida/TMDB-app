import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getSearch } from "../../lib/apiLinks";
import Footer from '../../components/layout/Footer';

import { useFetch } from '../../hook/useFetch';
import usePagination from '../../hook/usePagination';
import MediaCard from "../../components/layout/MediaCard";
import FormSearch from '../../components/layout/FormSearch';
import ErrorMessage from "../../components/layout/ErrorMessage";
import Loader from '../../components/layout/Loader';
import Pagination from "../../components/layout/Pagination";
import useTitle from '../../components/layout/useTitle';
import FormatNumeral from '../../components/layout/FormatNumeral';

const Search = () => {

    const { id } = useParams();

    useTitle(`Filmes App | ${id}`);

    const { setActualPage, actualPage } = usePagination();

    const URL = getSearch(id, actualPage);

    const { data, error, loading } = useFetch(URL);

    const totalPages = data.total_pages;
    const totalResults = data.total_results;

    useEffect(() => {

        setActualPage(1);

    }, [setActualPage, id]);

    return (

        <>

            <FormSearch />

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <>

                    <div className='container'>

                        <p className='title'>
                            Encontrados&nbsp;
                            <FormatNumeral text='' format='0,0'>
                                {totalResults}
                            </FormatNumeral>
                            &nbsp;resultados para {`"${id}"`}
                        </p>

                        <div className='movies__container'>

                            {data.results && data.results.map((trend) =>

                                <MediaCard key={trend.id} {...trend} />

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

export default Search;
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getSearch } from "../../../lib/apiLinks";

import useMovies from '../../../hook/useMovies';
import usePagination from '../../../hook/usePagination';
import MediaCard from "../../layout/MediaCard";
import FormSearch from '../../layout/FormSearch';
import ErrorMessage from "../../layout/ErrorMessage";
import Loader from '../../../components/layout/Loader';
import Pagination from "../../layout/Pagination";
import useTitle from '../../layout/useTitle';
import FormatNumeral from '../../layout/FormatNumeral';

const Search = () => {

    const { id } = useParams();

    useTitle(`Filmes App | ${id}`);

    const { setActualPage, actualPage } = usePagination();

    const URL = getSearch(id, actualPage);

    const { data, error, loading, fetchMovies } = useMovies(URL);

    const totalPages = data.total_pages;
    const totalResults = data.total_results;

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

                    <p className='title'>
                        Encontrados <FormatNumeral text='' format='0,0'>{totalResults}</FormatNumeral> resultados
                    </p>

                    <div className='movies__container'>

                        {data.results && data.results.map((trend) =>

                            <MediaCard key={trend.id} {...trend} />

                        )}

                    </div>

                    <Pagination setActualPage={setActualPage} currentPage={actualPage} totalPages={totalPages} />

                </div>

            }

        </>

    );

}

export default Search;
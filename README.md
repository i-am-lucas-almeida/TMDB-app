# Filmes App 🎥

Repositório usado para hospedar o site Filmes App


import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getSearch } from "../../lib/apiLinks";
import Footer from '../../components/layout/Footer';

import useMovies from '../../hook/useMovies';
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

    const { data, error, loading, fetchMovies } = useMovies(URL);

    const totalPages = data.total_pages;
    const totalResults = data.total_results;

    useEffect(() => {

        fetchMovies(URL);

    }, [URL]);

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
                            Encontrados <FormatNumeral text='' format='0,0'>{totalResults}</FormatNumeral> resultados
                        </p>

                        <div className='movies__container'>

                            {data.results && data.results.map((trend) =>

                                <MediaCard key={trend.id} {...trend} />

                            )}

                        </div>

                        <Pagination setActualPage={setActualPage} currentPage={actualPage} totalPages={totalPages} />

                    </div>

                    <Footer />

                </>

            }

        </>

    );

}

export default Search;
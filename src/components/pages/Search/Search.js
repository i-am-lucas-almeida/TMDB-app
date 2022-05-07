import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hook/useFetch";
import { getSearch } from "../../../lib/apiLinks";

import MediaCard from "../../layout/MediaCard";
import FormSearch from '../../layout/FormSearch';
import ErrorMessage from "../../layout/ErrorMessage";
import Loader from '../../../components/layout/Loader';
import Pagination from "../../layout/Pagination";


const Search = () => {

    const { id } = useParams();

    let [page, setPage] = useState('');

    const URL = getSearch(id, page);

    const { data, error, loading } = useFetch(URL);

    const total_results = data.total_results;
    const totalPages = data.total_pages;
    const current_page = data.page;

    page = current_page;

    return (

        <>

            <FormSearch setPage={setPage} current_page={current_page} />

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <div className='container'>

                    <p className='title'>Encontrados {total_results} resultados</p>

                    <div className='home__container_content'>

                        {data.results && data.results.map((trend) =>

                            <MediaCard key={trend.id} {...trend} />

                        )}

                    </div>

                    <Pagination setPage={setPage} currentPage={current_page} totalPages={totalPages} />

                </div>

            }

        </>

    );

}

export default Search;
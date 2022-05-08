import { useFetch } from '../../../hook/useFetch';
import { useState } from 'react';

import MediaCard from '../../layout/MediaCard';
import Pagination from '../../layout/Pagination';
import FormSearch from '../../layout/FormSearch';
import ErrorMessage from '../../layout/ErrorMessage';
import '../Home/Home.css';
import Loader from '../../../components/layout/Loader';
import { getTrending } from '../../../lib/apiLinks';
import useTitle from '../../layout/useTitle';

export default function Home() {

    useTitle('Filmes App | Home');

    let [page, setPage] = useState('');

    const URL = getTrending(page);

    const { data, error, loading } = useFetch(URL);

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

                    <h1 className="title">Filmes Populares</h1>

                    <div className='home__container_content'>

                        {data.results && data.results.map((item) =>

                            <MediaCard key={item.id} {...item} />

                        )}

                    </div>

                    <Pagination setPage={setPage} currentPage={current_page} totalPages={totalPages} />

                </div>

            }

        </>
    )

}
import {useState} from 'react';
import FormSearch from '../../layout/FormSearch';
import ErrorMessage from '../../layout/ErrorMessage';
import Loader from '../../layout/Loader';
import MediaCard from '../../layout/MediaCard';
import Pagination from '../../layout/Pagination';

import { useFetch } from '../../../hook/useFetch';
import { getUpcoming } from '../../../lib/apiLinks';
import useTitle from '../../layout/useTitle';

const Releases = () => {

    const [page, setPage] = useState(1);

    useTitle(`Filmes App | Em breve`);

    const URL = getUpcoming(page);

    const { data, error, loading } = useFetch(URL);

    const totalPages = data.total_pages;
    const current_page = data.page;

    return (

        <>

            <FormSearch setPage={setPage} current_page={current_page} />

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

                    <Pagination setPage={setPage} currentPage={current_page} totalPages={totalPages} page={page} />

                </div>

            }

        </>

    );

}

export default Releases;
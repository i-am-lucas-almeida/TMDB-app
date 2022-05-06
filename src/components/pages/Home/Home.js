import { useFetch } from '../../../hook/useFetch';

import MediaCard from '../../layout/MediaCard';
import FormSearch from '../../layout/FormSearch';
import ErrorMessage from '../../layout/ErrorMessage';
import '../Home/Home.css';
import Loader from '../../../components/layout/Loader';

export default function Home() {

    const API_KEY = process.env.REACT_APP_API_KEY;

    const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=pt-BR`;

    const { data, error, loading } = useFetch(URL);

    return (

        <>

            <FormSearch />

            {error && <ErrorMessage/>}

            {loading && <Loader/>} 

            {!loading &&

                <div className='container'>

                    <h1 className="title">Filmes Populares</h1>

                    <div className='home__container_content'>

                        {data.results && data.results.map((item) =>

                            <MediaCard key={item.id} {...item} />

                        )}

                    </div>

                </div>

            }
            
        </>
    )

}
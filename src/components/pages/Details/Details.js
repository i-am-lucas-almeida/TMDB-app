import { useFetch } from '../../../hook/useFetch';
import Rating from 'react-rating';
import { useParams } from "react-router-dom";
import { FaRegStar, FaStar } from 'react-icons/fa';

import '../Details/Details.css';
import FormSearch from '../../layout/FormSearch';
import Trailer from './Trailer';
import Casting from './Casting';
import Synopsis from './Synopsis';

import Loader from '../../../components/layout/Loader';
import ErrorMessage from '../../layout/ErrorMessage';

export default function Details() {

    const { id } = useParams();

    const IMG_API = 'https://image.tmdb.org/t/p/w1280';

    const API_KEY = process.env.REACT_APP_API_KEY;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`;

    const { data: items, loading, error } = useFetch(URL);

    const genres = items.genres;
    const vote_average = (items.vote_average / 2);

    return (

        <>

            <FormSearch />

            {loading && <Loader />}

            {error && <ErrorMessage />}

            {!loading &&

                <div className='container__details'>

                    <div className='container__details_poster'>

                        <img src={items.poster_path ? (IMG_API + items.poster_path) : 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} alt={items.title && items.title} />

                    </div>

                    <div className='container__details_info'>

                        <h1 className='details__title'>{items.title && items.title}</h1>

                        <p className='details__sub'>{items.tagline && items.tagline}</p>

                        <div className='details__vote-c'>

                            <p className='details__vote'>{vote_average.toString().substring(0, 3)}</p>

                            <Rating
                                initialRating={vote_average && vote_average}
                                emptySymbol={<FaRegStar />}
                                fullSymbol={<FaStar />}
                                readonly
                            />

                        </div>

                        <div className='details__info'>

                            <aside>

                                <h3>Duração</h3>
                                <p>{items.runtime ? `${items.runtime}${' min.'}` : ''}</p>

                            </aside>

                            <aside>

                                <h3>Lançamento</h3>
                                <p>{items.release_date ? items.release_date.substring(0, 4) : '????'}</p>

                            </aside>

                        </div>

                        <div className="details__genres">

                            <h3>Gêneros</h3>

                            <ul>

                                {genres && genres.map((item) =>

                                    <li key={item.name} className='details__genres-item'>{item.name}</li>

                                )}

                            </ul>

                        </div>

                        <Synopsis id={id} />

                        <Casting id={id} />

                        <Trailer id={id} />

                    </div>

                </div>

            }

        </>

    )

}
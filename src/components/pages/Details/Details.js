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
import { getDetails, getImageDefault, getImages } from '../../../lib/apiLinks';
import useTitle from '../../layout/useTitle';
import FormatNumeral from '../../layout/FormatNumeral';

export default function Details() {

    const { id } = useParams();

    const IMG_API = getImages();
    const IMG_DEF = getImageDefault();

    const URL = getDetails(id);

    const { data: items, loading, error } = useFetch(URL);

    useTitle(`Filmes App ${items.title ? '| ' + items.title : ''}`);

    const genres = items.genres;

    return (

        <>

            <FormSearch />

            {loading && <Loader />}

            {error && <ErrorMessage />}

            {!loading &&

                <div className='container__details'>

                    <div className='container__details_poster'>

                        <img src={items.poster_path ? (IMG_API + items.poster_path) : IMG_DEF} alt={items.title && items.title} />

                    </div>

                    <div className='container__details_info'>

                        <h1 className='details__title'>{items.title && items.title}</h1>

                        <p className='details__sub'>{items.tagline && items.tagline}</p>

                        <div className='details__vote-c'>

                            <p className='details__vote'>{items.vote_average && items.vote_average}</p>

                            <Rating
                                initialRating={items.vote_average && items.vote_average}
                                emptySymbol={<FaRegStar />}
                                fullSymbol={<FaStar />}
                                stop={10}
                                readonly
                            />

                        </div>

                        <div className='details__info'>

                            <aside>

                                <h3>Duração</h3>
                                <p>{items.runtime && `${items.runtime}${' min.'}`}</p>

                            </aside>

                            <aside>

                                <h3>Lançamento</h3>
                                <p>{items.release_date && items.release_date.substring(0, 4)}</p>

                            </aside>

                            <aside>

                                <h3>Orçamento</h3>
                                <p className='details__info-revenue'>
                                    {items.budget &&
                                        <FormatNumeral format='0.0 a' text='US$ '>
                                            {items.budget}
                                        </FormatNumeral>}
                                </p>

                            </aside>

                            <aside>

                                <h3>Bilheteria</h3>
                                <p className='details__info-revenue'>
                                    {items.revenue &&
                                        <FormatNumeral format='0.0 a' text='US$ '>
                                            {items.revenue}
                                        </FormatNumeral>}
                                </p>

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
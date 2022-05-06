import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from "react-router-dom";
import { FaRegStar, FaStar, FaPlay } from 'react-icons/fa';

//import iconPlay from '../../../assets/icon-play.svg';

import '../Details/Details.css';
import FormSearch from '../../layout/FormSearch';

export default function Details() {

    const IMG_API = 'https://image.tmdb.org/t/p/w1280';

    const API_KEY = process.env.REACT_APP_API_KEY;

    const { id } = useParams();

    const [details, setDetails] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [casting, setCasting] = useState([]);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)

            .then((resp) => resp.json())
            .then((data) => {

                const detail = {

                    id,
                    title: data.title,
                    year: data.release_date,
                    vote: data.vote_average,
                    overview: data.overview,
                    poster: data.poster_path,
                    time: data.runtime,
                    tagline: data.tagline,
                    genres: data.genres
                }

                setDetails(detail);

            });

    }, [API_KEY, id]);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)

            .then((resp) => resp.json())
            .then((data) => {

                setTrailer(data.results);

            })

    }, [API_KEY, id]);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`)
        
            .then((resp) => resp.json())
            .then((data) => {

                setCasting(data.results);

            })

    }, [API_KEY, id]);

    const genres = details.genres;
    const vote = (details.vote / 2);
    console.log(casting)

    return (

        <>

            <FormSearch />

            <div className='container__details'>

                <div className='container__details_poster'>

                    <img src={IMG_API + details.poster} alt={details.title && details.title} />

                </div>

                <div className='container__details_info'>

                    <h1 className='details__title'>{details.title ? details.title : details.title}</h1>

                    <p className='details__sub'>{details.tagline && details.tagline}</p>

                    <div className='details__vote-c'>

                        <p className='details__vote'>{vote.toString().substring(0, 3)}</p>

                        <Rating
                            initialRating={vote && vote}
                            emptySymbol={<FaRegStar />}
                            fullSymbol={<FaStar />}
                            readonly
                        />

                    </div>

                    <div className='details__info'>

                        <aside>

                            <h3>Duração</h3>
                            <p>{details.time && details.time} min.</p>

                        </aside>

                        <aside>

                            <h3>Lançamento</h3>
                            <p>{details.year && details.year.substring(0, 4)}</p>

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

                    <div className="details__synopsis">

                        <h3 className='details__synopsis'>Sinopse</h3>

                        <p className='details__overview'>{details.overview && details.overview}</p>

                    </div>

                    <div className="details__cast">

                        <h3>Elenco</h3>

                        <ul className="details__trailer-c">

                            {casting && casting.map((item) =>

                                <li className="trailer-item" key={item.id}>

                                    {item.name}

                                </li>

                            )}

                        </ul>

                    </div>

                    <ul className="details__trailer-c">

                        {trailer && trailer.map((item, index) =>

                            <li className="trailer-item" key={item.id}>

                                <a href={`https://www.youtube.com/embed/${item.key}`} target='_blank' rel='noreferrer'>

                                    <FaPlay />
                                    <span>Trailer {index + 1}</span>

                                </a>

                            </li>

                        )}

                    </ul>

                </div>

            </div>

        </>

    )

}
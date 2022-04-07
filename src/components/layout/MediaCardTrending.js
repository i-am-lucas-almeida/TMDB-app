import React from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import '../layout/styles/MediaCardTrending.css';
import PlayIcon from '../../assets/icon-play.svg';
import TvIcon from '../../assets/icon-category-tv.svg';
import MovieIcon from '../../assets/icon-category-movie.svg';

export default function MediaCardTrending({title, name, poster_path, vote_average, media_type}) {

    const IMG_API = 'https://image.tmdb.org/t/p/w1280';
    const {pathname} = useLocation();

    return(

        <div className="mediaCard__container_card" title={title ? title : name}>

            <div className='mediaCard__container_interact'>

                <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} alt={title ? title : name} className='mediaCard__image' />

                <Link to='/signIn' className='mediaCard__play'>

                    <img src={PlayIcon} alt='play icon' className='play__icon' />
                    <p>Play</p>

                </Link>

            </div>

            <div className='mediaCard__container_bottom'>

                <div className="mediaCard__container_info">

                    <div className='mediaCard__category'>

                        <span>{media_type === 'movie' ? <img src={MovieIcon} alt="movie icon" /> : '' || media_type === 'tv' ? <img src={TvIcon} alt="series icon" /> : ''}</span>

                        <p>{media_type === 'movie' ? 'Movie' : '' || media_type === 'tv' ? 'TV Serie' : ''}</p>

                        <span>{pathname.split("/")[1] === 'movies' ? <img src={MovieIcon} alt="movie icon" /> : '' || pathname.split("/")[1] === 'series' ? <img src={TvIcon} alt="series icon" /> : ''}</span>

                        <p>{pathname.split("/")[1] === 'movies' ? 'Movie' : '' || pathname.split("/")[1] === 'series' ? 'TV Serie' : ''}</p>

                    </div>

                    <p className='mediaCard__vote'><span>TMDB</span> {vote_average}</p>

                </div>

                <h3 className='mediaCard__title'>{title ? title : name}</h3>

            </div>

        </div>

    )

};
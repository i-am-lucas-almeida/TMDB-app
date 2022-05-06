import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/styles/MediaCard.css';
import iconStar from '../../assets/star-solid.svg';

export default function MediaCard({ id, title, backdrop_path, vote_average }) {

    const IMG_API = 'https://image.tmdb.org/t/p/w1280';

    return (

        <div className="media__container_card" title={title && title}>

            <Link to={'/details/' + id}>

                <div className='media__container_interact'>

                    <img src={backdrop_path ? (IMG_API + backdrop_path) : 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} alt={title && title} className='media__image' />

                </div>

                <h3 className='media__title'>{title && title}</h3>

                <div className="media__container_vote">

                    <img src={iconStar} alt="ícone voto" />

                    <p className='media__vote'> {vote_average && vote_average}</p>

                </div>

            </Link>

        </div>

    )

};
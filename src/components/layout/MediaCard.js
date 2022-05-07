import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/styles/MediaCard.css';
import iconStar from '../../assets/star-solid.svg';
import { getImageDefault, getImages } from '../../lib/apiLinks';

export default function MediaCard({ id, title, backdrop_path, vote_average }) {

    const IMG_API = getImages();
    const IMG_DEF = getImageDefault();

    return (

        <div className="media__container_card" title={title && title}>

            <Link to={`/detalhes/${id}/${title}`}>

                <div className='media__container_interact'>

                    <img src={backdrop_path ? (IMG_API + backdrop_path) : IMG_DEF} alt={title && title} className='media__image' />

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
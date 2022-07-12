import styles from "../styles/components/MediaCard.module.css";

import { Link } from "react-router-dom";

import iconStar from "../assets/star-solid.svg";
import { getImageDefault, getImages } from "../lib/apiLinks";

export default function MediaCard({ id, title, backdrop_path, vote_average }) {

    const IMG_API = getImages();
    const IMG_DEFAULT = getImageDefault();

    return (

        <div className={styles.media__container_card} title={title && title}>

            <Link to={`/detalhes/${id}/${title}`}>

                <img src={backdrop_path ? (IMG_API + backdrop_path) : IMG_DEFAULT} alt={title && title} className={styles.media__image} />

                <h3 className={styles.media__title}>{title && title}</h3>

                <div className={styles.media__container_vote}>

                    <img src={iconStar} alt="ícone voto" />

                    <p className={styles.media__vote}> {vote_average && vote_average}</p>

                </div>

            </Link>

        </div>

    );

}
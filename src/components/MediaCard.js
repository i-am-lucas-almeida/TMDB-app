import styles from "../styles/components/MediaCard.module.css";

import { Link } from "react-router-dom";

import iconStar from "../assets/star-solid.svg";
import iconMovie from "../assets/icon-category-movie.svg";
import iconTv from "../assets/icon-category-tv.svg";

import { getImageDefault, getImages } from "../lib/apiLinks";

export default function MediaCard({ id, title, name, backdrop_path, poster_path, vote_average, type, release_date, first_air_date }) {

    const IMG_API = getImages();
    const IMG_DEFAULT = getImageDefault();

    return (

        <div className={styles.media__container_card} title={title ? title : name}>

            <Link to={`/detalhes/${type}/${id}/${title ? title : name}`}>

                <img
                    src={backdrop_path ? (IMG_API + backdrop_path) : poster_path ? (IMG_API + poster_path) : IMG_DEFAULT}
                    alt={title ? title : name}
                    className={styles.media__image}
                />

                <div className={styles.media__container_info}>

                    <p>
                        {release_date ? release_date.substring(0, 4) : first_air_date ? first_air_date.substring(0, 4) : "?"}
                    </p>

                    <span>•</span>

                    <div className={styles.media__container_type}>

                        {
                            type === "movie" &&

                            <div>
                                <img src={iconMovie} alt="ícone filme" />
                                <p>Filme</p>
                            </div>
                        }

                        {
                            type === "tv" &&

                            <div>
                                <img src={iconTv} alt="ícone série" />
                                <p>Série</p>
                            </div>
                        }

                    </div>

                    <span>•</span>

                    <div className={styles.media__container_vote}>

                        <img src={iconStar} alt="ícone voto" />

                        <p className={styles.media__vote}>
                            {vote_average ? vote_average : "?"}
                        </p>

                    </div>

                </div>

                <h3 className={styles.media__title}>
                    {title ? title : name}
                </h3>

            </Link>

        </div>

    );

}
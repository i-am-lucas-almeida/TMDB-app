import styles from "../../styles/pages/Details.module.css";

import Rating from "react-rating";
import { Link } from "react-router-dom";

import { useFetch } from "../../hook/useFetch";
import { getDetails, getImageDefault, getImages } from "../../lib/apiLinks";
import { useParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";

import Container from "../../components/Container";
import FormSearch from "../../components/FormSearch";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import useTitle from "../../utils/useTitle";
import FormatNumeral from "../../components/FormatNumeral";
import Footer from "../../components/Footer";

import Trailer from "./Trailer";
import Casting from "./Casting";
import Synopsis from "./Synopsis";

export default function Details() {

    const { type, id } = useParams();

    const IMG_API = getImages();
    const IMG_DEF = getImageDefault();

    const URL = getDetails(type, id);

    const { data: items, loading, error } = useFetch(URL);

    useTitle(`${items.title ? (items.title + " | TMDB App") : items.name ? (items.name + " | TMDB App") : "Sem título | TMDB App"}`);

    return (

        <>

            {loading && <Loader />}

            {error && <ErrorMessage />}

            {!loading &&

                <>

                    <FormSearch />

                    <Container>

                        <div className={styles.container__details}>

                            <div className={styles.container__details_poster}>

                                <img src={items.poster_path ? (IMG_API + items.poster_path) : IMG_DEF} alt={items.title ? items.title : items.name} />

                            </div>

                            <div className={styles.container__details_info}>

                                <h1 className={styles.details__title}>
                                    {items.title ? items.title : items.name ? items.name : "Sem título"}
                                </h1>

                                <p className={styles.details__sub}>
                                    {items.tagline && items.tagline}
                                </p>

                                <div className={styles.details__vote_c}>

                                    <p className={styles.details__vote}>
                                        {items.vote_average && items.vote_average.toFixed(1)}
                                    </p>

                                    <Rating
                                        initialRating={items.vote_average}
                                        emptySymbol={<FaRegStar />}
                                        fullSymbol={<FaStar />}
                                        stop={10}
                                        readonly
                                    />

                                </div>

                                {type === "movie" ? (

                                    <div className={styles.details__info}>

                                        <aside>
                                            <h3>Duração</h3>
                                            <p>
                                                {items.runtime ? `${items.runtime} min.` : "..."}
                                            </p>
                                        </aside>

                                        <aside>
                                            <h3>Lançamento</h3>
                                            <p>
                                                {items.release_date ? items.release_date.substring(0, 4) : "..."}
                                            </p>
                                        </aside>

                                        <aside>
                                            <h3>Orçamento</h3>
                                            <p className={styles.details__info_value}>
                                                <FormatNumeral format="0.0 a" text="US$ ">
                                                    {items.budget ? items.budget : 0}
                                                </FormatNumeral>
                                            </p>
                                        </aside>

                                        <aside>
                                            <h3>Bilheteria</h3>
                                            <p className={styles.details__info_value}>
                                                <FormatNumeral format="0.0 a" text="US$ ">
                                                    {items.revenue ? items.revenue : 0}
                                                </FormatNumeral>
                                            </p>
                                        </aside>

                                    </div>

                                )
                                    : (

                                        <div className={styles.details__info}>

                                            <aside>
                                                <h3>Duração</h3>
                                                <p>
                                                    {items.number_of_episodes ? `${items.number_of_episodes} episódios` : "..."}
                                                </p>
                                            </aside>

                                            <aside>
                                                <h3>Temporadas</h3>
                                                <p>
                                                    {items.number_of_seasons ? items.number_of_seasons : "..."}
                                                </p>
                                            </aside>

                                            <aside>
                                                <h3>Lançamento</h3>
                                                <p>
                                                    {items.first_air_date ? items.first_air_date.substring(0, 4) : "..."}
                                                </p>
                                            </aside>

                                            <aside>
                                                <h3>Estado</h3>
                                                <p>
                                                    {items.in_production === true ? "Em exibição" : "Finalizada"}
                                                </p>
                                            </aside>

                                        </div>

                                    )

                                }

                                <div className={styles.details__section}>

                                    <h3 className={styles.details__subtitle}>
                                        Gêneros
                                    </h3>

                                    <ul>

                                        {items.genres && items.genres.length ? items.genres.map((item) =>

                                            <li
                                                key={item.name}
                                                className={styles.details__genres_item}>

                                                <Link to={`/genres/${type}/${item.name}?query=${item.id}`}>

                                                    {item.name}

                                                </Link>

                                            </li>)

                                            :

                                            (<p className={styles.details__overview}>
                                                Nenhuma informação sobre os gêneros.
                                            </p>)
                                        }

                                    </ul>

                                </div>

                                <Synopsis id={id} type={type} />

                                <Casting id={id} type={type} />

                                <Trailer id={id} type={type} />

                            </div>

                        </div>

                        <Footer />

                    </Container>

                </>

            }

        </>

    );

}
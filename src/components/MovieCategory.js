import styles from "../styles/components/MovieCategory.module.css";

import { Link } from "react-router-dom";

import { useFetch } from "../hook/useFetch";
import { getMovieCategory } from "../lib/apiLinks";

import ErrorMessage from "./ErrorMessage";
import Loader from "../components/Loader";
import MediaCard from "../components/MediaCard";

const MovieCategory = ({ title, category, slug }) => {

    const URL = getMovieCategory(1, category);

    const { data, error, loading } = useFetch(URL);

    return (

        <div className={styles.category__container}>

            <div className={styles.category__header}>

                <h1 className={styles.category__title}>

                    <Link to={`/categoria/${slug}`}>
                        {title}
                    </Link>

                </h1>

                <button className={styles.category__button}>

                    <Link to={`/categoria/${slug}`}>
                        Ver mais
                    </Link>

                </button>

            </div>

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <div className="movies__container">

                    {data.results && data.results.slice(0, 8).map((item) =>

                        <MediaCard key={item.id} {...item} />

                    )}

                </div>

            }

        </div>

    );

};

export default MovieCategory;
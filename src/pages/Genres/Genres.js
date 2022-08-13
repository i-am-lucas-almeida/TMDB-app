import styles from "../../styles/pages/Genres.module.css";

import { useFetch } from "../../hook/useFetch";
import { Link, useParams } from "react-router-dom";
import { getGenres, genreMovie, genreTV } from "../../lib/apiLinks";

import Container from "../../components/Container";
import FormSearch from "../../components/FormSearch";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import useTitle from "../../utils/useTitle";
import Footer from "../../components/Footer";

const Genres = () => {

    const { type } = useParams();

    useTitle(`TMDB App | ${type === "movie" ? "Filmes" : "Séries"}`);

    const URL = getGenres(type === "movie" ? genreMovie : genreTV);

    const { data, error, loading } = useFetch(URL);

    return (

        <>

            {loading && <Loader />}

            <FormSearch />

            {error && <ErrorMessage />}

            {!loading &&

                <>

                    <Container>

                        <ul className={styles.genres__container}>

                            {data.genres && data.genres.map((item) =>

                                <li key={item.id}>

                                    <>

                                        <Link to={`/genres/${type}/${item.name}?query=${item.id}`}>

                                            <div className={styles.genres__item}>

                                                <h3>{item.name}</h3>

                                            </div>

                                        </Link>

                                    </>

                                </li>

                            )}

                        </ul>

                    </Container>

                    <Footer />

                </>

            }

        </>

    );

};

export default Genres;
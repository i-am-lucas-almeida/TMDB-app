import styles from "../../styles/pages/Genres.module.css";

import { useFetch } from "../../hook/useFetch";
import { Link } from "react-router-dom";
import { getGenres } from "../../lib/apiLinks";

import Container from "../../components/Container";
import FormSearch from "../../components/FormSearch";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import useTitle from "../../utils/useTitle";
import Footer from "../../components/Footer";

const Genres = () => {

    useTitle("TMDB App | Gêneros");

    const URL = getGenres();

    const { data, error, loading } = useFetch(URL);

    return (

        <>

            {error && <ErrorMessage />}

            {loading && <Loader />}

            <FormSearch />

            {!loading &&

                <>

                    <Container>

                        <ul className={styles.genres__container}>

                            {data.genres && data.genres.map((item) =>

                                <li key={item.id}>

                                    <>

                                        <Link to={`/filmes/${item.id}/${item.name}`}>

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
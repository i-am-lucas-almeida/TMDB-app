import { useParams } from "react-router-dom";

import { useFetch } from "../../hook/useFetch";

import Title from "../../components/Title";
import Container from "../../components/Container";
import FormSearch from "../../components/FormSearch";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import MediaCard from "../../components/MediaCard";
import Pagination from "../../components/Pagination";
import usePagination from "../../hook/usePagination";
import Footer from "../../components/Footer";

import { getMovies } from "../../lib/apiLinks";
import useTitle from "../../utils/useTitle";

const Movies = () => {

    const { name, id } = useParams();

    useTitle(`TMDB App | ${name}`);

    const { setActualPage, actualPage } = usePagination();

    const URL = getMovies(id, actualPage);

    const { data, error, loading } = useFetch(URL);

    const totalPages = data.total_pages;

    return (

        <>

            <FormSearch />

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <>

                    <Container>

                        <Title>{name}</Title>

                        <div className="movies__container">

                            {data.results && data.results.map((item) =>

                                <MediaCard key={item.id} {...item} />

                            )}

                        </div>

                        <Pagination
                            setActualPage={setActualPage}
                            currentPage={actualPage}
                            totalPages={totalPages}
                        />

                    </Container>

                    <Footer />

                </>

            }

        </>

    );

};

export default Movies;
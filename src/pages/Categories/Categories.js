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

import { getMovieCategory } from "../../lib/apiLinks";
import useTitle from "../../utils/useTitle";

const Categories = () => {

    useTitle("TMDB App | Top TMDB");

    const { setActualPage, actualPage } = usePagination();

    const { type } = useParams();

    const URL = getMovieCategory(actualPage, type);

    const { data, error, loading } = useFetch(URL);

    const totalPages = data.total_pages;

    function getTitle() {

        let title = "";

        switch (type) {

            case "upcoming":
                title = "Lançamentos";
                break;
            case "popular":
                title = "Populares";
                break;
            case "top_rated":
                title = "Top TMDB";
                break;
            default:
                title = "";

        }

        return title;

    }

    return (

        <>

            <FormSearch />

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <>

                    <Container>

                        <Title>{getTitle()}</Title>

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

export default Categories;
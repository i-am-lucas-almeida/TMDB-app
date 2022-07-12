import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearch } from "../../lib/apiLinks";

import { useFetch } from "../../hook/useFetch";

import Title from "../../components/Title";
import Container from "../../components/Container";
import usePagination from "../../hook/usePagination";
import MediaCard from "../../components/MediaCard";
import FormSearch from "../../components/FormSearch";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import useTitle from "../../utils/useTitle";
import FormatNumeral from "../../components/FormatNumeral";
import Footer from "../../components/Footer";

const Search = () => {

    const { id } = useParams();

    useTitle(`TMDB App | ${id}`);

    const { setActualPage, actualPage } = usePagination();

    const URL = getSearch(id, actualPage);

    const { data, error, loading } = useFetch(URL);

    const totalPages = data.total_pages;
    const totalResults = data.total_results;

    useEffect(() => {

        setActualPage(1);

    }, [setActualPage, id]);

    return (

        <>

            <FormSearch />

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <>

                    <Container>

                        <Title>

                            Encontrados&nbsp;
                            <FormatNumeral text="" format="0,0">
                                {totalResults}
                            </FormatNumeral>
                            &nbsp;resultados para {`"${id}"`}

                        </Title>

                        <div className="movies__container">

                            {data.results && data.results.map((trend) =>

                                <MediaCard key={trend.id} {...trend} />

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

export default Search;
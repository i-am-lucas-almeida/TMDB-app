import { getSearch } from "../../lib/apiLinks";

import { useFetch } from "../../hook/useFetch";
import { useQuery } from "../../hook/useQuery";

import Title from "../../components/Title";
import Container from "../../components/Container";
import ContainerMedia from "../../components/ContainerMedia";
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

    const query = useQuery();
    const id = query.get("query");

    useTitle(`TMDB App | ${id}`);

    const { setActualPage, actualPage } = usePagination();

    const URL = getSearch(id, actualPage);

    const { data, error, loading } = useFetch(URL);

    const totalPages = data.total_pages;
    const totalResults = data.total_results;

    return (

        <>

            <FormSearch />

            {loading && <Loader />}

            {error && <ErrorMessage />}

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

                        <ContainerMedia>

                            {data.results && data.results.map((item) =>

                                <MediaCard
                                    key={item.id}
                                    {...item}
                                    type={item.title ? "movie" : "tv"}
                                />

                            )}

                        </ContainerMedia>

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
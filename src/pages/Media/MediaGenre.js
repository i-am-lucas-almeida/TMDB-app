import { useParams } from "react-router-dom";

import { useFetch } from "../../hook/useFetch";
import { useQuery } from "../../hook/useQuery";

import Title from "../../components/Title";
import Container from "../../components/Container";
import ContainerMedia from "../../components/ContainerMedia";
import FormSearch from "../../components/FormSearch";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import MediaCard from "../../components/MediaCard";
import Pagination from "../../components/Pagination";
import usePagination from "../../hook/usePagination";
import Footer from "../../components/Footer";
import MediaTag from "../../components/MediaTag";

import { getMediaGenre } from "../../lib/apiLinks";
import useTitle from "../../utils/useTitle";

const MediaGenre = () => {

    const { type, name } = useParams();

    const query = useQuery();
    const id = query.get("query");

    useTitle(`${type === "movie" ? "Filmes" : "Séries"} – ${name} | TMDB App`);

    const { setActualPage, actualPage } = usePagination();

    const URL = getMediaGenre(type, id, actualPage);

    const { data, error, loading } = useFetch(URL);

    const totalPages = data.total_pages;

    return (

        <>

            <FormSearch />

            {loading && <Loader />}

            {error && <ErrorMessage />}

            {!loading &&

                <>

                    <Container>

                        <div className="container__title">

                            <Title>{name}</Title>

                            <MediaTag
                                type={type}
                            />

                        </div>

                        <ContainerMedia>

                            {data.results && data.results.map((item) =>

                                <MediaCard
                                    key={item.id}
                                    {...item}
                                    type={type}
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

export default MediaGenre;
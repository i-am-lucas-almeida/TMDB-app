import { useParams } from "react-router-dom";

import { useFetch } from "../../hook/useFetch";

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

import { getCategory } from "../../lib/apiLinks";
import useTitle from "../../utils/useTitle";

const Categories = () => {

    const { type, category } = useParams();

    function getTitle() {

        let title = "";

        switch (category) {

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

    useTitle(`TMDB App | ${getTitle()}`);

    const { setActualPage, actualPage } = usePagination();

    const URL = getCategory(actualPage, `${type}/${category}`);

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

                            <Title>{getTitle()}</Title>

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

export default Categories;
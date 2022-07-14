import FormSearch from "../../components/FormSearch";
import Container from "../../components/Container";
import CategorySection from "../../components/CategorySection";
import useTitle from "../../utils/useTitle";
import Footer from "../../components/Footer";

import {
    moviePopular,
    movieUpcoming,
    movieTopRated,
    tvPopular,
    tvTopRated
} from "../../lib/apiLinks";

const Home = () => {

    useTitle("TMDB App | Página Principal");

    return (

        <>

            <FormSearch />

            <Container>

                <CategorySection
                    title="Lançamentos"
                    category={movieUpcoming}
                    type="movie"
                />

                <CategorySection
                    title="Populares"
                    category={moviePopular}
                    type="movie"
                />

                <CategorySection
                    title="Top TMDB"
                    category={movieTopRated}
                    type="movie"
                />

                <CategorySection
                    title="Populares"
                    category={tvPopular}
                    type="tv"
                />

                <CategorySection
                    title="Top TMDB"
                    category={tvTopRated}
                    type="tv"
                />

            </Container>

            <Footer />

        </>

    );

};

export default Home;
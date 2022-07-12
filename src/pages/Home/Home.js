import FormSearch from "../../components/FormSearch";
import Container from "../../components/Container";
import MovieCategory from "../../components/MovieCategory";
import useTitle from "../../utils/useTitle";
import Footer from "../../components/Footer";

const Home = () => {

    useTitle("TMDB App | Página Principal");

    return (

        <>

            <FormSearch />

            <Container>

                <MovieCategory
                    title="Lançamentos"
                    category="upcoming"
                    slug="upcoming"
                />

                <MovieCategory
                    title="Populares"
                    category="popular"
                    slug="popular"
                />

                <MovieCategory
                    title="Top TMDB"
                    category="top_rated"
                    slug="top_rated"
                />

            </Container>

            <Footer />

        </>

    );

};

export default Home;
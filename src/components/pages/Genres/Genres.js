import '../Genres/Genres.css';
import FormSearch from "../../layout/FormSearch";
import { useFetch } from "../../../hook/useFetch";
import { Link } from "react-router-dom";
import ErrorMessage from "../../layout/ErrorMessage";
import Loader from "../../layout/Loader";
import { getGenres } from '../../../lib/apiLinks';

const Genres = () => {

    const URL = getGenres();

    const { data, error, loading } = useFetch(URL);

    console.log(data)

    return (

        <>

            {error && <ErrorMessage />}

            {loading && <Loader />}

            <FormSearch />

            {!loading &&

                <div className="container">

                    <ul className="genres__container">

                        {data.genres && data.genres.map((item, index) =>

                            <li key={item.id}>

                                <>

                                    <Link to={`/filmes/${item.id}/${item.name}`}>

                                        <div className={`genres__item ${index % 2 === 0 ? 'color--1' : 'color--2'}`}>

                                            <h3>{item.name}</h3>

                                        </div>

                                    </Link>

                                </>

                            </li>

                        )}

                    </ul>

                </div>

            }

        </>

    );

}

export default Genres;
import './Details.css';
import { useFetch } from '../../../hook/useFetch';

const Casting = ({id}) => {

    const API_KEY = process.env.REACT_APP_API_KEY;

    const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;

    const {data} = useFetch(URL);

    const castMovie = data.cast;


    return (

        <div className="details__cast">

                        <h3>Elenco principal</h3>

                        <ul className="details__cast-c">

                            {castMovie && castMovie.slice(0,20).map((item) =>

                                <li className="cast-item" key={item.id}>

                                    {item.name}

                                </li>

                            )}

                        </ul>

                    </div>

    );
}
 
export default Casting;
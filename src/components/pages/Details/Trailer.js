import './Details.css';
import { FaPlay } from 'react-icons/fa';
import {useFetch} from '../../../hook/useFetch';

const Trailer = ({id}) => {

    const API_KEY = process.env.REACT_APP_API_KEY;

    const URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`;

    const {data} = useFetch(URL);

    return (

        <>

            <ul className="details__trailer-c">

                {data.results && data.results.map((item, index) =>

                    <li className="trailer-item" key={item.id}>

                        <a href={`https://www.youtube.com/embed/${item.key}`} target='_blank' rel='noreferrer'>

                            <FaPlay />
                            <span>Trailer {index + 1}</span>

                        </a>

                    </li>

                )}

            </ul>

        </>

    );
}

export default Trailer;
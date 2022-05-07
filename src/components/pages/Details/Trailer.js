import './Details.css';
import { FaPlay } from 'react-icons/fa';
import {useFetch} from '../../../hook/useFetch';
import { getTrailer } from '../../../lib/apiLinks';

const Trailer = ({id}) => {

    const URL = getTrailer(id);

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
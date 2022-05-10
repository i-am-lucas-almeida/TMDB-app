import './Details.css';
import { useFetch } from '../../../hook/useFetch';
import { getTrailer } from '../../../lib/apiLinks';
import TrailerModal from './TrailerModal';

const Trailer = ({ id }) => {

    const URL = getTrailer(id);

    const { data } = useFetch(URL);

    return (

        <>

            <ul className="details__trailer-c">

                {data.results && data.results.map((item, index) =>

                    <li className="trailer-item" key={item.id}>

                        <TrailerModal key_trailer={item.key} index_trailer={index} />

                    </li>

                )}

            </ul>

        </>

    );
}

export default Trailer;
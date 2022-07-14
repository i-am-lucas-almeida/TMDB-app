import styles from "../../styles/pages/Details.module.css";

import { useFetch } from "../../hook/useFetch";
import { getTrailer } from "../../lib/apiLinks";
import TrailerModal from "./TrailerModal";

const Trailer = ({ type, id }) => {

    const URL = getTrailer(type, id);

    const { data } = useFetch(URL);

    return (

        <>

            <ul className={styles.details__trailer_c}>

                {data.results && data.results.map((item, index) =>

                    <li className={styles.trailer_item} key={item.id}>

                        <TrailerModal key_trailer={item.key} index_trailer={index} />

                    </li>

                )}

            </ul>

        </>

    );
};

export default Trailer;
import styles from "../../styles/pages/Details.module.css";

import { useFetch } from "../../hook/useFetch";
import { getSynopsis } from "../../lib/apiLinks";

const Synopsis = ({ type, id }) => {

    const URL = getSynopsis(type, id);

    const { data } = useFetch(URL);

    return (

        <div className={styles.details__section}>

            <h3 className={styles.details__subtitle}>
                Sinopse
            </h3>

            {data.overview ?

                <p className={styles.details__overview}>
                    {data.overview}
                </p>

                :

                <p className={styles.details__overview}>
                    {type === "tv" && "A série não possui uma sinopse."}
                    {type === "movie" && "O filme não possui uma sinopse."}
                </p>

            }

        </div>

    );

};

export default Synopsis;
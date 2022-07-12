import styles from "../../styles/pages/Details.module.css";

import { useFetch } from "../../hook/useFetch";
import { getSynopsis } from "../../lib/apiLinks";

const Synopsis = ({ id }) => {

    const URL = getSynopsis(id);

    const { data } = useFetch(URL);

    return (

        <div className={styles.details__synopsis}>

            <h3 className={styles.details__synopsis}>
                Sinopse
            </h3>

            {data.overview ?

                <p className={styles.details__overview}>
                    {data.overview}
                </p>

                :

                <p className={styles.details__overview}>
                    O filme não possui uma sinopse.
                </p>

            }

        </div>

    );

};

export default Synopsis;
import styles from "../../styles/pages/Details.module.css";

import { useFetch } from "../../hook/useFetch";
import { getCasting } from "../../lib/apiLinks";

const Casting = ({ type, id }) => {

    const URL = getCasting(type, id);

    const { data } = useFetch(URL);

    const castMovie = data.cast;

    return (

        <div className={styles.details__cast}>

            <h3>Elenco principal</h3>

            <ul className={styles.details__cast_c}>

                {castMovie && castMovie.length > 0 ? castMovie.slice(0, 20).map((item) =>

                    <li className={styles.cast_item} key={item.id}>

                        {item.name}

                    </li>) :

                    (<p className={styles.details__overview}>
                        Nenhuma informação sobre o elenco.
                    </p>)
                }

            </ul>

        </div>

    );
};

export default Casting;
import styles from "../styles/components/NotFound.module.css";

import { Link } from "react-router-dom";

const NotFound = () => {

    return (

        <div className={`${styles.container} ${styles.container__notfound}`}>

            <div>

                <h2>Página Não Encontrada!</h2>

                <Link to="/" className={styles.btn_home}>
                    Voltar para a home
                </Link>

            </div>

        </div>

    );

};

export default NotFound;
import styles from "../styles/components/Footer.module.css";

import iconTmdb from "../assets/icon-tmdb-long.svg";

const Footer = () => {

    return (

        <footer>

            <div>

                <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">

                    <small className={styles.small}>Powered by</small> <br />
                    <img src={iconTmdb} alt="ícone tmdb" className={styles.logo_tmdb} />

                </a>

            </div>

        </footer>

    );
};

export default Footer;
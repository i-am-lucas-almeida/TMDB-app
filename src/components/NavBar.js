import styles from "../styles/components/NavBar.module.css";

import { Link, useLocation } from "react-router-dom";

import iconLogo from "../assets/logo.svg";
import imageAvatar from "../assets/image-avatar.png";

export default function NavBar() {

    const { pathname } = useLocation();

    return (

        <nav className={styles.menu__container}>

            <ul>

                <li title="Página Principal">

                    <Link to="/">

                        <img
                            src={iconLogo}
                            alt="ícone logo"
                            className={styles.logo}
                        />

                    </Link>

                </li>

                <ul className={styles.menu__container_navigate}>

                    <li className={styles.menu__container_item}>

                        <Link to="/">

                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" fill={`${pathname === "/" ? "#fff" : "#5A698F"}`} /></svg>

                        </Link>

                        <small className={styles.menu__container_pop}>
                            Em alta
                        </small>

                    </li>

                    <li className={styles.menu__container_item}>

                        <Link to="/generos">

                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill={`${pathname === "/generos" ? "#fff" : "#5A698F"}`} /></svg>

                        </Link>

                        <small className={styles.menu__container_pop}>
                            Filmes
                        </small>

                    </li>

                    <li
                        className={`${styles.menu__container_item} ${styles.nav__item} `}>

                        <Link to="/em-breve">

                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill={`${pathname === "/em-breve" ? "#fff" : "#5A698F"}`} /></svg>

                        </Link>

                        <small className={styles.menu__container_pop}>
                            Séries
                        </small>

                    </li>

                </ul>

                <li
                    className={styles.menu__container_item}
                    title="Conta">

                    <img
                        src={imageAvatar}
                        alt="imagem de perfil"
                        className={styles.avatar}
                    />

                </li>

            </ul>

        </nav>

    );

}
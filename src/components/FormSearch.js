import styles from "../styles/components/FormSearch.module.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageSearch from "../assets/icon-search.svg";

const FormSearch = () => {

    const [search, setSearch] = useState("");

    const handleOnChange = (e) => {

        setSearch(e.target.value);

    };


    function preventSearch(e) {

        if (e.code === "Enter") {

            e.preventDefault();

        }

    }

    return (

        <>

            <form className={styles.form__container}>

                <img
                    src={ImageSearch}
                    alt="ícone de pesquisa"
                    className={styles.search__icon}
                />

                <input
                    type="search"
                    name={search}
                    className={styles.search__input}
                    placeholder="Pesquise por Filmes e Séries"
                    onChange={handleOnChange}
                    value={search}
                    onKeyDown={preventSearch}
                />

                <Link to={search && `/pesquisa/${search}`} className={styles.btn__search}>

                    Buscar

                </Link>

            </form>

        </>

    );

};

export default FormSearch;
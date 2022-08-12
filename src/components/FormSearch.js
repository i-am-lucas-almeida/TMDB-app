import styles from "../styles/components/FormSearch.module.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ImageSearch from "../assets/icon-search.svg";

const FormSearch = () => {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleOnChange = (e) => {

        setSearch(e.target.value);

    };


    function handleSearch(e) {

        e.preventDefault();

        if (search.trim()) {
            navigate(`/search?query=${search}`);
        }

    }

    function handleEnter(e) {

        if (e.code === "Enter") {

            handleSearch();

        }

    }

    return (

        <>

            <form onSubmit={handleSearch} className={styles.form__container}>

                <img
                    src={ImageSearch}
                    alt="ícone de pesquisa"
                    className={styles.search__icon}
                />

                <input
                    type="search"
                    name={search}
                    placeholder="Pesquise por Filmes e Séries"
                    onChange={handleOnChange}
                    value={search}
                    onKeyDown={handleEnter}
                    className={styles.search__input}
                />

                <button type="submit"
                    className={styles.btn__search}>
                    Buscar
                </button>

            </form>

        </>

    );

};

export default FormSearch;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/FormSearch.css';
import ImageSearch from '../../assets/icon-search.svg';

const FormSearch = () => {

    const [search, setSearch] = useState('');

    const handleOnChange = (e) => {

        setSearch(e.target.value);

    }

    return (

        <>

            <form className='form__container'>

                <img src={ImageSearch} alt='ícone de pesquisa' className='search__icon' />

                <input type='search' name={search} className='search__input' placeholder='Pesquise por filmes...' onChange={handleOnChange} value={search} />

                <Link to={search && `/pesquisa/${search}`} className='btn-search'>

                    Buscar

                </Link>

            </form>

        </>

    );
}

export default FormSearch;
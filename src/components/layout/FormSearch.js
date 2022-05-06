import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/FormSearch.css';
import ImageSearch from '../../assets/icon-search.svg';

const Search = () => {

    const [searchTrending, setSearchTrending] = useState('');

    const handleOnChange = (e) => {

        setSearchTrending(e.target.value);

    }

    return (

        <>

            <form className='form__container'>

                <img src={ImageSearch} alt='icon search' className='search__icon' />

                <input type='search' name={searchTrending} className='search__input' placeholder='Pesquise por filmes...' onChange={handleOnChange} value={searchTrending} />

                <Link to={'/search/' + searchTrending} className='btn-search'>

                    Pesquisar

                </Link>

            </form>

        </>

    );
}

export default Search;
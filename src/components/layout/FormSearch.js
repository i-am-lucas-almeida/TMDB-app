import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/FormSearch.css';
import ImageSearch from '../../assets/icon-search.svg';

const FormSearch = ({ setPage, current_page }) => {

    const [search, setSearch] = useState('');

    const handleOnChange = (e) => {

        setSearch(e.target.value);

    }

    return (

        <>

            <form className='form__container'>

                <img src={ImageSearch} alt='icon search' className='search__icon' />

                <input type='search' name={search} className='search__input' placeholder='Pesquise por filmes...' onChange={handleOnChange} value={search} />

                {search ?

                    <Link to={`/pesquisa/${search}`} className='btn-search' onClick={() => setPage(current_page === 1)}>

                        Buscar

                    </Link>

                    :

                    <span className='btn-search'>Buscar</span>
                    
                }

            </form>

        </>

    );
}

export default FormSearch;
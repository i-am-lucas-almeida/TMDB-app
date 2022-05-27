import '../styles/NavBar.css';
import { useState } from 'react';
import iconLogo from '../../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { RiMovie2Fill } from 'react-icons/ri';
import { MdLocalMovies } from 'react-icons/md';
import { IoIosPodium } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';

export default function NavBar() {

    const [modal, setModal] = useState(false);

    function closeModal() {

        setModal(false);

    }

    return (

        <div className={`menu__container ${modal && 'show--modal'}`}>

            <ul>

                <li className='menu__container-item'>

                    <Link to='/' className='menu__container_logo'>

                        <img src={iconLogo} alt="ícone logo" />

                        <h2>Filmes App</h2>

                    </Link>

                </li>

                <li className='icon__menu' onClick={() => setModal(!modal)}>

                    <FiMenu />

                </li>

                <div className={`menu__mobile`}>

                    <li
                        className='menu__container-item nav__item'
                        onClick={closeModal}
                    >

                        <NavLink to='/em-breve'>

                            <MdLocalMovies />
                            <span>Lançamentos</span>

                        </NavLink>

                    </li>

                    <li
                        className='menu__container-item nav__item'
                        onClick={closeModal}
                    >

                        <NavLink to='/generos'>

                            <RiMovie2Fill />
                            <span>Gêneros</span>

                        </NavLink>

                    </li>

                    <li
                        className='menu__container-item nav__item'
                        onClick={closeModal}
                    >

                        <NavLink to='/top-tmdb'>

                            <IoIosPodium />
                            <span>Top TMDB</span>

                        </NavLink>

                    </li>

                </div>

            </ul>

        </div>

    )

}
import './styles/NavBar.css';
import iconLogo from '../../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { RiMovie2Fill } from 'react-icons/ri';

export default function NavBar() {

    return (

        <div className="menu__container">

            <ul>

                <li className='menu__container-item'>

                    <Link to='/' className='menu__container_logo'>

                        <img src={iconLogo} alt="ícone logo" />

                        <h2>Filmes App</h2>

                    </Link>

                </li>

                <li className='menu__container-item nav__item'>

                    <NavLink to='/generos'>

                        <RiMovie2Fill />
                        <span>Gêneros</span>

                    </NavLink>

                </li>

            </ul>

        </div>

    )

}
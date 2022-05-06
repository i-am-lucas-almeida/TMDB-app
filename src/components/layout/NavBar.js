import './styles/NavBar.css';
import iconLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (

        <div className="menu__container">

            <div>

                <Link to='/' className='menu__container_logo'>

                    <img src={iconLogo} alt="ícone logo" />

                    <h2>Filmes App</h2>

                </Link>

            </div>

        </div>

    )

}
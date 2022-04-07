import {Link} from 'react-router-dom';
import './styles/NavBar.css';
import {useLocation} from 'react-router-dom';

import LogoImage from '../../assets/logo.svg';

export default function NavBar() {

    const {pathname} = useLocation();

    return (

        <div className="menu__container">

            <Link to="/" title='Home Page'>

                <img src={LogoImage} alt='logo home' />
            
            </Link>

            <ul className="menu__container_navigation">

                <li>
                    <Link to='/' title='Trending'>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" alt='trending icon' className={pathname === "/" ? "icon__active" : "icon"}><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" fill="#5A698F"/></svg>
                    </Link>
                </li>

                <li>
                    <Link to='/movies' title='Movies'>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" alt='movies icon' className={pathname.split("/")[1] === "movies" ? "icon__active" : "icon"}><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill="#5A698F"/></svg>
                    </Link>
                </li>

                <li>
                    <Link to='/series' title='Tv Series'>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" alt='series icon' className={pathname.split("/")[1] === "series" ? "icon__active" : "icon"}><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill="#5A698F"/></svg>
                    </Link>
                </li>

            </ul>

            <Link to="/signIn" title="Sign in" className='menu__container_user'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" alt='sigin/signup icon' className={pathname.split("/")[1] === "signIn" || pathname.split("/")[1] === "signUp" ? "icon__active" : "icon"}><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" fill="#5A698F"/></svg>
            </Link>

        </div>

    )

}
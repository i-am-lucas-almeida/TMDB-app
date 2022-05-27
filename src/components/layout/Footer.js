import '../styles/Footer.css';
import iconTmdb from '../../assets/icon-tmdb-long.svg';

const Footer = () => {
    
    return (

        <footer>

            <div>

                <a href="https://www.themoviedb.org/" target='_blank' rel='noreferrer'>

                    <small className='small'>Powered by</small> <br />
                    <img src={iconTmdb} alt="ícone tmdb" className='logo-tmdb' />

                </a>

            </div>

        </footer>

    );
}

export default Footer;
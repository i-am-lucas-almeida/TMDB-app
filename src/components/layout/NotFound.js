import '../styles/NotFound.css';
import { Link } from "react-router-dom";

const NotFound = () => {

    return (

        <div className='container container__notfound'>

            <div>

                <h2>Página Não Encontrada!</h2>

                <Link to='/' className='btn_home'>Voltar para a home</Link>

            </div>

        </div>

    );

}

export default NotFound;
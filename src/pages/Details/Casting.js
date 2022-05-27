import './Details.css';
import { useFetch } from '../../hook/useFetch';
import { getCasting } from '../../lib/apiLinks';

const Casting = ({id}) => {

    const URL = getCasting(id);

    const {data} = useFetch(URL);

    const castMovie = data.cast;

    return (

        <div className="details__cast">

                        <h3>Elenco principal</h3>

                        <ul className="details__cast-c">

                            {castMovie && castMovie.slice(0,20).map((item) =>

                                <li className="cast-item" key={item.id}>

                                    {item.name}

                                </li>

                            )}

                        </ul>

                    </div>

    );
}
 
export default Casting;
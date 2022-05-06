import './Details.css';
import {useState} from 'react';
import { useFetch } from '../../../hook/useFetch';

const Synopsis = ({id}) => {

    const API_KEY = process.env.REACT_APP_API_KEY;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`;

    const [readMore, setReadMore] = useState(true);

    const {data} = useFetch(URL);

    return (

        <div className="details__synopsis">

            <h3 className='details__synopsis'>Sinopse</h3>

            {data.overview ?

                <div>

                    {readMore ?

                        <p className='details__overview'>{data.overview.substring(0, 200) + '...'}<span className='read-more' onClick={() => setReadMore(!readMore)}>ler mais</span></p>

                        :

                        <p className='details__overview'>{data.overview}<span className='read-more' onClick={() => setReadMore(!readMore)}>ler menos</span></p>

                    }

                </div>

                :

                <p className='details__overview'>O filme não possui uma sinopse.</p>

            }

        </div>

    );

}

export default Synopsis;
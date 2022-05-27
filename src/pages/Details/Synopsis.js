import '../Details/Details.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';
import { useFetch } from '../../hook/useFetch';
import { getSynopsis } from '../../lib/apiLinks';

const Synopsis = ({ id }) => {

    const URL = getSynopsis(id);

    const [readMore, setReadMore] = useState(true);

    const { data } = useFetch(URL);

    return (

        <div className="details__synopsis">

            <h3 className='details__synopsis'>
                Sinopse
            </h3>

            {data.overview ?

                <div>

                    {readMore ?

                        <div>

                            <p className='details__overview'>{data.overview.substring(0, 150) + '...'}</p>

                            <p className='read-more' onClick={() => setReadMore(!readMore)}>Ler mais <FiChevronDown /></p>

                        </div>

                        :

                        <div>

                            <p className='details__overview'>{data.overview}</p>

                            <p className='read-more' onClick={() => setReadMore(!readMore)}>Ler menos <FiChevronUp /></p>

                        </div>

                    }

                </div>

                :

                <p className='details__overview'>
                    O filme não possui uma sinopse.
                </p>

            }

        </div>

    );

}

export default Synopsis;
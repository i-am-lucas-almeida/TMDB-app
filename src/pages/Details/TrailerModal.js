import '../Details/Details.css';
import { useState } from 'react';
import { FaPlay, FaTimesCircle } from 'react-icons/fa';
import YoutubeEmbed from '../../components/layout/YoutubeEmbed';

const TrailerModal = ({ key_trailer, index_trailer }) => {

    const [showVideo, setShowVideo] = useState(false);

    return (

        <>

            <button onClick={() => setShowVideo(!showVideo)} className='button__trailer'>

                <FaPlay />
                <span>Trailer {index_trailer + 1}</span>

            </button>

            <div className={`modal__trailer-c ${showVideo ? 'show-modal' : ''}`}>

                <div className='modal__trailer animate__animated animate__pulse'>

                    <FaTimesCircle onClick={() => setShowVideo(!showVideo)} className='button__close' />

                    <YoutubeEmbed embedId={key_trailer} />

                </div>

            </div>

        </>

    )

}

export default TrailerModal;
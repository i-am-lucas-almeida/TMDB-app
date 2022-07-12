import styles from "../../styles/pages/Details.module.css";

import { useState } from "react";

import { FaTimesCircle } from "react-icons/fa";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { BsPlayCircleFill } from "react-icons/bs";

const TrailerModal = ({ key_trailer, index_trailer }) => {

    const [showVideo, setShowVideo] = useState(false);

    return (

        <>

            <button onClick={() => setShowVideo(!showVideo)} className={styles.button__trailer}>

                <BsPlayCircleFill />
                <span>Trailer {index_trailer + 1}</span>

            </button>

            <div className={`${styles.modal__trailer_c} ${showVideo ? styles.show_modal : ""}`}>

                <div className={styles.modal__trailer}>

                    <FaTimesCircle onClick={() => setShowVideo(!showVideo)} className={styles.button__close} />

                    <YoutubeEmbed embedId={key_trailer} />

                </div>

            </div>

        </>

    );

};

export default TrailerModal;
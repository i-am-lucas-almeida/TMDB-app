import styles from "../styles/components/YoutubeEmbed.module.css";

import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (

  <div className={styles.video_responsive}>

    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={"Trailer do filme"}
    />

  </div>

);

YoutubeEmbed.propTypes = {

  embedId: PropTypes.string.isRequired

};

export default YoutubeEmbed;
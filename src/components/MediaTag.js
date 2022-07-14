import styles from "../styles/components/MediaTag.module.css";

const MediaTag = ({ type }) => {

    return (

        <p className={styles.tag}>
            {type === "movie" && "filmes"}
            {type === "tv" && "series"}
        </p>

    );

};

export default MediaTag;
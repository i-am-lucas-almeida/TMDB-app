import styles from "../styles/components/ContainerMedia.module.css";

const ContainerMedia = ({ children }) => {

    return (

        <div className={styles.container__media}>

            {children}

        </div>

    );

};

export default ContainerMedia;
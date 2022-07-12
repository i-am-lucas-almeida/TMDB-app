import styles from "../styles/components/ErrorMessage.module.css";

const ErrorMessage = () => {

    return (

        <>

            <p className={styles.error_message}>Houve algum erro! <br /> Por favor, recarregue a página ou volte para a home.</p>

        </>

    );

};

export default ErrorMessage;
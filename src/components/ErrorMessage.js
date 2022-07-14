import styles from "../styles/components/ErrorMessage.module.css";

const ErrorMessage = () => {

    return (

        <div className={styles.error_message}>
            <p>
                Houve algum erro!
            </p>
            <br />
            <p>
                Por favor, recarregue a página ou volte para a home.
            </p>
        </div>

    );

};

export default ErrorMessage;
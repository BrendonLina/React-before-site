import styles from './Frase.module.css';

function Frase(props){
    return(
        <div className={styles.FraseContainer}>
            <p className={styles.FraseContent}>Retornando um componente s2 {props.nome}</p>
        </div>
    )
}

export default Frase
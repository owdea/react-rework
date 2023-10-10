import styles from "../../../styles/Calculator.module.css"

const ResetButton = (props) => {
    return (
        <button className={styles.resetButton} id={props.id} onClick={props.onClick} disabled={props.disabled}>
            Reset
        </button>
    )
}

export default ResetButton
//button na zvolení možnosti procent dýška
import styles from "../../../styles/Calculator.module.css"

interface ButtonProps {
    class?: string,
    id?: string,
    onClick?: () => void,
    text: string,
    disabled: boolean
}

const PercentButton = (props: ButtonProps) => {
    return (
        <button className={styles.button} id={props.id} onClick={props.onClick} disabled={props.disabled}>
            {props.text}
        </button>
    )
}

export default PercentButton;
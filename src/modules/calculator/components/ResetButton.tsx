import styles from "../../../styles/Calculator.module.css"

interface ResetButtonProps {
    class?: string,
    id?: string,
    onClick?: () => void,
    disabled: boolean
}

const ResetButton = (props: ResetButtonProps) => {
    return (
        <button className={styles.resetButton} id={props.id} onClick={props.onClick} disabled={props.disabled}>
            Reset
        </button>
    )
}

export default ResetButton
import styles from "../../../styles/Calculator.module.css"

interface CalculatorInputProps {
    name?: string,
    value: number | string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const CustomPercentInput = (props:CalculatorInputProps) => {
    return (
        <input
            className={styles.customInput}
            type="number"
            name="custom percent input"
            placeholder="Custom"
            value={props.value}
            onChange={props.onChange}
        >

        </input>
    )
}

export default CustomPercentInput;
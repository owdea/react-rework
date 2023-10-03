import styles from "../../../styles/Calculator.module.css"

interface CalculatorInputProps {
    name?: string,
    placeholder: string,
    value: number | string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const CalculatorInput = (props: CalculatorInputProps) => {
    return (
    <input
        className={styles.calculatorInput}
        type="number"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
    >
    
    </input>
    )
}

export default CalculatorInput;
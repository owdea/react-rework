import "../../../styles/Calculator.css"

interface CalculatorInputProps {
    name?: string,
    placeholder: string,
    value: number | string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const CalculatorInput = (props: CalculatorInputProps) => {
    return (
    <input
        className="input"
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
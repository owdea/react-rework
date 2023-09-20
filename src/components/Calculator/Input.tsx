interface InputProps {
    class: string,
    type: string,
    name?: string,
    placeholder: string,
    value: number | string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

function Input(props: InputProps) {
    return (
        <input 
            className={props.class} 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            >
            </input>
    )
}

export default Input;
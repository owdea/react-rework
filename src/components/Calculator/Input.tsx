function Input(props) {
    return (
        <input 
            className={props.class} 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
            >
            </input>
    )
}

export default Input;
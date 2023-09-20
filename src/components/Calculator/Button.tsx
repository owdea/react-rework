import "../../styles/Calculator.css";

interface ButtonProps {
    class?: string,
    id?: string,
    onClick?: () => void,
    text: string,
    disabled: boolean
}

function Button (props: ButtonProps) {
    
    return (
        <button className={props.class} id={props.id} onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
    )
}

export default Button
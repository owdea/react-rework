import "../../styles/Calculator.css";

interface ButtonProps {
    class?: string,
    id?: string,
    onClick?: () => void,
    text: string
}

function Button (props: ButtonProps) {
    
    return (
        <button className={props.class} id={props.id} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button
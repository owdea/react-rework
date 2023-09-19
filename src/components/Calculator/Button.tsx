import "../../styles/Calculator.css";


function Button (props) {
    
    return (
        <button className={props.class} id={props.id} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button
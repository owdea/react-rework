//button na zvolení možnosti procent dýška
import "../../../styles/Calculator-backup.css"

interface ButtonProps {
    class?: string,
    id?: string,
    onClick?: () => void,
    text: string,
    disabled: boolean
}

const PercentButton = (props: ButtonProps) => {
    return (
        <button className="button" id={props.id} onClick={props.onClick} disabled={props.disabled}>
            {props.text}
        </button>
    )
}

export default PercentButton;
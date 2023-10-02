import "../../../styles/Calculator-backup.css"

const ResetButton = (props) => {
    return(
        <button className="reset-button" id={props.id} onClick={props.onClick} disabled={props.disabled}>
            Reset
        </button>
    )
}

export default ResetButton
import CalculatorComponent from "../modules/calculator/CalculatorComponent";

function Calculator() {
    const styles: React.CSSProperties = {
        flexGrow: 1,
        display: "flex"
    }
    return (
        <div style={styles}>
            <CalculatorComponent />
        </div>)
}

export default Calculator;

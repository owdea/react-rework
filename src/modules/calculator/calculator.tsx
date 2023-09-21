import { CalculatorButton } from '../../components/Calculator/Button';
import './calculator.module.css';
import { useCalculatorLogic } from './hooks/useCalculatorLogic';


export const Calculator = () => {
    const {
        percent,
        bill,
        numberOfPeople,
        customInput,
    } = useCalculatorLogic();


    return <div>
    
        <CalculatorButton value={percent} />
    </div>
}


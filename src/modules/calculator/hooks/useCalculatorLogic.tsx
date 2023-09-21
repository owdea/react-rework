import { useState } from "react";

export const  useCalculatorLogic = () => {
    const [percent, setPercent] = useState(0);
    const [bill, setBill] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(0);
    const [customInput, setCustomInput] = useState("Custom");

    const onBillChangeHandler = (event) => {
        //zajištění změny hodnoty bill po inputu
        setBill(event.target.valueAsNumber);
    };

    const onPeopleChangeHandler = (event) => {
        //zajištění změny hodnoty numberOfPeople po inputu
        setNumberOfPeople(event.target.valueAsNumber);
    };


    return {
        percent,
        bill,
        numberOfPeople,
        customInput,
        handlers: {
            onBillChangeHandler,
            onPeopleChangeHandler
        }
    }
}
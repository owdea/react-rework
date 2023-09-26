import { useState } from "react";
const useCalculatorLogic = () => {
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

    let tipPerPerson;
    let totalPerPerson;
    if (customInput === "Custom") {
        //Pokud nebyl použit custom input
        tipPerPerson = Number(((bill / numberOfPeople) * percent).toFixed(2)); //výpočet samotného dýška na osobu
        totalPerPerson = Number((bill / numberOfPeople + tipPerPerson).toFixed(2)); //výpočet platby jednoho člověka (včetně dýška)
    } else {
        //pokud byl použit custom input
        tipPerPerson = Number(
            ((bill / numberOfPeople) * parseInt(customInput) * 0.01).toFixed(2)
        );
        totalPerPerson = Number((bill / numberOfPeople + tipPerPerson).toFixed(2));
    }

    if (Number.isNaN(tipPerPerson) || numberOfPeople === 0) {
        tipPerPerson = 0;
    }
    if (Number.isNaN(totalPerPerson) || numberOfPeople === 0) {
        totalPerPerson = 0;
    }

    if (Number.isNaN(customInput)) {
        setCustomInput("Custom");
    }

    const resetValues = () => {
        //funkce pro reset button
        setPercent(0);
        setBill(0);
        setNumberOfPeople(0);
        setCustomInput("Custom");
    };

    const customTipChangeHandler = (event) => {
        setCustomInput(event.target.valueAsNumber);
    };

    const disableResetButton = () => {
        return !bill && !percent && !numberOfPeople && !customInput
    }

    const buttonsData = [
        { text: "5%", handler: () => setPercent(0.05) },
        { text: "10%", handler: () => setPercent(0.1) },
        { text: "15%", handler: () => setPercent(0.15) },
        { text: "25%", handler: () => setPercent(0.25) },
        { text: "50%", handler: () => setPercent(0.5) },
    ];
    return {
        percent,
        setPercent,
        bill,
        setBill,
        numberOfPeople,
        setNumberOfPeople,
        customInput,
        setCustomInput,
        onBillChangeHandler,
        onPeopleChangeHandler,
        resetValues,
        customTipChangeHandler,
        buttonsData,
        totalPerPerson,
        tipPerPerson,
        disableResetButton
    };
}

export default useCalculatorLogic;
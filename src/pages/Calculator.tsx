import "../styles/Calculator.css";
import Dollar from "../assets/Calculator/icon-dollar.svg";
import People from "../assets/Calculator/icon-person.svg";

import Button from "../components/Calculator/Button";
import Input from "../components/Calculator/Input";
import { useState } from "react";

function Calculator() {
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

    const buttonsData = [
        { text: "5%", handler: () => setPercent(0.05) },
        { text: "10%", handler: () => setPercent(0.1) },
        { text: "15%", handler: () => setPercent(0.15) },
        { text: "25%", handler: () => setPercent(0.25) },
        { text: "50%", handler: () => setPercent(0.5) },
    ];

    const buttons = buttonsData.map((button, index) => (
        <Button key={index} text={button.text} class="button" onClick={button.handler} disabled={false} />
      ));
      

    return (
        <body>
            <h2>
                spli<span>tter</span>
            </h2>

            <main>
                <div id="main-left">
                    <div id="main-left-top">
                        <label htmlFor="bill">Bill</label>
                        <div id="bill">
                            <img src={Dollar} alt="icon dollar" />
                            <Input
                                class="input"
                                type="number"
                                name="bill"
                                placeholder="0"
                                value={bill}
                                onChange={onBillChangeHandler}
                            />
                        </div>
                    </div>

                    <div id="main-left-middle">
                        <p>Select Tip %</p>
                        <div className="percentage-choice">
                            <Button
                                text="5%"
                                class="button"
                                onClick={() => setPercent(0.05)}
                                disabled={false}
                            ></Button>
                            <Button
                                text="10%"
                                class="button"
                                onClick={() => setPercent(0.1)}
                                disabled={false}
                            ></Button>
                            <Button
                                text="15%"
                                class="button"
                                onClick={() => setPercent(0.15)}
                                disabled={false}
                            ></Button>
                            <Button
                                text="25%"
                                class="button"
                                onClick={() => setPercent(0.25)}
                                disabled={false}
                            ></Button>
                            <Button
                                text="50%"
                                class="button"
                                onClick={() => setPercent(0.5)}
                                disabled={false}
                            ></Button>
                            <Input
                                value={customInput}
                                class="input custom"
                                type="number"
                                placeholder="Custom"
                                onChange={customTipChangeHandler}
                            />
                        </div>
                    </div>
                    <div id="main-left-bottom">
                        <div id="people-information">
                            <p>Number of People</p>
                            <p className="if-zero-number"></p>
                        </div>
                        <div id="number-people">
                            <img src={People} alt="icon person" />
                            <Input
                                class="input"
                                type="number"
                                name=""
                                placeholder="0"
                                value={numberOfPeople}
                                onChange={onPeopleChangeHandler}
                            />
                        </div>
                    </div>
                </div>

                <div id="main-right">
                    <div id="main-right-top">
                        <div>
                            <p className="tip-person">Tip Amount</p>
                            <p className="person">/ person</p>
                        </div>
                        <div className="tip-total">
                            <div className="dollar"></div>
                            <span>$</span>
                            <span id="result-tip">{tipPerPerson}</span>
                        </div>
                    </div>
                    <div id="main-right-middle">
                        <div>
                            <p className="tip-person">Total</p>
                            <p className="person">/ person</p>
                        </div>
                        <div className="tip-total">
                            <div className="dollar"></div>
                            <span>$</span>
                            <span id="result-total">{totalPerPerson}</span>
                        </div>
                    </div>
                    <Button
                        id="button-reset"
                        text="Reset"
                        disabled={false}
                        onClick={resetValues}
                    />
                </div>
            </main>
        </body>
    );
}

export default Calculator;

import "../styles/Calculator.css";
import Dollar from "../assets/Calculator/icon-dollar.svg"
import People from "../assets/Calculator/icon-person.svg"

import Button from "../components/Calculator/Button";
import Input from "../components/Calculator/Input";
import { useState } from "react";


function Calculator() {
const [percent, setPercent] = useState(0);
const [bill, setBill] = useState(22);
const [numberOfPeople, setNumberOfPeople] = useState(22);

const onBillChangeHandler = event => {
    setBill(event.target.value)
    console.log(bill)
}

const onPeopleChangeHandler = event => {
    setNumberOfPeople(event.target.value)
    console.log(numberOfPeople)
}

let tip: number = numberOfPeople + bill

console.log(percent)

    return (
    <body>
    <h2>spli<span>tter</span></h2>
    <h2>{percent}</h2>
    <h2>{bill}</h2>
    <h2>{numberOfPeople}</h2>
    <h2>{tip}</h2>

    <main>

      <div id="main-left">
        <div id="main-left-top">
          <label htmlFor="bill">Bill</label>
          <div id="bill">
            <img src={Dollar} alt="icon dollar"/>
            <Input 
                className="input"
                type="number" 
                name="bill" 
                placeholder="0" 
                onChange={onBillChangeHandler}
                />
            
          </div>         
        </div>
        
        <div id="main-left-middle">
            <p>Select Tip %</p>
            <div className="percentage-choice">
                <Button text="5%" class="button" onClick={() => setPercent(5)}></Button>
                <Button text="10%" class="button" onClick={() => setPercent(10)}></Button>
                <Button text="15%" class="button" onClick={() => setPercent(15)}></Button>
                <Button text="25%" class="button" onClick={() => setPercent(25)}></Button>
                <Button text="50%" class="button" onClick={() => setPercent(50)}></Button>
              <Input className="input custom" type="number" placeholder="Custom"/>
            </div>
        </div>
        <div id="main-left-bottom">
          <div id="people-information">
            <p>Number of People</p>
            <p className="if-zero-number"></p>
          </div>
          <div id="number-people">
            <img src={People} alt="icon person"/>
            <Input className="input" type="number" name="" placeholder="0" onChange={(onPeopleChangeHandler)}/>
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
           <span>$</span><span id="result-tip">0.00</span>
          </div>
        </div>
        <div id="main-right-middle">
          <div>
            <p className="tip-person">Total</p>
            <p className="person">/ person</p>
          </div>
          <div className="tip-total">
            <div className="dollar"></div>
            <span>$</span><span id="result-total">0.00</span>
          </div>
        </div>
        <button id="button-reset" disabled>Reset</button>
        <Button id="button-reset" text="Reset" state="disabled"/>
      </div>
    </main>

    </body> 
    );
}

export default Calculator;
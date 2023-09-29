import PercentButton from "./components/PercentButton.tsx";
import ResetButton from "./components/ResetButton.tsx";
import CalculatorInput from "./components/CalculatorInput.tsx";
import CustomPercentInput from "./components/CustomPercentInput.tsx";
import useCalculatorLogic from "./hooks/useCalculatorLogic.tsx";
import Dollar from "../../assets/Calculator/icon-dollar.svg";
import People from "../../assets/Calculator/icon-person.svg";
import styles from "../../styles/Calculator.module.css";

const Calculator2 = () => {
  const {
    bill,
    onBillChangeHandler,
    customInput,
    customTipChangeHandler,
    numberOfPeople,
    onPeopleChangeHandler,
    tipPerPerson,
    totalPerPerson,
    resetValues,
    buttonsData,
    disableResetButton,
  } = useCalculatorLogic();

  const buttons = buttonsData.map((button, index) => (
    <PercentButton
      key={index}
      text={button.text}
      onClick={button.handler}
      disabled={false}
    />
  ));

  return (
    <body>
      <h2>
        spli<span>tter</span>
      </h2>

      <main>
        <div id="main-left" className={styles["main-left"]}>
          <div id="main-left-top" className={styles["main-left-top"]}>
            <label htmlFor="bill">Bill</label>
            <div id="bill" className={styles["bill"]}>
              <img src={Dollar} alt="icon dollar" />
              <CalculatorInput
                name="bill"
                placeholder="0"
                value={bill}
                onChange={onBillChangeHandler}
              />
            </div>
          </div>

          <div id="main-left-middle" className={styles["main-left-middle"]}>
            <p>Select Tip %</p>
            <div className={styles["percentage-choice"]}>
              {buttons}
              <CustomPercentInput
                value={customInput}
                onChange={customTipChangeHandler}
              />
            </div>
          </div>
          <div id="main-left-bottom" className={styles["main-left-bottom"]}>
            <div id="people-information" className={styles["people-information"]}>
              <p>Number of People</p>
              <p className={styles["if-zero-number"]}></p>
            </div>
            <div id="number-people" className={styles["number-people"]}>
              <img src={People} alt="icon person" />
              <CalculatorInput
                placeholder="0"
                value={numberOfPeople}
                onChange={onPeopleChangeHandler}
              />
            </div>
          </div>
        </div>

        <div id="main-right" className={styles["main-right"]}>
          <div id="main-right-top" className={styles["main-right-top"]}>
            <div>
              <p className={styles["tip-person"]}>Tip Amount</p>
              <p className={styles["person"]}>/ person</p>
            </div>
            <div className={styles["tip-total"]}>
              <div className={styles["dollar"]}></div>
              <span>$</span>
              <span id="result-tip">{tipPerPerson}</span>
            </div>
          </div>
          <div id="main-right-middle" className={styles["main-right-middle"]}>
            <div>
              <p className={styles["tip-person"]}>Total</p>
              <p className={styles["person"]}>/ person</p>
            </div>
            <div className={styles["tip-total"]}>
              <div className={styles["dollar"]}></div>
              <span>$</span>
              <span id="result-total">{totalPerPerson}</span>
            </div>
          </div>
          <ResetButton
            disabled={disableResetButton()}
            onClick={resetValues}
          />
        </div>
      </main>
    </body>
  );
};

export default Calculator2;

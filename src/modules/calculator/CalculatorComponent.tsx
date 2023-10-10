import PercentButton from "./components/PercentButton.tsx";
import ResetButton from "./components/ResetButton.tsx";
import CalculatorInput from "./components/CalculatorInput.tsx";
import CustomPercentInput from "./components/CustomPercentInput.tsx";
import useCalculatorLogic from "./hooks/useCalculatorLogic.tsx";
import Dollar from "../../assets/Calculator/icon-dollar.svg";
import People from "../../assets/Calculator/icon-person.svg";
import styles from "../../styles/Calculator.module.css";

const CalculatorComponent = () => {
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
    disableResetButton,
    buttonsData
  } = useCalculatorLogic();

  const buttons = buttonsData.map((button, index) => (
    <PercentButton
      key={index}
      text={button.text}
      onClick={button.handler}
      disabled={false}
      class={button.isActive ? styles.buttonActive : styles.button}
    />
  ));

  return (
    <div className={styles.body}>
      <h2>
        spli<span>tter</span>
      </h2>

      <main>
        <div id="main-left" className={styles.mainLeft}>
          <div id="main-left-top" className={styles.mainLeftTop}>
            <label htmlFor="bill" className={styles.p}>Bill</label>
            <div id="bill" className={styles.bill}>
              <img src={Dollar} alt="icon dollar" className={styles.billImg} />
              <CalculatorInput
                name="bill"
                placeholder="0"
                value={bill}
                onChange={onBillChangeHandler}
                aria-label=""
              />
            </div>
          </div>

          <div id="main-left-middle" className={styles.mainLeftMiddle}>
            <p className={styles.mainLeftP}>Select Tip %</p>
            <div className={styles.percentageChoice}>
              {buttons}
              <CustomPercentInput
                value={customInput}
                onChange={customTipChangeHandler}
              />
            </div>
          </div>
          <div id="main-left-bottom" className={styles.mainLeftBottom}>
            <div id="people-information" className={styles.mainLeftBottomPeopleInformation}>
              <p>Number of People</p>
            </div>
            <div id="number-people" className={styles.bill}>
              <img src={People} alt="icon person" className={styles.peopleImg} />
              <CalculatorInput
                placeholder="0"
                value={numberOfPeople}
                onChange={onPeopleChangeHandler}
              />
            </div>
          </div>
        </div>

        <div id="main-right" className={styles.mainRight}>
          <div id="main-right-top" className={styles.mainRightTop}>
            <div>
              <p className={styles.tipPerson}>Tip Amount</p>
              <p className={styles.person}>/ person</p>
            </div>
            <div className={styles.tipTotal}>
              <div className={styles.dollar}></div>
              <span>$</span>
              <span id="result-tip">{tipPerPerson}</span>
            </div>
          </div>
          <div id="main-right-middle" className={styles.mainRightMiddle}>
            <div>
              <p className={styles.tipPerson}>Total</p>
              <p className={styles.person}>/ person</p>
            </div>
            <div className={styles.tipTotal}>
              <div className={styles.dollar}></div>
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
    </div>
  );
};

export default CalculatorComponent;

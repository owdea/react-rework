import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
    

type Props = {
    selected?: boolean;
    isCalculator?: boolean;
    isHomePage?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CalculatorButton = ({selected, ...props}: Props) => <button className={`calculator__btn` + (selected ? "calculator__btn--selected" : "")} {...props}>{props.children}</button>


type InputProps = {
    value: number;
    className: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'className'>
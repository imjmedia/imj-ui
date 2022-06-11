/// <reference types="react" />
import "../../../index.css";
import "./index.css";
export interface InputsProps {
    justify?: "left" | "right" | any;
    modo?: string | any;
    placeholder?: string | any;
    color?: "Amarillo" | "Azul" | "Rojo" | "Verde" | "Magenta" | "Gris" | "Aqua" | "Morado" | any;
    type?: "date" | "aumentoDecremento" | any;
}
declare const Inputs: (props: InputsProps) => JSX.Element;
export default Inputs;

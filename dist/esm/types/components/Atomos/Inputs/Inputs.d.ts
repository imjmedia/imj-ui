/// <reference types="react" />
import "../../../index.css";
import "./index.css";
export interface InputsProps {
    justify?: "left" | "right" | any;
    modo?: string | any;
    placeholder?: string | any;
    color?: "Amarillo" | "Azul" | "Rojo" | "Verde" | "Magenta" | "Gris" | "Aqua" | "Morado" | any;
    type?: "date" | "aumentoDecremento" | any;
    clave?: string;
    title?: string;
    description?: string;
    labelColor?: string;
    property?: string;
    state?: boolean;
    size?: string;
    button?: string;
    nseA?: string;
    nseB?: string;
    nseC?: string;
    nseD?: string;
    nseE?: string;
    edad13?: string;
    edad18?: string;
    edad26?: string;
    edad41?: string;
    edad55?: string;
}
declare const Inputs: (props: InputsProps) => JSX.Element;
export default Inputs;

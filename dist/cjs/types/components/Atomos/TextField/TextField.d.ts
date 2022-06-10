/// <reference types="react" />
import "../../../index.css";
import "./index.css";
interface TextFieldProps {
    type: "title" | "description" | "titleAndDescription" | any;
    title?: string | any;
    description?: string | any;
    labelColor?: "Amarillo" | "Azul" | "Rojo" | "Verde" | "Magenta" | "Gris" | "Aqua" | "Morado" | any;
    modo?: "Dark" | any;
}
declare const TextField: (props: TextFieldProps) => JSX.Element;
export default TextField;

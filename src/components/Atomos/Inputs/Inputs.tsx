import React from "react";
import "../../../index.css";
import "./index.css";

const titleCase = (text: any) => {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
};

interface InputsProps {
  justify?: "left" | "right" | any;
  placeholder?: string | any;
  color?:
    | "Amarillo"
    | "Azul"
    | "Rojo"
    | "Verde"
    | "Magenta"
    | "Gris"
    | "Aqua"
    | "Morado"
    | any;
  type?: "date" | "aumentoDecremento" | any;
}
const Inputs = (props: InputsProps) => {
  const justify = props.justify;
  const placeholder = props.placeholder;
  const color = titleCase(props.color);
  const type = props.type;
  const SwitchType = (type: any) => {
    switch (type) {
      case "date":
        return "date";
      case "aumentoDecremento":
        return "number";
      default:
        return "text";
    }
  };
  const SwitchJustify = (type: any) => {
    switch (justify) {
      case "left":
        return (
          <div className={"Inputs InputLeft Borde" + color}>
            <input
              type={SwitchType(type)}
              placeholder={placeholder || "Ingresa"}
            />
          </div>
        );
      case "right":
        return (
          <div className={"Inputs InputRight Borde" + color}>
            <input
              type={SwitchType(type)}
              placeholder={placeholder || "Ingresa"}
            />
          </div>
        );
      default:
        return (
          <div className={"Inputs Borde" + color}>
            <input
              type={SwitchType(type)}
              placeholder={placeholder || "Ingresa"}
            />
          </div>
        );
    }
  };
  if (type === undefined) {
    return <></>;
  } else {
    return SwitchJustify(type);
  }
};
export default Inputs;

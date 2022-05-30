import React from "react";
import { getModo } from "../../../utils/utils";

const Imj = require("../../../img/logos/Imj.svg") as string;
const Obp = require("../../../img/logos/Obp.svg") as string;
const ByImj = require("../../../img/logos/ByImj.svg") as string;
const ByImjDarkMode = require("../../../img/logos/ByImjDarkMode.svg") as string;
const ImjDarkMode = require("../../../img/logos/ImjDarkMode.svg") as string;
const ObpDarkMode = require("../../../img/logos/ObpDarkMode.svg") as string;

interface LogoProps {
  logo: "Imj" | "Obp" | "ByImj";
  modo?: string | any;
}
const Logo = (props: LogoProps) => {
  const logo = props.logo;
  switch (logo) {
    case "Imj":
      if (getModo(props.modo) === "DarkMode") {
        return <img src={ImjDarkMode} alt="" />;
      } else {
        return <img src={Imj} alt="" />;
      }
    case "Obp":
      if (getModo(props.modo) === "DarkMode") {
        return <img src={ObpDarkMode} alt="" />;
      } else {
        return <img src={Obp} alt="" />;
      }
    case "ByImj":
      if (getModo(props.modo) === "DarkMode") {
        return <img src={ByImjDarkMode} alt="" />;
      } else {
        return <img src={ByImj} alt="" />;
      }
    default:
      return <></>;
  }
};

export default Logo;

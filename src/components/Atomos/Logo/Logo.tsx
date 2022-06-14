import React from "react";
import Imj from '../../Img/Logos/Imj.svg';
import ByImj from '../../Img/Logos/ByImj.svg';
import  Obp from "../../Img/Logos/Obp.svg";
import  ByImjDarkMode from "../../Img/Logos/ByImjDarkMode.svg";
import  ImjDarkMode from "../../Img/Logos/ImjDarkMode.svg";
import  ObpDarkMode from "../../Img/Logos/ObpDarkMode.svg";
import { getModo } from "../../../utils/utils";


interface LogoProps{
    logo: 'Imj' | 'Obp' | 'ByImj'
    modo?: string | any
}
const Logo = (props:LogoProps) => {
    const logo = props.logo
    switch (logo) {
        case 'Imj':
            if (getModo(props.modo) === 'DarkMode'){
                return <img src={ImjDarkMode} alt=""/>
            } else {
                return <img src={Imj} alt=""/>
            }
        case 'Obp':
            if (getModo(props.modo) === 'DarkMode'){
                return <img src={ObpDarkMode} alt=""/>
            } else {
                return <img src={Obp} alt=""/>
            }
            case 'ByImj':
            if (getModo(props.modo) === 'DarkMode'){
                return <img src={ByImjDarkMode} alt=""/>
            } else {
                return <img src={ByImj} alt=""/>
            }
        default: return <></>
    }
}

export default Logo;
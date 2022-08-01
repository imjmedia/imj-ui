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
    style?: any;
    modo?: string | any
}
const Logo = (props:LogoProps) => {
    const logo = props.logo
    switch (logo) {
        case 'Imj':
            if (getModo(props.modo) === 'DarkMode'){
                return <img src={ImjDarkMode} alt="" style={props.style}/>
            } else {
                return <img src={Imj} alt="" style={props.style}/>
            }
        case 'Obp':
            if (getModo(props.modo) === 'DarkMode'){
                return <img src={ObpDarkMode} alt="" style={props.style}/>
            } else {
                return <img src={Obp} alt="" style={props.style}/>
            }
            case 'ByImj':
            if (getModo(props.modo) === 'DarkMode'){
                return <img src={ByImjDarkMode} alt="" style={props.style}/>
            } else {
                return <img src={ByImj} alt="" style={props.style}/>
            }
        default: return <></>
    }
}

export default Logo;
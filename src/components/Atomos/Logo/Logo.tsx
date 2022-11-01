import React from "react";
import { getModo } from "../../../utils/utils";
import ByImj from '../../Img/Logos/ByImj.svg';
import ByImjDarkMode from "../../Img/Logos/ByImjDarkMode.svg";
import ByImjSimple from '../../Img/Logos/ByImjSimple.svg';
import ByImjSimpleDark from '../../Img/Logos/ByImjSimpleDark.svg';
import Imj from '../../Img/Logos/Imj.svg';
import ImjDarkMode from "../../Img/Logos/ImjDarkMode.svg";
import Obp from "../../Img/Logos/Obp.svg";
import ObpDarkMode from "../../Img/Logos/ObpDarkMode.svg";


interface LogoProps{
    logo: 'Imj' | 'Obp' | 'ByImj' | 'ByImjSimple'
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
            case 'ByImjSimple':
            if (getModo(props.modo) === 'DarkMode'){
                return <img src={ByImjSimple} alt="" style={props.style}/>
            } else {
                return <img src={ByImjSimpleDark} alt="" style={props.style}/>
            }
        default: return <></>
    }
}

export default Logo;
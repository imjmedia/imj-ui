import React from "react";

const Imj = require("../../Img/Logos/Imj.svg")as string;
const Obp = require("../../Img/Logos/Obp.svg")as string;
const ByImj = require("../../Img/Logos/ByImj.svg")as string;
const ByImjDarkMode = require("../../Img/Logos/ByImjDarkMode.svg")as string;
const ImjDarkMode = require("../../Img/Logos/ImjDarkMode.svg")as string;
const ObpDarkMode = require("../../Img/Logos/ObpDarkMode.svg")as string;

const getModo = (modo:any) => {
    switch (modo) {
        case 'Dark': return('DarkMode')
        default: return ''
    }
}

interface LogoProps{
    logo: 'Imj' | 'Obp' | 'ByImj'
    modo?: string | any
}
export const Logo = (props:LogoProps) => {
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
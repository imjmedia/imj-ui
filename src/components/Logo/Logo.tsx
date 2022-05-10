import React from "react";


const logoIMJ = require("./img/logoIMJ.svg")as string;
const logoOBP = require("./img/logoOBP.svg")as string;
const logoOBPbyIMJ = require("./img/logoOBPbyIMJ.svg")as string;


interface LogoProps{
    logo: 'imj' | 'obp' | 'byimj';
}

const Logo = (props:LogoProps) => {
    const logo = props.logo
    if (logo.toLowerCase() === 'imj'){
        return(
            <img src={logoIMJ} alt=""/>      
        )
    } else if (logo.toLowerCase() === 'obp'){
        return(
            <img src={logoOBP} alt="" />
        )
    } else if (logo.toLowerCase() === 'byimj'){
        return(
            <img src={logoOBPbyIMJ} alt="" />
        )
    }
}

export default Logo;
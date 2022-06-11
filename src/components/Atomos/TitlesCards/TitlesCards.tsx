import React from "react";
import '../../../index.css'


const getModo = (modo:any) => {
    switch (modo) {
        case 'Dark': return('DarkMode')
        default: return ''
    }
}

interface TitlesCardsProps{
    clave?:string | any;
    type?: string | any;
    modo?: string | any;
}
const TitlesCards = (props:TitlesCardsProps) => {
    const clave = props.clave
    const type = props.type
    return(
        <div>
            <h2 className={"ClaveCards"+getModo(props.modo)}>
                {clave}
            </h2>
            <h3 className={"TipoCards"+getModo(props.modo)}>
                {type}
            </h3>
        </div>
    )
}

export default TitlesCards;
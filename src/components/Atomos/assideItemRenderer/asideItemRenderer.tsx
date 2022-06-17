import React from "react";
import {getModo} from '../../../utils/utils'

interface asideItemRendererProps{
    modo?: 'Dark' | '';
    botones?: any;
    btn?: any;
}

const AsideItemRenderer =(props:asideItemRendererProps)=>{
    const modoCard = getModo(props.modo)
    const boton = [props.botones]

    const botones = boton.map((button)=> (
        <div className="BotonAside">
            {button}
        </div>
    ))
    //En esta parte necesito que cada button que hace el map lo retorne con un <div className="BotonAside"> 'dentro el botón' </div>
    
    return (
        <div className={"AsideCards" + modoCard}>
            <div className="ContenedorBotonesAside">
                {botones}
            </div>
        </div>
    )
}
export default AsideItemRenderer;
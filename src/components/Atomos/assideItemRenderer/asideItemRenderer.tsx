import React from "react";
import {getModo} from '../../../utils/utils'

interface asideItemRendererProps{
    modo?: 'Dark' | '';
    botones?: any;
    btn?: any;
}

const AsideItemRenderer =(props:asideItemRendererProps)=>{
    const modoCard = getModo(props.modo)
    const boton = props.botones

    const botones = boton.map((e:any)=>(<div className="BotonAside">{e}</div>))

    return (
        <div className={"AsideCards" + modoCard}>
            <div className="ContenedorBotonesAside">
                <div className="BotonAside">
                    {botones}
                </div>
            </div>
        </div>
    )
}
export default AsideItemRenderer;
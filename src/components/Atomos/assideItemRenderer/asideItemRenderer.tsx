import React from "react";
import {getModo} from '../../../utils/utils'

interface asideItemRendererProps{
    modo?: 'Dark' | '';
    botones?: any;
    btn?: any;
    CardH?: string;
}

const AsideItemRenderer =(props:asideItemRendererProps)=>{
    const modoCard = getModo(props.modo)
    const boton = props.botones

    const botones = boton.map((e:any)=>(<div className="BotonAside">{e}</div>))

    return (
        <div className={"AsideCards" + modoCard +" CardHeight" + props.CardH}>
            <div className="ContenedorBotonesAside">
                <div className="BotonAside">
                    {botones}
                </div>
            </div>
        </div>
    )
}
export default AsideItemRenderer;
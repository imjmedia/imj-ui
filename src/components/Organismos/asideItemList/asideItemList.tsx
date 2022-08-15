import React from "react";
import '../../../index.css';
import PropertyBtn from "../../Atomos/PropertyBtn";
import '../listCatalogos/listCatalogos.css';

interface AsideItemProps{
    botones: any;
    estadoActivo: boolean;
}
const AsideItem = (props:AsideItemProps) => {
    const boton = props.botones
    const botones = boton.map((e:any,index:any) => (<div key={index}>{e}</div>))
    return (
        <div>
            <div className="Flexbox ButtonsAsideList">
                {botones}
            </div>
            <div style={{maxWidth:'90%', marginTop:'4rem'}}>
                <PropertyBtn
                    property='Activo'
                    color='Verde'
                    state={props.estadoActivo}
                />
            </div>
        </div>
    )
}
export default AsideItem;
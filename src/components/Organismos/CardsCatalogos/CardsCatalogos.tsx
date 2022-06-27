import React, { useState } from "react";
import DynamicButton from "../../Atomos/DynamicButton";
import '../../../index.css';
import { getColorMedio, getModo } from "../../../utils/utils";


interface CardsCatalogosProps {
    botones?: any;
    frontItemRenderer: any,
    backItemRenderer?: any,
    asideItemRenderer?: any;
    modo?: 
        'Dark' |
        '';
    data: any,
    tipoMedio?:
        'urbanos' |
        'espectacular' |
        'muro' |
        'indoors' |
        'undefined';
        handleClose?: () => void;
    CardH?: 
        'S'|
        'M'|
        'L'|
        'XL'|
        'XXL';
    CardW?: 
        'S'|
        'M'|
        'L'|
        'XL'|
        'XXL';
}

export const CardsCatalogos =(props:CardsCatalogosProps) =>{
    const Botones = props.botones
    const Front = props.frontItemRenderer;
    const Back = props.backItemRenderer;
    const modoCard = getModo(props.modo || '');
    const tipoMedio = props.tipoMedio
    const Flip = (lado:string) => {
        if (Front && Back){
        if (lado === 'front'){ 
            return('CardFront') 
        } else { 
            return ('CardBack') 
        }                 
        } else { return ('') }
    }
    const AsideNoAside =()=>{
        if (Botones) {
        return ('CardConAside' + modoCard)
        } else {
        return ('Card' + modoCard)
        }
    }
    return(
        <div className="CardsPaddings">
            <div className="CardAsideFlex">     
                <div className={"ContenedorCards CardHeight" +props.CardH + ' CardW'+props.CardW}>
                {Front && <div className={Flip('front') + " "+AsideNoAside()}>
                    <Front
                        data={props.data}
                    />
                </div>}
                {Back && <div className={Flip('back') + " "+AsideNoAside()}>
                    <Back
                        data={props.data} 
                    />
                </div>}
                <div className="EtiquetaIdentificacion">
                    <DynamicButton
                        type='icons'
                        size='grande'
                        button='etiqueta'
                        color={getColorMedio(tipoMedio)}
                    />
                </div>
                </div>
                {Botones && <Botones data={props.data}/>}
            </div>
        </div>
        )
    }



export default CardsCatalogos;

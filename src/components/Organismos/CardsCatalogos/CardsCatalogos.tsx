import React, { useState } from "react";
import DynamicButton from "../../Atomos/DynamicButton";
import '../../../index.css';
import { getColorMedio, getModo } from "../../../utils/utils";


interface CardsCatalogosProps {
    frontItemRenderer: any,
    backItemRenderer?: any,
    asideItemRenderer?: any;
    modo?: string | any,
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
    const Botones = props.asideItemRenderer
    const Front = props.frontItemRenderer;
    const Back = props.backItemRenderer;
    const modoCard = getModo(props.modo || '');
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
            return 'CardConAside'
        } else {
            return 'Card'
        }
    }
    return(
        <div className="CardsPaddings">
            <div className="CardAsideFlex">     
                <div className={"ContenedorCards CardHeight" +props.CardH + ' CardW'+props.CardW}>
                    {Front && <div className={Flip('front') + " "+AsideNoAside() + modoCard}>
                        <Front
                            data={props.data}
                        />
                    </div>}
                    {Back && <div className={Flip('back') + " "+AsideNoAside() + modoCard}>
                        <Back
                            data={props.data} 
                        />
                    </div>}
                    <div className="EtiquetaIdentificacion">
                        <DynamicButton
                            type='icons'
                            size='grande'
                            button='etiqueta'
                            color={getColorMedio(props.tipoMedio)}
                        />
                    </div>
                </div>
                <Botones
                    data={props.data}
                />
            </div>
        </div>
    )
}



export default CardsCatalogos;

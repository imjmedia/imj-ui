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
    handleClose?: () => void;
}
const CardsCatalogos = (props: CardsCatalogosProps) => {
    const Botones = props.asideItemRenderer;
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

    return (
        <div className="CardsPaddings">
            <div className="CardAsideFlex">
                <div className="ContenedorCards">
                    <div className={Flip('front') + " Card" + modoCard}>
                        <Front data={props.data}/>
                    </div>
                    {Back && <div className={Flip('back') + " Card" + modoCard}>
                        <Back data={props.data}/>
                    </div>}
                    <div className="EtiquetaIdentificacion">
                        <DynamicButton
                            type='icons'
                            size='grande'
                            button='etiqueta'
                            color={getColorMedio("Gris")}
                        />
                    </div>
                </div>
                {Botones}
            </div>
        </div>
    )
}
/* 
Creo que esto sería lo que va en el archivo externo que retorna el asideItemRenderer:

interface asideItemRendererProps{
    modo?: 'Dark' | '';
}

export const asideItemRenderer =(props:asideItemRendererProps)=>{
    const modoCard = getModo(props.modo || '')
    const Btn ={
        btn1: (
                <BtnFunction
                    button="vaciar"
                    color="Rojo"
                    onClick={()=>{}}
                />
        )
    }
    if (Btn !== null){
        return(
            <div className={"AsideCards" + modoCard}>
                <div className="BotonAside">
                    {Btn.btn1}
                </div>
            </div>
         )
    } else {
        return <></>
    }
}
*/

export default CardsCatalogos;

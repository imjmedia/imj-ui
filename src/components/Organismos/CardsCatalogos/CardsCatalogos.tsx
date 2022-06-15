import React from "react";
import DynamicButton from "../../Atomos/DynamicButton";
import '../../../index.css';
import { getColorMedio, getModo } from "../../../utils/utils";


interface CardsCatalogosProps {
    frontItemRenderer: any,
    backItemRenderer?: any,
    modo?: string | any,
    data: any,
    handleClose?: () => void;
}
const CardsCatalogos = (props: CardsCatalogosProps) => {
    const Front = props.frontItemRenderer;
    const Back = props.backItemRenderer;
    const modoCard = getModo(props.modo || '');
    const FlipNoFlip = (lado:string) => {
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
                    <div className={FlipNoFlip('front') + " Card" + modoCard}>
                        <Front data={props.data}/>
                    </div>
                    {Back && <div className={FlipNoFlip('back') + " Card" + modoCard}>
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
            </div>
        </div>
    )
}

export default CardsCatalogos;

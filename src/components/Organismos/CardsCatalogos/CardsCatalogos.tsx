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

    return (
        <div className="CardsPaddings">
            <div className="CardAsideFlex">
                <div className="ContenedorCards">
                    <div className={"CardFront Card" + modoCard}>
                        <Front data={props.data}/>
                    </div>
                    {Back && <div className={"CardBack Card" + modoCard}>
                        <Back data={props.data}/>
                    </div>}
                    <div className="EtiquetaIdentificacion">
                        <DynamicButton
                            type='icons'
                            size='grande'
                            button='etiqueta'
                            color={getColorMedio("Rojo")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardsCatalogos;

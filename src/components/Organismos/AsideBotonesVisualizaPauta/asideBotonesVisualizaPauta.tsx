import React from "react";
import DynamicButton from '../../Atomos/DynamicButton';



interface AsideBotonesVisualizaPautaProps{
    onClickDescargar?: () => void;
    onClickKml?: () => void;
    onClickExcel?: () => void;
    onClickPdf?: () => void;
    onClickVaciar?: () => void;
    onClickGuardar?: () => void;
}
const AsideBotonesVisualizaPauta =(props:AsideBotonesVisualizaPautaProps)=>{
    return(
        <div className="AsideBotonesVisualiza">
            <div onClick={props.onClickDescargar}>
                <DynamicButton
                    type='buttons'
                    button='descargar'
                    size='grande'
                    color = 'Amarillo'
                />
            </div>
            <div onClick={props.onClickKml}>
                <DynamicButton
                    type='buttons'
                    button='kml'
                    size='grande'
                    color = 'Azul'
                />
            </div>
            <div onClick={props.onClickExcel}>
                <DynamicButton
                    type='buttons'
                    button='excel'
                    size='grande'
                    color = 'Verde'
                />
            </div>
            <div onClick={props.onClickPdf}>
                <DynamicButton
                    type='buttons'
                    button='pdf'
                    size='grande'
                    color = 'Rojo'
                />
            </div>
            <div onClick={props.onClickVaciar}>
                <DynamicButton
                    type='buttons'
                    button='vaciar'
                    size='grande'
                    color = 'Rojo'
                />
            </div>
            <div onClick={props.onClickGuardar}>
                <DynamicButton
                    type='buttons'
                    button='guardar'
                    size='grande'
                    color = 'Azul'
                />
            </div>
        </div>
    )
}
export default AsideBotonesVisualizaPauta;
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
                    color = 'amarillo'
                />
            </div>
            <div onClick={props.onClickKml}>
                <DynamicButton
                    type='buttons'
                    button='kml'
                    size='grande'
                    color = 'azul'
                />
            </div>
            <div onClick={props.onClickExcel}>
                <DynamicButton
                    type='buttons'
                    button='excel'
                    size='grande'
                    color = 'verde'
                />
            </div>
            <div onClick={props.onClickPdf}>
                <DynamicButton
                    type='buttons'
                    button='pdf'
                    size='grande'
                    color = 'rojo'
                />
            </div>
            <div onClick={props.onClickVaciar}>
                <DynamicButton
                    type='buttons'
                    button='vaciar'
                    size='grande'
                    color = 'rojo'
                />
            </div>
            <div onClick={props.onClickGuardar}>
                <DynamicButton
                    type='buttons'
                    button='guardar'
                    size='grande'
                    color = 'azul'
                />
            </div>
        </div>
    )
}
export default AsideBotonesVisualizaPauta;
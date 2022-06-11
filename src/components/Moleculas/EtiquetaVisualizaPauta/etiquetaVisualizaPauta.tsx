import React from "react";

interface EtiquetaVisualizaPautaProps{
    nombreEtiqueta?: string;
}
const EtiquetaVisualizaPauta =(props:EtiquetaVisualizaPautaProps)=>{
    return(
        <div className="EtiquetaVisualizaPauta">
            <h2>{props.nombreEtiqueta}</h2>
        </div>
    )
}
export default EtiquetaVisualizaPauta;
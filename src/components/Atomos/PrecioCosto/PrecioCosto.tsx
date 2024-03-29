import React from "react";
import '../../../index.css';
import { getColorMedio } from "../../../utils/utils";

interface PrecioCostoProps{
    type?: 'precio' | 'costo' | 'precioCosto';
    tipoMedio?: string | any;
    precio?: number | any;
    costo?: number | any;
}
const PrecioCosto = (props:PrecioCostoProps) => {
    switch (props.type) {
        case 'precio':
            return(
                <div className={"PrecioCards AlignLeft FontColor"+getColorMedio(props.tipoMedio)}>
                    <p>Precio:</p>
                    <h2>
                        {props.precio}
                    </h2>             
                </div>
            )
        case 'costo':
            return(
                <div className={"CostoCards AlignRight FontColor"+getColorMedio(props.tipoMedio)}>
                    <p>Costo:</p>
                    <h2>
                        {props.costo}
                    </h2>
                </div>
            )
        case 'precioCosto':
            return(
                <div className={"Columnas2 FontColor"+getColorMedio(props.tipoMedio)}>
                    <div className="CostoCards">
                        <p>Costo:</p>
                        <h2>
                            {props.costo}
                        </h2>
                    </div>
                    <div className="PrecioCards">
                        <p>Precio:</p>
                        <h2>
                            {props.precio}
                        </h2>             
                </div>
            </div>
            )
        default :
                return(<div></div>)
    }
}
export default PrecioCosto;
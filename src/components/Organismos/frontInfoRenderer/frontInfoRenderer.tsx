import React from "react";
import '../../../index.css';
import TextField from "../../Atomos/TextField";
import '../listCatalogos/listCatalogos.css';

interface FrontInfoSitioRendererProps{
    ubicacion:string;
    vista: 
    'Natural' |
    'Cruzada';
    ancho: number;
    alto: number;
    implementaciones:string;
    onClick: ()=>void;
}
const FrontInfoSitioRenderer = (props:FrontInfoSitioRendererProps) => {
    return (
        <div>
            <TextField
                title='Ubicación: '
                description={props.ubicacion}
            />
            <TextField
                title='Vista: '
                description={props.vista}
            />
            <TextField
                title='Medida: '
                description={(props.ancho)+'m x '+(props.alto)+'m'}
            />
            <TextField
                title='Implementaciones especiales: '
                description={props.implementaciones}
            />
            <div className="ButtonBorderBlack">
                <p onClick={props.onClick}>
                    Leer más...
                </p>
            </div>
        </div>
    )
}

export default FrontInfoSitioRenderer;
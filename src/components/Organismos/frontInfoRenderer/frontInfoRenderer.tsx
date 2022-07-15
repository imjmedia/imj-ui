import React from "react";
import TextField from "../../Atomos/TextField";
import '../../../index.css'
import '../listCatalogos/listCatalogos.css'

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
                type='titleAndDescription'
                title='Ubicación: '
                description={props.ubicacion}
            />
            <TextField
                type='titleAndDescription'
                title='Vista: '
                description={props.vista}
            />
            <TextField
                type='titleAndDescription'
                title='Medida: '
                description={(props.ancho)+'m x '+(props.alto)+'m'}
            />
            <TextField
                type='titleAndDescription'
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
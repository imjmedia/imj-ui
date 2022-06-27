import React from "react";
import TitlesCards from "../../Atomos/TitlesCards";
import TextField from "../../Atomos/TextField";
import PropertyBtn from "../../Atomos/PropertyBtn";
import { getColorMedio, getModo } from "../../../utils/utils";
import '../../../index.css'

interface FrontItemRendererAbcSitiosProps{
    tipoMedio?: 
        'espectacular' |
        'muro' |
        'urbanos' |
        'indoors';
    modo?:
        'Dark' |
        '';
    clave?: string;
    tipo?: string;
    direccion?: string;
    ubicacion?: string;
    vista?:
        'Natural' |
        'Cruzada';
    ancho?: number;
    alto?: number;
    implementaciones?:
        'Si' |
        'No';
    estadoActivo?: boolean;
}

const FrontItemRendererAbcSitios =(props:FrontItemRendererAbcSitiosProps)=>{
    return(
        <div>
            <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                <TitlesCards
                    modo={props.modo}
                    clave = {props.clave || 'undefined'}
                    type = {props.tipo || 'undefned'}
                />
            </div>
            <div className="InformacionCard">
                <div className="DireccionCards">
                    <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Dirección: '
                        description = {props.direccion || 'undefined'}
                    />
                </div>
                <div className="Columnas2 RowPadding1">
                    <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Ubicación: '
                        description = {props.ubicacion || 'undefined'}                       
                    />
                    <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Vista: '
                        description = {props.vista || 'undefined'}
                    />
                </div>
                <div className="Flexbox MedidasCards">
                    <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Medidas: '
                        description = {(props.ancho || '0')+ 'm x '+ (props.alto || '0')+'m'}
                        labelColor ={getColorMedio(props.tipoMedio)}
                    />  
                </div>
                <div className="RowPadding1">
                    <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Implementaciones especiales: '
                        description = {props.implementaciones || '?'}
                        labelColor ={getColorMedio(props.tipoMedio)}
                    />
                </div>
                <div className="PropiedadCardsPosition1">
                    <PropertyBtn
                        property = 'Activo'
                        color = 'verde'
                        state = {props.estadoActivo || false}
                    />
                </div>
            </div>

        </div>
    )
}

export default FrontItemRendererAbcSitios;
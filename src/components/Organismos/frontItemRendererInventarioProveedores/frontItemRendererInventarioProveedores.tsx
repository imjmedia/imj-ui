import React from "react";
import { getColorMedio, getModo } from "../../../utils/utils";
import PropertyBtn from "../../Atomos/PropertyBtn";
import TextField from "../../Atomos/TextField";
import TitlesCards from "../../Atomos/TitlesCards";

interface FrontItemRendererInventarioProveedoresProps{
    modo?:
        'Dark' |
        'Claro';
    tipoMedio?:
        'espectacular' |
        'muro' |
        'urbanos' |
        'indoors';
    proveedor?: string;
    claveProveedor?: string;
    direccion?: string;
    ubicacion?: string;
    vista?:
        'Natural' |
        'Cruzada';
    tipo?: string;
    ancho?: number;
    alto?: number;
    implementaciones?:
        'Si' |
        'No';
    estadoActivo?: boolean;
    estadoBloqueado?: boolean;
    estadoIluminacion?: boolean;

}
const FrontItemRendererInventarioProveedores = (props:FrontItemRendererInventarioProveedoresProps) =>{
    return(
        <div>
            <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                <TitlesCards
                    modo={props.modo}
                    clave = {props.proveedor || 'undefined'}
                    type = {props.claveProveedor || 'undefined'}
                />
            </div>
            <div className="InformacionCard">
                <div className="DireccionCards">
                    <TextField 
                        modo={props.modo}
                        title = 'Dirección: '
                        description = {props.direccion ||'undefined'}
                    />
                </div>
                <div className="Columnas2 RowPadding1">
                    <TextField
                        modo={props.modo}
                    title = 'Ubicación: '
                    description = {props.ubicacion || 'undefined'}                       
                    />
                    <TextField
                        modo={props.modo}
                    title = 'Vista: '
                    description = {props.vista || 'undefined'}
                    />
                </div>
                <div className="RowPadding1">
                    <TextField
                        modo={props.modo}
                        title = 'Tipo: '
                        description = {props.tipo || '?'}
                    />
                    </div>
                <div className="Flexbox MedidasCards">
                    <div>
                        <TextField
                            modo={props.modo}
                            title = 'Medidas: '
                            description = {(props.ancho || '0')+ 'm x '+ (props.alto || '0')+'m'}
                            labelColor ={getColorMedio(props.tipoMedio)}
                        />
                    </div>
                </div>
                <div className="RowPadding1">
                <TextField
                    modo={props.modo}
                    title = 'Implementaciones especiales: '
                    description = {props.implementaciones || '?'}
                    labelColor ={getColorMedio(props.tipoMedio)}
                />
                </div>
                <div className="PropiedadCardsPosition3 Columnas3">
                    <PropertyBtn
                    property = 'Activo'
                    color = 'verde'
                    state = {props.estadoActivo || false}
                    />
                    <PropertyBtn
                    property = 'Bloqueado'
                    color = 'rojo'
                    state = {props.estadoBloqueado || false}
                    />
                    <PropertyBtn
                    property = 'Iluminación'
                    color = 'amarillo'
                    state = {props.estadoIluminacion || false}
                    />
                </div>
            </div>

        </div>
    )
}

export default FrontItemRendererInventarioProveedores;
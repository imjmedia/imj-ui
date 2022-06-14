import React from "react";
import TitlesCards from '../../Atomos/TitlesCards';
import TextField from '../../Atomos/TextField';
import PropertyBtn from '../../Atomos/PropertyBtn';
import DynamicButton from '../../Atomos/DynamicButton';

import '../../../index.css';
import { getColorMedio, getModo } from "../../../utils/utils";

interface CardsInventarioProveedoresProps{
    tipoMedio: 'espectacular' | 'muro' | 'urbanos' | 'indoors' | any; 
    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    vista?: string | any;
    ubicacion?: string | any;
    ancho?: number | any; 
    alto?: number | any;
    implementaciones?: 'Si' | 'No' | any;
    estadoActivo?: true | false;
    estadoBloqueado?: true | false;
    estadoIluminacion?: true | false;
    modo?:string | null;
}
const CardsInventarioProveedores = (props:CardsInventarioProveedoresProps) => {
    const Front = (props:CardsInventarioProveedoresProps) => {
        return(
            <div>
                <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                    <TitlesCards
                        modo={props.modo}
                        clave = {props.clave || 'undefined'}
                        type = {props.tipo || 'undefined'}
                    />
                </div>
                <div className="InformacionCard">
                    <div className="DireccionCards">
                        <TextField 
                            modo={props.modo}
                            type = 'titleAndDescription'
                            title = 'Dirección: '
                            description = {props.direccion ||'undefined'}
                        />
                    </div>
                    <div className="Columnas2 RowPadding1">
                        <TextField
                            modo={props.modo}
                        type='titleAndDescription'
                        title = 'Ubicación: '
                        description = {props.ubicacion || 'undefined'}                       
                        />
                        <TextField
                            modo={props.modo}
                        type='titleAndDescription'
                        title = 'Vista: '
                        description = {props.vista || 'undefined'}
                        />
                    </div>
                    <div className="Flexbox MedidasCards">
                        <div>
                            <TextField
                                modo={props.modo}
                                type='titleAndDescription'
                                title = 'Medidas: '
                                description = {(props.ancho || '0')+ 'm x '+ (props.alto || '0')+'m'}
                                labelColor ={getColorMedio(props.tipoMedio)}
                            />
                        </div>
    
                    </div>
                    <div className="RowPadding1">
                    <TextField
                        modo={props.modo}
                    type='titleAndDescription'
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
    return(
        <div className="CardsPaddings">
        <div className="CardAsideFlex">
            <div className="ContenedorCards">
                <div className={"CardInventarioProveedores"+getModo(props.modo)}>
                    <Front
                    modo={props.modo}
                    tipoMedio ={props.tipoMedio}
                    clave = {props.clave}
                    tipo = {props.tipo}
                    direccion = {props.direccion}
                    ubicacion = {props.ubicacion}
                    vista= {props.vista}
                    estadoActivo = {props.estadoActivo}
                    estadoBloqueado = {props.estadoBloqueado}
                    estadoIluminacion = {props.estadoIluminacion}
                    implementaciones={props.implementaciones}
                    alto = {props.alto}
                    ancho = {props.ancho}
                    />
                </div>
                <div className="EtiquetaIdentificacion">
                <DynamicButton
                    type = 'icons'
                    size = 'grande'
                    button= 'etiqueta'
                    color = {getColorMedio(props.tipoMedio)}
                />
                </div>
            </div>
        </div>
        </div>
    )
}

export default CardsInventarioProveedores;
import React from "react";
import '../../../index.css';
import { getColorMedio, getModo } from "../../../utils/utils";
import Inputs from "../../Atomos/Inputs";
import PrecioCosto from "../../Atomos/PrecioCosto";
import TextField from "../../Atomos/TextField";
import TitlesCards from "../../Atomos/TitlesCards";

interface FrontItemRendererVisualizaPautaProps{
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
    ancho?: number;
    alto?: number;
    precio?: number;
    descripcion?: string;
}
const FrontItemRendererVisualizaPauta = (props:FrontItemRendererVisualizaPautaProps)=> {
    if (props.tipoMedio === 'espectacular' || props.tipoMedio === 'muro'){
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
                        title = 'Dirección: '
                        description = {props.direccion || 'undefined'}
                    />
                </div>{/* DireccionCards */}
                <div className="Flexbox MedidasCards RowPadding1">
                    <div>
                        <TextField
                            modo={props.modo}
                        title = 'Medidas: '
                        description = {(props.ancho || 0)+ 'm x '+ (props.alto || 0)+'m'}
                        labelColor ={getColorMedio(props.tipoMedio)}
                        />
                    </div>
                </div>{/* Flexbox MedidasCards */}
                <div className="InicioFinCards ">
                    <div className="CampoFechaInicioFin">
                        <TextField
                            modo={props.modo}
                            title = 'Fecha de inicio'
                        />
                        <Inputs
                            type = 'date'
                            justify = 'left'
                            color = {getColorMedio(props.tipoMedio)}
                        />
                    </div>
                    <div className="CampoFechaInicioFin">
                        <TextField
                            modo={props.modo}
                            title = 'Fecha de fin'
                        />
                        <Inputs
                            type = 'date'
                            justify = 'right'
                            color = {getColorMedio(props.tipoMedio)}
                        />
                    </div>
                </div>{/* InicioFinCards Columnas2 */}
                <div className="DescuentoCards Columnas2">
                    <div className="CampoFechaInicioFin">
                        <TextField
                            modo={props.modo} 
                            title='Descuento'  
                        />
                        <Inputs
                            type = 'aumentoDecremento'
                            color = {getColorMedio(props.tipoMedio)}
                        />
                    </div>
                    <div className={'FontColor'+getColorMedio(props.tipoMedio)}>             
                        <PrecioCosto 
                            type= 'precio'
                            tipoMedio = {props.tipoMedio}
                            precio = {props.precio || '0'}
                        />
                    </div>
                </div>
                <div className="RowPadding1">
                </div>
            </div>
            </div>   
        )
    } else {
        return(
            <>
                <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                    <TitlesCards
                        modo={props.modo}
                        clave = {props.clave || 'undefined'}
                        type = {props.tipo || 'undefined'}
                    />
                </div>
                <div className="PaddingBottomMedio"></div>
                <div className="TitleDescriptionCards">
                    <TextField
                        modo={props.modo} 
                        title = 'Descripción: '
                    />
                </div>
                <div className="DescripcionCards TextOverflowDescription">
                    <TextField
                        modo={props.modo} 
                        description = {props.descripcion || 'undefined'}
                    />                    
                </div>
                    <div className="InicioFinCards Columnas2">
                        <div>
                            <TextField
                                modo={props.modo} 
                                description = 'Fecha de inicio'
                            />
                            <Inputs
                                type = 'date'
                                justify = 'left'
                                color = {getColorMedio(props.tipoMedio)}
                            />
                        </div>
                        <div>
                            <TextField
                                modo={props.modo} 
                                description = 'Fecha de fin'
                            />
                            <Inputs
                                type = 'date'
                                justify = 'left'
                                color = {getColorMedio(props.tipoMedio)}
                            />
                        </div>
                    </div>{/* InicioFinCards Columnas2 */}
                    <div className="DescuentoCards Columnas2">
                        <div>
                            <TextField
                                modo={props.modo}
                                description = 'Descuento'
                            />
                            <Inputs
                                type = 'aumentoDecremento'
                                color = {getColorMedio(props.tipoMedio)}
                            />
                        </div>  
                        <div className={'FontColor'+getColorMedio(props.tipoMedio)}>
                            <PrecioCosto
                                type = 'precio'
                                precio = {props.precio || '0'}
                            />
                        </div>
                    </div>
            </>
        )
    }
}

export default FrontItemRendererVisualizaPauta;
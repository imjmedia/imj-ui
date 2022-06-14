import React from "react";
import TextField from "../../Atomos/TextField";
import DynamicButton from "../../Atomos/DynamicButton";
import '../../../index.css';
import { getModo } from "../../../utils/utils";

interface CardsPorcentajesProps{
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeHombres?: number | any;
    numeroHombres?: number | any;
    porcentajeMujeres?: number | any;
    numeroMujeres?: number | any;
    modo?: string | any;
}
export const CardsPorcentajes = (props:CardsPorcentajesProps) => {
    return(
        <div className={"CardsPorcentajes"+getModo(props.modo)}>
            <div className="Contenedor RowPadding1">
                <div className="PaddingBottomMedio">  
                    <TextField
                        modo={props.modo}
                        type = 'title'
                        title = 'Alcance:'
                    />
                </div>
                <div className="PaddingBottomMedio Block">
                    <TextField
                        modo={props.modo} 
                        type = 'description'
                        description = {props.alcance +'%'}
                        labelColor = 'Rojo'
                    />
                </div>    
                <p className="PaddingBottomMedio">Porcentaje de personas alcanzadas dentro del universo poblacional total de la plaza</p>
                

                <div className="PaddingBottomMedio">
                    <TextField
                        modo={props.modo} 
                        type = 'title'
                        title = 'Frecuencia:'
                    />
                </div>
                <div className="PaddingBottomMedio">
                    <TextField
                        modo={props.modo} 
                        type = 'description'
                        description = {props.frecuencia +'%'}
                        labelColor = 'Azul'
                    />
                </div>
                <p className="PaddingBottomMedio">Número promedio de veces que estuvo un grupo de personas en un mismo periodo de tiempo y ubicados dentro del radio del espacio urbano</p>


                <div className="PaddingBottomMedio">
                    <TextField
                        modo={props.modo}
                        type = 'title'
                        title = 'Total de usuario:'
                    />
                </div>
                <div className="PaddingBottomMedio">
                    <TextField
                        modo={props.modo}
                        type = 'description' 
                        description = {props.totalUsuarios}
                        labelColor = 'Morado'
                    />
                </div>
                <p className="PaddingBottomMedio">Es el número de personas que pasaron circulando por un sitio, sin duplicidad.</p>


                <div className="PaddingBottomMedio">
                    <TextField
                        modo={props.modo}
                        type = 'title' 
                        title = 'Total de impactos:'
                    />
                </div>
                <div className="PaddingBottomMedio">
                    <TextField
                        modo={props.modo}
                        type = 'description' 
                        description = {props.totalImpactos}
                        labelColor = 'Verde'
                    />
                </div>  
                <p className="PaddingBottomMedio"> Son los Totales de usuarios multiplicados por la frecuencia.</p>


                <div className="Columnas2 CardPorcentajesHombresMujeres">
                    <div className="PorcentajesHombres">
                        <DynamicButton
                            type='icons'
                            button = 'hombres'
                            color = 'transparent'
                            size = 'grande'
                        />
                        <TextField
                            modo={props.modo}
                            type = 'description'
                            description = {props.porcentajeHombres +'%'}
                            labelColor = 'Azul'
                        />
                        <p> {'Hombres: ' + props.numeroHombres}</p>
                    </div>
                    <div className="PorcentajesMujeres">
                        <DynamicButton
                            type = 'icons'
                            size = 'grande'
                            button = 'mujeres'
                            color = 'transparent'
                        />
                        <TextField
                            modo={props.modo} 
                            type = 'description'
                            description = {props.porcentajeMujeres+'%'}
                            labelColor = 'Magenta'
                        />
                        <p> {'Mujeres: ' + props.numeroMujeres}</p>                       
                    </div>
                </div>
                <p className="PaddingBottomMedio">*Datos actualizados mensualmente</p>
            </div>
        </div>
    )
}

export default CardsPorcentajes;
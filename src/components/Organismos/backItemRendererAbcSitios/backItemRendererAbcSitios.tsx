import React from "react";
import TitlesCards from "../../Atomos/TitlesCards";
import DynamicButton from "../../Atomos/DynamicButton";
import TextField from "../../Atomos/TextField";
import PrecioCosto from "../../Atomos/PrecioCosto";
import { getColorMedio, getModo } from "../../../utils/utils";
import '../../../index.css';

interface BackItemRendererAbcSitiosProps{
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
    longitud?: number;
    latitud?: number;
    iluminacion?:
        'Si' |
        'No';
    bloqueado?:
        'Si' |
        'No';
    nicho?: string;
    material?: string;
    precio?: number;
    costo?: number;
}

const BackItemRendererAbcSitios =(props:BackItemRendererAbcSitiosProps)=>{
    return(
    <div>
       <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
           <TitlesCards
               modo={props.modo}
               clave = {props.clave || 'undefined'}
               type = {props.tipo || 'undefined'}
           />
       </div>
       <div className="Columnas2">
           <div className="PaddingTopBottom1">
               <div className="IconoUbicacionGeografica">
                   <DynamicButton
                       type = 'icons'
                       button = 'ubicaciongeografica'
                       size = 'grande'
                       color = 'Amarillo'
                   />
               </div>
               <TextField
               modo={props.modo}
               type = 'titleAndDescription'
               title = 'Longitud: '
               description = {props.longitud || '0'}
               />
               <TextField
               modo={props.modo}
               type = 'titleAndDescription'
               title = 'Latitud: '
               description = {props.latitud || '0'}
               />
           </div>
           <div className="PaddingTopBottom1">
               <TextField
               modo={props.modo}
               type = 'titleAndDescription'
               title = 'Iluminacion: '
               description = {props.iluminacion || '?'}
               />
               <TextField
               modo={props.modo}
               type = 'titleAndDescription'
               title = 'Bloqueado: '
               description = {props.bloqueado || '?'}
               />
               <TextField
               modo={props.modo}
               type = 'titleAndDescription'
               title = 'Nicho: '
               description = {props.nicho || '?'}
               />
               <TextField
               modo={props.modo}
               type = 'titleAndDescription'
               title = 'Material: '
               description = {props.material || 'undefined'}
               />
           </div>
       </div>
       <div className="PrecioCostoPosition">        
           <PrecioCosto
               type = 'precioCosto'
               precio = {props.precio || '0'}
               costo = {props.costo || '0'}
               tipoMedio = {props.tipoMedio}
           />
       </div>
    </div>
    )
}

export default BackItemRendererAbcSitios;
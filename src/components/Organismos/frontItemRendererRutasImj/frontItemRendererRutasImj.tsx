import React from "react";
import TitlesCards from '../../Atomos/TitlesCards';
import { getColorMedio, getModo } from "../../../utils/utils";
import TextField from "../../Atomos/TextField";
import PropertyBtn from "../../Atomos/PropertyBtn";
import '../../../index.css'

interface FrontItemRendererRutasImjProps{
    modo?:
        'Dark' |
        '';
    tipoMedio?:
        'espectacular' |
        'muro' |
        'urbanos' |
        'indoors';
    ruta?: string;
    id?: string;
    clave?: string;
    inicioRuta?: string;
    destinoRuta?: string;
    ubicacion?: string;
    kilometraje?: number;
    estadoActivo?: boolean;

}
const FrontItemRendererRutasImj = (props:FrontItemRendererRutasImjProps) =>{
    return(
        <div>
            <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                <TitlesCards
                    modo={props.modo}
                    clave = {props.ruta || 'undefined'}
                    type = {'Id: '+ (props.id || 'undefined')}
                />
            </div>
            <div className="InformacionCard">
                <div className="DireccionCards">
                    <TextField
                        modo={props.modo}
                        type = 'titleAndDescription' 
                        title = 'Clave: '
                        description = {props.clave || 'undefined'}
                    />
                </div>
                <div className="RowPadding1">
                    <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Inicio: '
                        description = {props.inicioRuta || 'undefined'}                       
                    />
                    <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Destino: '
                        description = {props.destinoRuta || 'undefined'}
                    />
                </div>
                <div className="RowPadding1">
                    <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Ubicación: '
                        description = {props.ubicacion || 'undefined'}
                    />
                </div>
                <div className="RowPadding1">
                <TextField
                    modo={props.modo}
                    type = 'titleAndDescription'
                    title = 'Kilometraje: '
                    description = {(props.kilometraje || '0')+'km'}
                    labelColor ={getColorMedio(props.tipoMedio)}
                />
                </div>
                <div className="PropiedadCardsPosition3 CardRutasImj">
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

export default FrontItemRendererRutasImj;
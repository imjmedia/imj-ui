import React from "react";
import TextField from "../../Atomos/TextField";
import Logo from "../../Atomos/Logo";
import TitlesCards from "../../Atomos/TitlesCards";
import {noImage} from '../../Img/Img/noImage.jpg';
import {hombres} from '../../Img/Iconos/hombres.svg';
import {mujeres} from '../../Img/Iconos/mujeres.svg';
import { getColorMedio, getModo } from "../../../utils/utils";
import '../../../index.css'

interface ModalItemRendererPrevisualizarProps {
    imagen?: any;
    modo?:
        'Dark' |
        '';
    tipoMedio?: 
        'espectacular' |
        'muro' |
        'urbanos' |
        'indoors' |
        any
        ;
    clave?: string;
    tipo?: string;
    nseA?: number;
    nseB?: number;
    nseC?: number;
    nseD?: number;
    nseE?: number;
    edad13?: number;
    edad18?: number;
    edad26?: number;
    edad41?: number;
    edad55?: number;
    direccion?: string;
    colonia?: string;
    cdEdo?: string;
    vialidad?: string;
    alto?: number;
    ancho?: number;
    material?: string;
    acabados?: string;
    iluminacion?: 
        'Si' | 
        'No';
    vista?:
        'Natural' |
        'Cruzada';
    nicho?: string;
    implementaciones?: 
        'Si' |
        'No';
    totalMujeres?: number;
    porcentajeMujeres?: number;
    totalHombres?: number;
    porcentajeHombres?: number;
    alcance?: number;
    totalImpactos?: number;
    impactos?: number;
    frecuencia?: number;
    totalUsuarios?: number;
    usuarios?: number;
}

const ModalItemRendererPrevisualizar = (props:ModalItemRendererPrevisualizarProps) =>{
    return(
        <div>
        <div className="ContenedorSuperiorFicha">
            <div className="ImagenPrevCards">
                <img src={props.imagen || noImage} alt="" />
            </div>
            <div className="InfoSupeDerPrevCards">
                <div className="LogoPrevCards">
                    <Logo logo="ByImj" modo={props.modo} />
                </div>
                <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                    <TitlesCards
                        modo={props.modo}
                        clave = {props.clave || 'undefined'}
                        type = {props.tipo || 'undefined'}
                    />
                </div>
                <div className={"InfoPorcentajesPrevCards"+getModo(props.modo)}>
                    <h3>Afluecia por Nivel Socieconómico</h3>
                    <div className="Columnas2 Wrap">
                        <div className="FontSize12">
                            <TextField
                                type='description'
                                description={'NSE A: ' + (props.nseA || 0)+'%'}
                                labelColor='Azul'
                            />
                        </div>
                        <div className="FontSize12">
                            <TextField
                                type='description'
                                description={'NSE B: ' + (props.nseB || 0)+'%'}
                                labelColor='Rojo'
                            />
                        </div>
                        <div className="FontSize12">
                            <TextField
                                type='description'
                                description={'NSE C: ' + (props.nseC || 0)+'%'}
                                labelColor='Aqua'
                            />
                        </div>
                        <div className="FontSize12">
                            <TextField
                                type='description'
                                description={'NSE D: ' + (props.nseD || 0)+'%'}
                                labelColor='Magenta'
                            />
                        </div>
                        <div className="FontSize12 UltimoCampoPrev">
                            <TextField
                                type='description'
                                description={'NSE E: ' + (props.nseE || 0)+'%'}
                                labelColor='Amarillo'
                            />
                        </div>
                    </div>
                </div>
                <div className={"InfoPorcentajesPrevCards"+getModo(props.modo)}>
                    <h3>Afluecia por Rango de edad</h3>
                    <div className="Columnas2 Wrap">
                        <div className="FontSize12">
                            <TextField
                                type='description'
                                description={'13-17: ' + (props.edad13 || 0)+'%'}
                                labelColor='Azul'
                            />
                        </div>
                        <div className="FontSize12">
                            <TextField
                                type='description'
                                description={'18-25: ' + (props.edad18 || 0)+'%'}
                                labelColor='Rojo'
                            />
                        </div>
                        <div className="FontSize12">
                            <TextField
                                type='description'
                                description={'26-40: ' + (props.edad26 || 0)+'%'}
                                labelColor='Aqua'
                            />
                        </div>
                        <div className="FontSize12">
                            <TextField
                                type='description'
                                description={'41-55: ' + (props.edad41 || 0)+'%'}
                                labelColor='Magenta'
                            />
                        </div>
                        <div className="FontSize12 UltimoCampoPrev">
                            <TextField
                                type='description'
                                description={'55 o +: ' + (props.edad55 || 0)+'%'}
                                labelColor='Amarillo'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"ContenedorInferiorFicha"+ getModo(props.modo)}>
                <div className="Columnas3">
                    <div className="InfoUbicaPrevCards">
                        <div className="TextOverflowDescription">
                            <TextField
                                type='titleAndDescription'
                                title= 'Dirección: '
                                description={props.direccion || 'undefined'}
                            />
                        </div>
                        <TextField
                            type='titleAndDescription'
                            title= 'Colonia: '
                            description={props.colonia || 'undefined'}
                        />
                        <TextField
                            type='titleAndDescription'
                            title= 'Cd. y Edo.: '
                            description={props.cdEdo || 'undefined'}
                        />
                        <TextField
                            type='titleAndDescription'
                            title= 'Vialidad: '
                            description={props.vialidad || 'undefined'}
                        />
                    </div>
                    <div className="IfoEspecificacionesPrevCards">
                        <TextField
                            type='titleAndDescription'
                            title= 'Medidas: '
                            description={(props.alto||0)+'m '+ (props.ancho||0)+'m'}
                            labelColor={getColorMedio(props.tipoMedio)}
                        />
                        <TextField
                            type='titleAndDescription'
                            title= 'Material: '
                            description={props.material || 'undefined'}
                        />
                        <TextField
                            type='titleAndDescription'
                            title= 'Acabado: '
                            description={props.acabados || 'undefined'}
                        />
                        <TextField
                            type='titleAndDescription'
                            title= 'Iluminación: '
                            description={props.iluminacion || '?'}
                        />
                        <TextField
                            type='titleAndDescription'
                            title= 'Tipo de vista: '
                            description={props.vista || '?'}
                        />
                        <TextField
                            type='titleAndDescription'
                            title= 'Nicho: '
                            description={props.nicho || 'undefined'}
                        />
                        <TextField
                            type='titleAndDescription'
                            title= 'Impl. Especiales: '
                            description={props.implementaciones || '?'}
                            labelColor={getColorMedio(props.tipoMedio)}
                        />
                    </div>
                    <div className="Columnas2" style={{maxWidth:'95%'}}>
                        <div>
                            <div className="Flexbox" style={{marginBottom:'-.5rem', alignItems:'center'}}>
                                <img src={mujeres} alt="" style={{maxHeight:'2.5rem'}}/>
                                <p>Mujeres: {props.totalMujeres || 0}</p>
                            </div>
                            <div className="DisplayBlock">
                                <TextField
                                    type='description'
                                    description={props.porcentajeMujeres || 0}
                                    labelColor='Magenta'
                                />
                            </div>
                        </div>
                        <div>
                            <div className="Flexbox" style={{marginBottom:'-.5rem', alignItems:'center'}}>
                                <img src={hombres} alt="" style={{maxHeight:'2.5rem'}}/>
                                <p>Hombres: {props.totalHombres || 0}</p>
                            </div>
                            <div className="DisplayBlock">
                                <TextField
                                    type='description'
                                    description={props.porcentajeHombres || 0}
                                    labelColor='Azul'
                                />
                            </div>
                        </div>
                        <div>
                            <p style={{fontWeight:'bold'}}>Alcance</p>
                            <div className="DisplayBlock">
                                <TextField
                                    type='description'
                                    description={props.alcance || 0}
                                    labelColor='Rojo'
                                />
                            </div>
                        </div>
                        <div>
                            <p>Impactos: {props.totalImpactos || 0}</p>
                            <div className="DisplayBlock">
                                <TextField
                                    type='description'
                                    description={props.impactos || 0}
                                    labelColor='Verde'
                                />
                            </div>
                        </div>
                        <div>
                            <p style={{fontWeight:'bold'}}>Frecuencia</p>
                            <div className="DisplayBlock">
                                <TextField
                                    type='description'
                                    description={props.frecuencia || 0}
                                    labelColor='Azul'
                                />
                            </div>
                        </div>
                        <div>
                            <p>Usuarios: {props.totalUsuarios || 0}</p>
                            <div className="DisplayBlock">
                                <TextField
                                    type='description'
                                    description={props.usuarios || 0}
                                    labelColor='Morado'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default ModalItemRendererPrevisualizar;
import React from "react";
import { getColorMedio, getModo } from "../../../utils/utils";
import BtnFunction from "../../Atomos/btnFunction";
import Logo from "../../Atomos/Logo";
import TextField from "../../Atomos/TextField";
import TitlesCards from "../../Atomos/TitlesCards";
import mujeres from '../../Img/Iconos/mujeres.svg';
import hombres from '../../Img/Iconos/hombres.svg';
import noImagen from '../../Img/img/noImagen.jpg';
import '../../../index.css'
import '../formaPrevRutas/index.css'

interface FichaRutasProps{
    imagen?: any;
    clave?: string;
    ruta?: string;
    totalMujeres?: string | number;
    porcentajeMujeres?: string | number;
    totalHombres?: string | number;
    porcentajeHombres?: string | number;
    alcance?: string | number;
    frecuencia?: string | number;
    impactosRuta?: string | number;
    impactosTotales?: string | number;
    modo?: string;
    inicio?: string;
    destino?: string;
    kilometraje?: string | number;
    tipoMedio?: 
        'espectacular'|  
        'muro' |
        'urbanos' |
        'indoors';
    derrotero?: string;
}
export const FichaRutas = (props:FichaRutasProps) => {
    return (
        <div style={{ width: '80rem', height: '60rem', position: 'absolute' }}>
            <div className="ContenedorSuperiorFicha" style={{ marginTop: '2rem' }}>
                <div className="ImagenPrevCards">
                    <img src={props.imagen || noImagen} style={{ backgroundColor: 'red' }} />
                </div>
                <div className="InfoSupeDerPrevCards">
                    <div className="LogoPrevCards">
                        <div style={{ position: 'absolute', left: '4rem', top: '4rem' }} className='ShadowCards'>
                            <BtnFunction button='carrito' color='Amarillo' />
                        </div>
                        <Logo logo="ByImj" modo={props.modo} />
                    </div>
                    <div className={"EncabezadoCard BorderBottom" + getColorMedio(props.tipoMedio)}>
                        <TitlesCards
                            modo={props.modo}
                            clave={props.clave || 'undefined'}
                            type={props.ruta || 'undefined'}
                        />
                    </div>
                    <div className="Columnas2" style={{ maxWidth: '95%', marginTop:'2rem'}}>
                        <div>
                            <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
                                <img src={mujeres} alt="" style={{ maxHeight: '2.5rem' }} />
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
                            <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
                                <img src={hombres} alt="" style={{ maxHeight: '2.5rem' }} />
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
                            <p style={{ fontWeight: 'bold' }}>Alcance</p>
                            <div className="DisplayBlock">
                                <TextField
                                    type='description'
                                    description={props.alcance || 0}
                                    labelColor='Rojo'
                                />
                            </div>
                        </div>
                        <div>
                            <p>Frecuencia:</p>
                            <div className="DisplayBlock">
                                <TextField
                                    type='description'
                                    description={props.frecuencia || 0}
                                    labelColor='Verde'
                                />
                            </div>
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold' }}>Impactos de ruta</p>
                            <div className="DisplayBlock">
                                <TextField
                                    type='description'
                                    description={props.impactosRuta || 0}
                                    labelColor='Azul'
                                />
                            </div>
                        </div>
                        <div>
                            <p>Impactos Totales:</p>
                            <div className="DisplayBlock">
                                <TextField
                                    type='description'
                                    description={props.impactosTotales || 0}
                                    labelColor='Morado'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"ContenedorInferiorFicha" + getModo(props.modo)} style={{ width: '95%', margin: '-2.5rem auto 0 auto', marginTop: '-2.5rem' }}>
                    <div className="Columnas2 AlignTop">
                        <div className="InfoUbicaPrevCards">
                            <TextField
                                type='titleAndDescription'
                                title='Inicio de ruta: '
                                description={props.inicio || 'undefined'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title='Destino de ruta: '
                                description={props.destino || 'undefined'}
                            />
                            <div className="RowPadding1">
                                <TextField
                                    type='titleAndDescription'
                                    title='Kilometraje: '
                                    description={props.kilometraje || 'undefined'}
                                    labelColor={getColorMedio(props.tipoMedio)}
                                />
                            </div>
                        </div>
                        <div>
                            <TextField
                                type='titleAndDescription'
                                title='Derrotero'
                                description={props.derrotero}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
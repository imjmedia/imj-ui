import React from "react";
import { getColorMedio, getModo } from "../../../utils/utils";
import BtnFunction from "../../Atomos/btnFunction";
import Logo from "../../Atomos/Logo";
import TextField from "../../Atomos/TextField";
import TitlesCards from "../../Atomos/TitlesCards";
import mujeres from '../../Img/Iconos/mujeres.svg';
import hombres from '../../Img/Iconos/hombres.svg';
import '../../../index.css';

interface FichaSitiosProps{
    modo?: string;//'Dark' | ''
    tipoMedio?: 
        'espectacular' | 
        'muro' |
        'indoors' | 
        'urbanos';
    clave?: string;
    tipo?: string;
    nseA?: string | number;
    nseB?: string | number;
    nseC?: string | number;
    nseD?: string | number;
    nseE?: string | number;
    edad13?: string | number;
    edad18?: string | number;
    edad26?: string | number;
    edad41?: string | number;
    edad55?: string | number;
    direccion?: string;
    colonia?: string;
    cdEdo?: string;
    vialidad?: string;
    alto?: string | number;
    ancho?: string | number;
    material?: string;
    acabados?: string;
    iluminacion?: string | boolean;
    vista?: string;
    nicho?: string;
    implementaciones?: string | boolean;
    totalMujeres?: string | number;
    totalHombres?: string | number;
    porcentajeMujeres?: string | number;
    porcentajeHombres?: string | number;
    totalUsuarios?: string | number;
    totalImpactos?: string | number;
    impactos?: string | number;
    usuarios?: string | number;
    alcance?: string | number;
    frecuencia?: string | number;
    onClickCarrito?: ()=>void;

}

const FichaSitios = (props:FichaSitiosProps) => {
    const {modo, onClickCarrito, tipoMedio, clave, tipo, nseA, nseB, nseC, nseD, nseE, edad13, edad18, edad26, edad41, edad55, direccion, colonia, cdEdo, vialidad, alto, ancho, material, acabados, iluminacion, vista, nicho, implementaciones, totalMujeres, totalHombres, porcentajeHombres, porcentajeMujeres, impactos, usuarios, totalImpactos, totalUsuarios, alcance, frecuencia} = props
    return (
        <div style={{ width: '80rem', height: '60rem', position:'absolute'}}>
            <div className="ContenedorSuperiorFicha" style={{ marginTop: '2rem'}}>
                <div className="ImagenPrevCards">
                    <img style={{ backgroundColor: 'red' }} />
                </div>
                <div className="InfoSupeDerPrevCards">
                    <div className="LogoPrevCards">
                        <div style={{position:'absolute', left:'4rem', top:'4rem'}} className='ShadowCards'>
                            <BtnFunction button='carrito' color='Amarillo' onClick={onClickCarrito}/>
                        </div>
                        <Logo logo="ByImj" modo={modo} />
                    </div>
                    <div className={"EncabezadoCard BorderBottom" + getColorMedio(tipoMedio)}>
                        <TitlesCards
                            modo={modo}
                            clave={clave || 'undefined'}
                            type={tipo || 'undefined'}
                        />
                    </div>
                    <div className={"InfoPorcentajesPrevCards" + getModo(modo)}>
                        <h3>Afluecia por Nivel Socieconómico</h3>
                        <div className="Columnas2 Wrap">
                            <div className="FontSize12">
                                <TextField
                                    type='description'
                                    description={'NSE A: ' + (nseA || 0) + '%'}
                                    labelColor='Azul'
                                />
                            </div>
                            <div className="FontSize12">
                                <TextField
                                    type='description'
                                    description={'NSE B: ' + (nseB || 0) + '%'}
                                    labelColor='Rojo'
                                />
                            </div>
                            <div className="FontSize12">
                                <TextField
                                    type='description'
                                    description={'NSE C: ' + (nseC || 0) + '%'}
                                    labelColor='Aqua'
                                />
                            </div>
                            <div className="FontSize12">
                                <TextField
                                    type='description'
                                    description={'NSE D: ' + (nseD || 0) + '%'}
                                    labelColor='Magenta'
                                />
                            </div>
                            <div className="FontSize12 UltimoCampoPrev">
                                <TextField
                                    type='description'
                                    description={'NSE E: ' + (nseE || 0) + '%'}
                                    labelColor='Amarillo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"InfoPorcentajesPrevCards" + getModo(modo)}>
                        <h3>Afluecia por Rango de edad</h3>
                        <div className="Columnas2 Wrap">
                            <div className="FontSize12">
                                <TextField
                                    type='description'
                                    description={'13-17: ' + (edad13 || 0) + '%'}
                                    labelColor='Azul'
                                />
                            </div>
                            <div className="FontSize12">
                                <TextField
                                    type='description'
                                    description={'18-25: ' + (edad18 || 0) + '%'}
                                    labelColor='Rojo'
                                />
                            </div>
                            <div className="FontSize12">
                                <TextField
                                    type='description'
                                    description={'26-40: ' + (edad26 || 0) + '%'}
                                    labelColor='Aqua'
                                />
                            </div>
                            <div className="FontSize12">
                                <TextField
                                    type='description'
                                    description={'41-55: ' + (edad41 || 0) + '%'}
                                    labelColor='Magenta'
                                />
                            </div>
                            <div className="FontSize12 UltimoCampoPrev">
                                <TextField
                                    type='description'
                                    description={'55 o +: ' + (edad55 || 0) + '%'}
                                    labelColor='Amarillo'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"ContenedorInferiorFicha" + getModo(modo)} style={{width:'95%', margin:'-2.5rem auto 0 auto',marginTop:'-2.5rem'}}>
                    <div className="Columnas3">
                        <div className="InfoUbicaPrevCards">
                            <div className="TextOverflowDescription">
                                <TextField
                                    type='titleAndDescription'
                                    title='Dirección: '
                                    description={direccion || 'undefined'}
                                />
                            </div>
                            <TextField
                                type='titleAndDescription'
                                title='Colonia: '
                                description={colonia || 'undefined'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title='Cd. y Edo.: '
                                description={cdEdo || 'undefined'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title='Vialidad: '
                                description={vialidad || 'undefined'}
                            />
                        </div>
                        <div className="IfoEspecificacionesPrevCards">
                            <TextField
                                type='titleAndDescription'
                                title='Medidas: '
                                description={(alto || 0) + 'm ' + (ancho || 0) + 'm'}
                                labelColor={getColorMedio(tipoMedio)}
                            />
                            <TextField
                                type='titleAndDescription'
                                title='Material: '
                                description={material || 'undefined'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title='Acabado: '
                                description={acabados || 'undefined'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title='Iluminación: '
                                description={iluminacion || '?'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title='Tipo de vista: '
                                description={vista || '?'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title='Nicho: '
                                description={nicho || 'undefined'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title='Impl. Especiales: '
                                description={implementaciones || '?'}
                                labelColor={getColorMedio(tipoMedio)}
                            />
                        </div>
                        <div className="Columnas2" style={{ maxWidth: '95%' }}>
                            <div>
                                <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
                                    <img src={mujeres} alt="" style={{ maxHeight: '2.5rem' }} />
                                    <p>Mujeres: {totalMujeres || 0}</p>
                                </div>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={porcentajeMujeres || 0}
                                        labelColor='Magenta'
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
                                    <img src={hombres} alt="" style={{ maxHeight: '2.5rem' }} />
                                    <p>Hombres: {totalHombres || 0}</p>
                                </div>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={porcentajeHombres || 0}
                                        labelColor='Azul'
                                    />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Descripción</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='Alcance'
                                        description={alcance || 0}
                                        labelColor='Rojo'
                                    />
                                </div>
                            </div>
                            <div>
                                <p>Impactos: {totalImpactos || 0}</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={impactos || 0}
                                        labelColor='Verde'
                                    />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Frecuencia</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={frecuencia || 0}
                                        labelColor='Azul'
                                    />
                                </div>
                            </div>
                            <div>
                                <p>Usuarios: {totalUsuarios || 0}</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={usuarios || 0}
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

export default FichaSitios;
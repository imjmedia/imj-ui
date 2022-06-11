import React from "react";
import TitlesCards from "../../Atomos/TitlesCards";
import TextField from "../../Atomos/TextField";
//import PropertyBtn from "../../Atomos/PropertyBtn";
import '../../../index.css';

const noImage = require('../../../Img/Img/noImage.jpg') as string;
//const noQr = require('../../../Img/Img/noQr.png') as string;
const hombres = require('../../../Img/Iconos/hombres.jpg') as string;
const mujeres = require('../../../Img/Iconos/mujeres.jpg') as string;

/*ASIGNADO DE COLOR*/
const getModo = (modo:any) => {
    switch (modo) {
        case 'Dark': return('DarkMode')
        default: return ''
    }
}
/* ASIGNADO DE COLOR */
export const getColorMedio = (tipoMedio:any) => {
    switch (tipoMedio) {
        case 'espectacular': return('Rojo')            
        case 'urbanos': return('Magenta')
        case 'muro': return('Azul')            
        case 'indoors': return('Amarillo')
        default: return('Gris')
    }
}

interface PrevisualizarCardsProps{
    imagen?: any;
    tipoMedio?: string;
    modo?:string;

    clave?: string;
    tipo?: string;
    direccion?: string;
    colonia?: string;
    cdEdo?: string;
    vialidad?: string;

    ancho?: string;
    alto?: string;
    material?: string;
    acabados?: string;
    iluminacion?: string;
    vista?: string;
    nicho?: string;
    implementaciones?: string;

    alcance?: string;
    frecuencia?: string;
    porcentajeUsuarios?: string;
    porcentajeImpactos?: string;

    nseA?: string;
    nseB?: string;
    nseC?: string;
    nseD?: string;
    nseE?: string;
    totalNseA?: string;
    totalNseB?: string;
    totalNseC?: string;
    totalNseD?: string;
    totalNseE?: string;
    edad13?: string;
    edad18?: string;
    edad26?: string;
    edad41?: string;
    edad55?: string;
    totalEdad13?: string;
    totalEdad18?: string;
    totalEdad26?: string;
    totalEdad41?: string;
    totalEdad55?: string;

    numeroHombres?: string;
    numeroMujeres?: string;
    porcentajeHombres?: string;
    porcentajeMujeres?: string;
}
const PrevisualizarCards = (props:PrevisualizarCardsProps) => {
    return(
        <div className="ContenedorGeneralPrevisualizarCards">
            <div className="GridPrevisualizarCards">
                <div className="ImagenPrevisualizarCards">
                    <img src={props.imagen || noImage} alt="" />
                </div>
                <div className="PorcentajesNseEdadPrevisualizarCards">
                    <div className="TituloPrevisualizarCard">
                        <div className={"BorderBottom"+getColorMedio(props.tipoMedio)} style={{paddingTop:'3.5rem'}}>
                            <div className="TitlesCardsPrevisualizar">
                            <TitlesCards
                                clave= {props.clave || 'undefined'}
                                type = {props.tipo || 'undefined'}
                            />
                            </div>
                        </div>
                        <p style={{fontSize:'1.2rem', textAlign:'center', fontWeight:'bold'}}>
                            Afluencia por nivel socieconómico
                        </p>
                        <div className="CampoPorcentajesPrevisualizarCards">
                            <div>
                                <div style={{paddingTop:'.5rem'}}>
                                <TextField
                                    type='description'
                                    description = {'NSE A: '+ ((props.nseA || '0')+'%')}
                                    labelColor='Azul'
                                />
                                </div>
                                <TextField
                                type='title'
                                title = {props.totalNseA || '0'}
                                />
                            </div>
                            <div>
                                <div style={{paddingTop:'.5rem'}}>
                                <TextField
                                    type='description'
                                    description = {'NSE B: '+ ((props.nseB || '0')+'%')}
                                    labelColor='Rojo'
                                />
                                </div>
                                <TextField
                                type='title'
                                title = {props.totalNseB || '0'}
                                />
                            </div>
                            <div>
                                <div style={{paddingTop:'.5rem'}}>
                                <TextField
                                    type='description'
                                    description = {'NSE C: '+ ((props.nseC || '0')+'%')}
                                    labelColor='Aqua'
                                />
                                </div>
                                <TextField
                                type='title'
                                title = {props.totalNseC || '0'}
                                />
                            </div>
                            <div>
                                <div style={{paddingTop:'.5rem'}}>
                                <TextField
                                    type='description'
                                    description = {'NSE D: '+ ((props.nseD || '0')+'%')}
                                    labelColor='Magenta'
                                />
                                </div>
                                <TextField
                                type='title'
                                title = {props.totalNseD || '0'}
                                />
                            </div>
                            <div style={{gridColumn:'1/3'}}>
                                <div style={{paddingTop:'.5rem'}}>
                                <TextField
                                    type='description'
                                    description = {'NSE E: '+ ((props.nseE || '0')+'%')}
                                    labelColor='Amarillo'
                                />
                                </div>
                                <TextField
                                type='title'
                                title = {props.totalNseE || '0'}
                                />
                            </div>
                        </div>
                        <p style={{fontSize:'1.2rem', textAlign:'center', fontWeight:'bold'}}>
                            Afluencia por rango de edad
                        </p>
                        <div className="CampoPorcentajesPrevisualizarCards">
                            <div>
                                <div style={{paddingTop:'.5rem'}}>
                                <TextField
                                    type='description'
                                    description = {'13-17: '+ ((props.edad13 || '0')+'%')}
                                    labelColor='Azul'
                                />
                                </div>
                                <TextField
                                type='title'
                                title = {props.totalEdad13 || '0'}
                                />
                            </div>
                            <div>
                                <div style={{paddingTop:'.5rem'}}>
                                <TextField
                                    type='description'
                                    description = {'18-25: '+ ((props.edad18 || '0')+'%')}
                                    labelColor='Rojo'
                                />
                                </div>
                                <TextField
                                type='title'
                                title = {props.totalEdad18 || '0'}
                                />
                            </div>
                            <div>
                                <div style={{paddingTop:'.5rem'}}>
                                <TextField
                                    type='description'
                                    description = {'26-40: '+ ((props.edad26 || '0')+'%')}
                                    labelColor='Aqua'
                                />
                                </div>
                                <TextField
                                type='title'
                                title = {props.totalEdad26 || '0'}
                                />
                            </div>
                            <div>
                                <div style={{paddingTop:'.5rem'}}>
                                <TextField
                                    type='description'
                                    description = {'41-55: '+ ((props.edad41 || '0')+'%')}
                                    labelColor='Magenta'
                                />
                                </div>
                                <TextField
                                type='title'
                                title = {props.totalEdad41 || '0'}
                                />
                            </div>
                            <div style={{gridColumn:'1/3'}}>
                                <div style={{paddingTop:'.5rem'}}>
                                <TextField
                                    type='description'
                                    description = {'55 o +: '+ ((props.edad55 || '0')+'%')}
                                    labelColor='Amarillo'
                                />
                                </div>
                                <TextField
                                type='title'
                                title = {props.totalEdad55 || '0'}
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="ContenidoPrevisualiarCards">
                    <div className="ContenedorContenidoPrevisualizarCards">
                        <div className="InfoUbicacionPrevisualizarCards">
                            <div className="TextOverflowDescription" >
                            <TextField
                                type='titleAndDescription'
                                title = 'Dirección: '
                                description = {props.direccion || 'undefined'}
                            />
                            </div>
                            <TextField
                                type='titleAndDescription'
                                title = 'Colonia: '
                                description = {props.colonia || 'undefined'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title = 'Cd. y Edo.: '
                                description = {props.cdEdo || 'undefined'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title = 'Vialidad: '
                                description = {props.vialidad || 'undefined'}
                            />
                        </div>
                        <div className="InfoDescriptivaPrevisualizarCards">
                            <TextField
                                type='titleAndDescription'
                                title = 'Medidas: '
                                description = {(props.ancho || '0')+ 'm x ' +(props.alto || 0)+ 'm'}
                                labelColor={getColorMedio(props.tipoMedio)}
                            />
                            <TextField
                                type='titleAndDescription'
                                title = 'Material: '
                                description = {props.material  || 'undefined'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title = 'Acabados: '
                                description = {props.acabados || 'undefined'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title = 'iluminación: '
                                description = {props.iluminacion || '?'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title = 'Vista: '
                                description = {props.vista || '?'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title = 'Nicho: '
                                description = {props.nicho || '?'}
                            />
                            <TextField
                                type='titleAndDescription'
                                title = 'Imp. especiales: '
                                description = {props.implementaciones || '?'}
                                labelColor={getColorMedio(props.tipoMedio)}
                            />
                        </div>
                        <div className="PorcentajesPrevisualizarCards" style={{maxWidth:'97%', alignItems:'center'}}>
                            <div className="PorcentajeHombresPrevisualizaCards">
                                <div style={{display:'flex',marginBottom:'-.8rem'}}>
                                    <img src={hombres} alt="" style={{maxHeight:'2.8rem', marginBottom:'-1rem'}}/>
                                    <p>Hombres: {props.numeroHombres || '0'}</p>
                                </div>
                                <div style={{display:'block'}}>
                                <TextField
                                    type='description'
                                    description = {(props.porcentajeHombres || '0')+'%'}
                                    labelColor='Azul'
                                />
                                </div>
                            </div>
                            <div className="PorcentajeMujeresPrevisualizaCards">
                                <div style={{display:'flex',marginBottom:'-.8rem'}}>
                                    <img src={mujeres} alt="" style={{maxHeight:'2.8rem'}}/>
                                    <p>Mujeres: {props.numeroMujeres || '0'}</p>
                                </div>
                                <div style={{paddingTop:'.5rem', display:'block'}}>
                                <TextField
                                    type='description'
                                    description = {(props.porcentajeMujeres || '0')+'%'}
                                    labelColor='Magenta'
                                />
                                </div>
                            </div>
                            <div className="PorcentajeAlcancePrevisualizaCards">
                                <TextField
                                    type='title'
                                    title = 'Alcance'
                                    labelColor='Azul'
                                />
                                <div style={{paddingTop:'.5rem', display:'block'}}>
                                <TextField
                                    type='description'
                                    description = {(props.alcance || '0')+'%'}
                                    labelColor='Rojo'
                                />
                                </div>
                            </div>
                            <div className="PorcentajeFrecuenciaPrevisualizaCards">
                                <TextField
                                    type='title'
                                    title = 'Frecuencia'
                                />
                                <div style={{paddingTop:'.5rem', display:'block'}}>
                                <TextField
                                    type='description'
                                    description = {(props.frecuencia || '0')+'%'}
                                    labelColor='Azul'
                                />
                                </div>
                            </div>
                            <div className="PorcentajeUsuariosPrevisualizaCards">
                                <TextField
                                    type='title'
                                    title = 'Usuarios'
                                />
                                <div style={{paddingTop:'.5rem', display:'block'}}>
                                <TextField
                                    type='description'
                                    description = {(props.porcentajeUsuarios || '0')+'%'}
                                    labelColor='Morado'
                                />
                                </div>
                            </div>
                            <div className="PorcentajeImpactosPrevisualizaCards">
                                <TextField
                                    type='title'
                                    title = 'Impactos'
                                />
                                <div style={{paddingTop:'.5rem', display:'block'}}>
                                <TextField
                                    type='description'
                                    description = {(props.porcentajeImpactos || '0')+'%'}
                                    labelColor='Verde'
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

export default PrevisualizarCards;
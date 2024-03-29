import React from "react";
import '../../../index.css';
import PropertyBtn from '../../Atomos/PropertyBtn';
import TextField from '../../Atomos/TextField';
import TitlesCards from '../../Atomos/TitlesCards';

import { getColorMedio, getModo } from "../../../utils/utils";
import hombres from '../../Img/Iconos/hombres.svg';
import mujeres from '../../Img/Iconos/mujeres.svg';
import noImagen from '../../Img/Img/noImagen.jpg';

interface CardRecorridoProps{
    modo?: string | any;
    imagen?: string | any;
    tipoMedio: 'espectacular' | 'muro' | 'urbanos' | 'indoors' | any;

    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    ubicacion?: string | any;
    vista?: 'Natural' | 'Cruzada';
    ancho?: number | any;
    alto?: number | any;
    material?: string | any;
    descripcion?: string | any;
    estadoActivo?:true | false;
    estadoIluminacion?:true | false;

    numeroHombres?:number | any;
    porcentajeHombres?:number | any;
    numeroMujeres?:number | any;
    porcentajeMujeres?:number | any;
    alcance?:number | any;
    frecuencia?:number | any;
    totalUsuarios?:number | any;
    totalImpactos?:number | any;

    totalEdad13?:number | any;
    totalEdad18?:number | any;
    totalEdad26?:number | any;
    totalEdad41?:number | any;
    totalEdad55?:number | any;
    totalNseA?:number |  any;
    totalNseB?:number |  any;
    totalNseC?:number |  any;
    totalNseD?:number |  any;
    totalNseE?:number |  any;
}
export const CardsRecorrido=(props:CardRecorridoProps)=>{
    const Front =(props:CardRecorridoProps)=>{
        return(
                <div className={"CardFrontRecorrido CardRecorrido"+getModo(props.modo)}>
                    <div className="ImageCardRecorrido"> 
                         <img src={props.imagen || noImagen} alt="" />
                    </div>
                    <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                        <TitlesCards
                            modo={props.modo}
                            clave = {props.clave || 'undefined'}
                            type = {props.tipo || 'undefined'}
                        />
                    </div>
                    <div className="ContenidoCardsRecorrido">
                        <TextField
                            modo={props.modo}
                            title = 'Dirección: '
                            description = {props.direccion || 'undefined'}
                        />
                        <div className="Columnas2">
                        <TextField
                            modo={props.modo}
                            title = 'Ubicación: '
                            description = {props.ubicacion || 'undefined'}
                        />
                        <TextField
                            modo={props.modo}
                            title = 'Vista: '
                            description = {props.vista || '?'}
                        />
                        </div>
                        <div className="Flexbox MedidasCards">
                            <TextField
                                modo={props.modo}
                                title = 'Medidas: '
                                description = {(props.ancho || '0')+ 'm x '+ (props.alto || '0')+'m'}
                                labelColor ={getColorMedio(props.tipoMedio)}
                            /> 
                        </div>
                        <TextField
                            modo={props.modo}
                                title = 'Material: '
                                description = {props.material || 'undefined'}
                            />
                            <div className="TextOverflowDescription PaddingRight1">
                                <TextField
                                    modo={props.modo}
                                    title = 'Referencias: '
                                    description = {props.descripcion || 'undefined'}
                                />
                            </div>
                            
                        <div className="Columnas2 PropiedadesCardsRecorrido">
                        <PropertyBtn
                        property = 'Imp. Especiales'
                        color = 'verde'
                        state = {props.estadoActivo || false}
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
    const Back = (props:CardRecorridoProps) =>{
        return (
            <div className={"CardBackRecorrido CardRecorrido"+getModo(props.modo)}>
                <div className="Columnas2 Contenedor PaddingTop2">
                    <div className="HombresBackCardsRecorrido">
                        <div className="PorcentajesIconos">
                            <img src={hombres} alt="" />
                            <div className="TotalesPorcentajes">
                                <TextField
                                    modo={props.modo}
                                    description = {props.numeroHombres || '0'}
                                />
                            </div>
                            
                        </div>
                        <div className="Width100 CenterText">
                            <TextField
                                modo={props.modo} 
                                description = {props.porcentajeHombres || '0'}
                                labelColor = 'Azul'
                            />
                        </div>  
                    </div>
                    <div className="MujeresBackCardsRecorrido">
                        <div className="PorcentajesIconos">
                            <img src={mujeres} alt="" />
                            <div className="TotalesPorcentajes">
                                <TextField
                                    modo={props.modo}
                                    description = {props.numeroMujeres || '0'}
                                />
                            </div>
                        </div>
                        <div className="Width100">
                            <TextField
                                modo={props.modo} 
                                description = {props.porcentajeMujeres || '0'}
                                labelColor = 'Magenta'
                            />
                        </div>  
                    </div>
                </div>
                <div className="Columnas2 Contenedor">
                    <div className="CamposBackCardsRecorrido">
                        <div className="PorcentajesIconos">
                            <div className="TotalesPorcentajes">
                                <TextField
                                    modo={props.modo}
                                    description = 'Alcance:'
                                />
                            </div>
                            
                        </div>
                        <div className="Width100 CenterText">
                            <TextField
                                modo={props.modo} 
                                description = {props.alcance || '0'}
                                labelColor = 'Rojo'
                            />
                        </div>  
                    </div>
                    <div className="CamposBackCardsRecorrido">
                        <div className="PorcentajesIconos">
                            <div className="TotalesPorcentajes">
                                <TextField
                                    modo={props.modo}
                                    description = 'Frecuencia:'
                                />
                            </div>
                        </div>
                        <div className="Width100">
                            <TextField
                                modo={props.modo} 
                                description = {props.frecuencia || '0'}
                                labelColor = 'Azul'
                            />
                        </div>  
                    </div>
                </div> 
                <div className="Columnas2 Contenedor">
                    <div className="CamposBackCardsRecorrido">
                        <div className="PorcentajesIconos">
                            <div className="TotalesPorcentajes">
                                <TextField
                                    modo={props.modo}
                                    description = 'Total de usuarios:'
                                />
                            </div>
                            
                        </div>
                        <div className="Width100 CenterText">
                            <TextField
                                modo={props.modo} 
                                description = {props.totalUsuarios || '0'}
                                labelColor = 'Morado'
                            />
                        </div>  
                    </div>
                    <div className="CamposBackCardsRecorrido">
                        <div className="PorcentajesIconos">
                            <div className="TotalesPorcentajes">
                                <TextField
                                    modo={props.modo}
                                    description = 'Total de impactos:'
                                />
                            </div>
                        </div>
                        <div className="Width100">
                            <TextField
                                modo={props.modo} 
                                description = {props.totalImpactos || '0'}
                                labelColor = 'Azul'
                            />
                        </div>  
                    </div>
                </div>
                <div className="ContenedorPieDeGraficaRecorrido">
                            <p className="TituloGrafica"> Afluencia por Nivel Socio Económico</p>
                            <div className="CamposGraficas">
                                <TextField
                                    modo={props.modo}
                                    description = {'NSE A: '+ props.totalNseB || '0'}
                                    labelColor = 'Azul'
                                />
                                <TextField
                                    modo={props.modo}
                                    description = {'NSE B: '+ props.totalNseB || '0'}
                                    labelColor = 'Rojo'
                                />
                                <TextField
                                    modo={props.modo}
                                    description = {'NSE C: '+ props.totalNseC || '0'}
                                    labelColor = 'Aqua'
                                />
                                <TextField
                                    modo={props.modo}
                                    description = {'NSE D: '+ props.totalNseD || '0'}
                                    labelColor = 'Magenta'
                                />
                                <TextField
                                    modo={props.modo}
                                    description = {'NSE E: '+ props.totalNseE || '0'}
                                    labelColor = 'Amarillo'
                                />
                            </div> 
                        </div>
                        <div className="ContenedorPieDeGraficaRecorrido">
                            <p className="TituloGrafica"> Afluencia por Grupo de edad</p>
                            <div className="CamposGraficas">
                                <TextField
                                    modo={props.modo}
                                    description = {'13-17: '+ props.totalEdad13 || '0'}
                                    labelColor = 'Azul'
                                />
                                <TextField
                                    modo={props.modo}
                                    description = {'18-25: '+ props.totalEdad18 || '0'}
                                    labelColor = 'Rojo'
                                />
                                <TextField
                                    modo={props.modo}
                                    description = {'26-40: '+ props.totalEdad26 || '0'}
                                    labelColor = 'Aqua'
                                />
                                <TextField
                                    modo={props.modo}
                                    description = {'41-55: '+ props.totalEdad41 || '0'}
                                    labelColor = 'Magenta'
                                />
                                <TextField
                                    modo={props.modo}
                                    description = {'55 o +: '+ props.totalEdad55 || '0'}
                                    labelColor = 'Amarillo'
                                />
                            </div> 
                        </div>
                        <p className="Absolute Top90 Left25">*Datos actualizados semanalmente</p>
                </div>       
        )
    }
    return(
        <div className="ContenedorCardsRecorrido">
        <Front
            modo={props.modo}
            imagen = {props.imagen}
            tipoMedio = {props.tipoMedio}
            clave = {props.clave}
            tipo = {props.tipo}
            direccion = {props.direccion}
            ubicacion = {props.ubicacion}
            vista = {props.vista}
            ancho = {props.ancho}
            alto = {props.alto}
            material = {props.material}
            descripcion = {props.descripcion}
            estadoActivo = {props.estadoActivo}
            estadoIluminacion = {props.estadoIluminacion}

        />
        <Back
            tipoMedio={props.tipoMedio}
            modo={props.modo}
            numeroHombres = {props.numeroHombres}
            porcentajeHombres = {props.porcentajeHombres + '%'}
            numeroMujeres = {props.numeroMujeres}
            porcentajeMujeres = {props.porcentajeMujeres + '%'}
            alcance = {props.alcance + '%'}
            frecuencia = {props.frecuencia + '%'}
            totalUsuarios = {props.totalUsuarios}
            totalImpactos = {props.totalImpactos}
            totalNseA = {props.totalNseA}
            totalNseB = {props.totalNseB}
            totalNseC = {props.totalNseC}
            totalNseD = {props.totalNseD}
            totalNseE = {props.totalNseE}
            totalEdad13 = {props.totalEdad13}
            totalEdad18 = {props.totalEdad18}
            totalEdad26 = {props.totalEdad26}
            totalEdad41 = {props.totalEdad41}
            totalEdad55 = {props.totalEdad55}
        />
        </div>
    )
}

export default CardsRecorrido;
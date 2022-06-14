import React from "react";
import TitlesCards from '../../Atomos/TitlesCards';
import TextField from '../../Atomos/TextField';
import Inputs from '../../Atomos/Inputs';
import PrecioCosto from '../../Atomos/PrecioCosto';
import DynamicButton from '../../Atomos/DynamicButton';
import Aside from '../../Moleculas/Aside';
import '../../../index.css';
import { getColorMedio, getModo } from "../../../utils/utils";

interface CardsVisualizaPautaProps{
    tipoMedio: 'espectacular' | 'muro' | 'urbanos' | 'indoors' | any; 
    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    ancho?: number | any; 
    alto?: number | any;
    precio?:number | any;
    descripcion?: string | any;
    proveedor?: string | any;
    claveProveedor?: string | any;
    alcance?:number | any;
    frecuencia?:number | any;
    totalUsuarios?:number | any;
    totalImpactos?:number | any;
    porcentajeHombres?:number | any;
    numeroHombres?:number | any;
    porcentajeMujeres?:number | any;
    numeroMujeres?:number | any;
    nseA?: number | any;
    nseB?: number | any;
    nseC?: number | any;
    nseD?: number | any;
    nseE?: number | any;
    edad13?:number | any;
    edad18?:number | any;
    edad26?:number | any;
    edad41?:number | any;
    edad55?:number | any;
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
    porcentajeUsuarios?: number | any;
    porcentajeImpactos?: number | any;
    colonia?: string | any;
    cdEdo?: string | any;
    vialidad?: string | any;
    acabados?: string | any;
    estadoImplementaciones?: true | false;
    material?: string| any;
    iluminacion?: 'Si' | 'No' | any;
    vista?: string | any;
    nicho?: string | any;
    
    imagen?:any;
    qr?:any;
    modo?: any;
}
const CardsVisualizaPauta = (props:CardsVisualizaPautaProps) => {
    const Front = (props:CardsVisualizaPautaProps) => {
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
                                type = 'titleAndDescription'
                                title = 'Dirección: '
                                description = {props.direccion || 'undefined'}
                            />
                        </div>{/* DireccionCards */}
                        <div className="Flexbox MedidasCards RowPadding2">
                            <div>
                                <TextField
                                    modo={props.modo}
                                type = 'titleAndDescription'
                                title = 'Medidas: '
                                description = {props.ancho+ 'm x '+ props.alto+'m'}
                                labelColor ={getColorMedio(props.tipoMedio)}
                                />
                            </div>
                        </div>{/* Flexbox MedidasCards */}
                        <div className="InicioFinCards ">
                            <div className="CampoFechaInicioFin">
                                <TextField
                                    modo={props.modo}
                                    type = 'title'
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
                                    type='title'
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
                                    type = 'title'
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
                            type = 'title'
                            title = 'Descripción: '
                        />
                    </div>
                    <div className="DescripcionCards TextOverflowDescription">
                        <TextField
                            modo={props.modo} 
                            type = 'description'
                            description = {props.descripcion || 'undefined'}
                        />                    
                    </div>
    
                        <div className="InicioFinCards Columnas2">
                            <div>
                                <TextField
                                    modo={props.modo} 
                                    type = 'description'
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
                                    type = 'description'
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
                                    type = 'description'
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
    return(
    <div className="CardsPaddings">
      <div className="CardAsideFlex">
          <div className="ContenedorCards">
              <div className={"Card"+getModo(props.modo)}>
                  <Front
                      modo={props.modo}
                      tipoMedio ={props.tipoMedio}
                      clave = {props.clave}
                      tipo = {props.tipo}
                      direccion = {props.direccion}
                      alto = {props.alto}
                      ancho = {props.ancho}
                      precio = {props.precio}
                      descripcion = {props.descripcion}
                    />
              </div>
              <div className="EtiquetaIdentificacion">
                <DynamicButton
                type = 'icons'
                size = 'grande'
                button = 'etiqueta'
                color = {getColorMedio(props.tipoMedio)}
                />
               </div>
            </div>
            <Aside 
            modo={props.modo}
            tipoCard = 'visualizadorPauta'
            tipoMedio = {props.tipoMedio}
            clave = {props.clave}
            proveedor = {props.proveedor}
            claveProveedor = {props.claveProveedor}
            alcance = {props.alcance}
            frecuencia = {props.frecuencia}
            totalUsuarios = {props.totalUsuarios}
            totalImpactos = {props.totalImpactos}
            porcentajeHombres = {props.porcentajeHombres}
            numeroHombres = {props.numeroHombres}
            porcentajeMujeres = {props.porcentajeMujeres}
            numeroMujeres = {props.numeroMujeres}
            nseA = {props.nseA}
            nseB = {props.nseB}
            nseC = {props.nseC}
            nseD = {props.nseD}
            nseE = {props.nseE}
            edad13 = {props.edad13}
            edad18 = {props.edad18}
            edad26 = {props.edad26}
            edad41 = {props.edad41}
            edad55 ={props.edad55}

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
            imagen = {props.imagen}
            tipo = {props.tipo}
            porcentajeUsuarios = {props.porcentajeUsuarios}
            porcentajeImpactos = {props.porcentajeImpactos}
            direccion = {props.direccion}
            colonia = {props.colonia}
            cdEdo = {props.cdEdo}
            vialidad = {props.vialidad}
            ancho = {props.ancho}
            alto = {props.alto}
            material = {props.material}
            acabados = {props.acabados}
            iluminacion = {props.iluminacion}
            vista = {props.vista}
            nicho = {props.nicho}
            estadoImplementaciones = {props.estadoImplementaciones}
            descripcion = {props.descripcion}
            qr = {props.qr}
            />
      </div>
    </div>
    )  
}


export default CardsVisualizaPauta;
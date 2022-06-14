import React from "react";
import TitlesCards from '../../Atomos/TitlesCards';
import TextField from '../../Atomos/TextField';
import PropertyBtn from '../../Atomos/PropertyBtn';
import DynamicButton from '../../Atomos/DynamicButton';
import Aside from '../../Moleculas/Aside';
import '../../../index.css';
import { getColorMedio, getModo } from "../../../utils/utils";

interface CardsInventarioComercialProps{
    show?: boolean | any;
    children?: any;
    handleClose?: () => void;
    tipoMedio: 'espectacular' | 'muro' | 'urbanos' | 'indoors' | any;
    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    ubicacion?: string | any;
    vista?: 'Natural' | 'Cruzada';
    ancho?: number | any; 
    alto?: number | any;
    implementaciones?: 'Si' | 'No';
    estadoActivo?: true | false;
    longitud?: number | any;
    latitud?: number | any;
    iluminacion?: 'Si' | 'No';
    bloqueado?: 'Si' | 'No';
    nicho?: string | any;
    material?: string | any;
    descripcion?: string | any;
    precio?:number | any;
    costo?:number | any;
    proveedor?:string | any;
    claveProveedor?:string | any;
    alcance?:number | any;
    frecuencia?:number | any;
    totalUsuarios?:number | any;
    totalImpactos?:number | any;
    porcentajeHombres?: number | any;
    numeroHombres?: number | any;
    porcentajeMujeres?: number | any;
    numeroMujeres?: number | any;
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
    
    imagen?:any;
    qr?:any;
    modo?: string | any;
}
const CardsInventarioComercial = (props:CardsInventarioComercialProps) => {
    const Front = (props:CardsInventarioComercialProps) => {
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
                    </div>
                    <div className="Columnas2 RowPadding1">
                        <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Ubicación: '
                        description = {props.ubicacion || 'undefined'}                       
                        />
                        <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Vista: '
                        description = {props.vista || 'undefined'}
                        />
                    </div>
                    <div className="Flexbox MedidasCards">
                        <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Medidas: '
                        description = {props.ancho+ 'm x '+ props.alto+'m'}
                        labelColor ={getColorMedio(props.tipoMedio)}
                        />  
                    </div>
                    <div className="RowPadding1">
                    <TextField
                    modo={props.modo}
                    type = 'titleAndDescription'
                    title = 'Implementaciones especiales: '
                    description = {props.implementaciones || '?'}
                    labelColor ={getColorMedio(props.tipoMedio)}
                    />
                    </div>
                    <div className="PropiedadCardsPosition1">
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
                            ubicacion = {props.ubicacion}
                            vista= {props.vista}
                            estadoActivo = {props.estadoActivo}
                            implementaciones={props.implementaciones}
                            alto = {props.alto}
                            ancho = {props.ancho}
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
                    tipoCard = 'abcSitios'
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

export default CardsInventarioComercial;
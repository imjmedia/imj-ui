import React from "react";
import TitlesCards from "../../Atomos/TitlesCards";
import TextField from "../../Atomos/TextField";
import PropertyBtn from "../../Atomos/PropertyBtn";
import DynamicButton from "../../Atomos/DynamicButton";
import PrecioCosto from "../../Atomos/PrecioCosto";
import Aside from "../../Moleculas/Aside";
import '../../../index.css';
import './index.css';

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
interface CardsAbcSitiosProps{
    show?: boolean | any;
    children?: any;
    handleClose?: () => void;
    typeModal?: 'Graficas' | 'Previsualizar' | any;
    tipoCard?: 'abcSitios' | 'inventarioComercial' | 'visualizadorPauta' | 'rutasImj';
    modo?: string | any;

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
}
const CardsAbcSitios = (props:CardsAbcSitiosProps) => {
    const Front = (props:CardsAbcSitiosProps) => {
        return(
            <div>
                <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                    <TitlesCards
                        modo={props.modo}
                        clave = {props.clave || 'undefined'}
                        type = {props.tipo || 'undefned'}
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
                        description = {(props.ancho || '0')+ 'm x '+ (props.alto || '0')+'m'}
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
    const Back = (props:CardsAbcSitiosProps) => {
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
                        color = 'amarillo'
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
        <div>
            <div className="TitleDescriptionCards">
                <TextField
                    modo={props.modo}
                    type = 'title'
                    title = 'Descripcion:'
                />
            </div>
            <div className="DescripcionCards TextOverflowDescription">
                <TextField
                modo={props.modo} 
                type = 'description'
                description = {props.descripcion || 'undefined'}
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
    return(
        <div className="CardsPaddings">
            <div className="CardAsideFlex">
                <div className="ContenedorCards">
                    <div className={"CardFront Card"+getModo(props.modo)}>
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
                    <div className={"CardBack Card"+getModo(props.modo)}>
                        <Back
                        modo={props.modo}
                        tipoMedio ={props.tipoMedio}
                        clave = {props.clave}
                        tipo = {props.tipo}
                        longitud = {props.longitud}
                        latitud = {props.latitud}
                        iluminacion = {props.iluminacion}
                        bloqueado = {props.bloqueado}
                        nicho = {props.nicho}
                        material = {props.material}
                        descripcion = {props.descripcion}
                        precio = {props.precio}
                        costo = {props.costo}
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
                    tipoCard='abcSitios'
                    tipoMedio={props.tipoMedio}
                    clave={props.clave}
                    proveedor={props.proveedor}
                    claveProveedor={props.claveProveedor}
                    alcance={props.alcance}
                    frecuencia={props.frecuencia}
                    totalUsuarios={props.totalUsuarios}
                    totalImpactos={props.totalImpactos}
                    porcentajeHombres={props.porcentajeHombres}
                    numeroHombres={props.numeroHombres}
                    porcentajeMujeres={props.porcentajeMujeres}
                    numeroMujeres={props.numeroMujeres}
                    nseA={props.nseA}
                    nseB={props.nseB}
                    nseC={props.nseC}
                    nseD={props.nseD}
                    nseE={props.nseE}

                    totalNseA={props.totalNseA}
                    totalNseB={props.totalNseB}
                    totalNseC={props.totalNseC}
                    totalNseD={props.totalNseD}
                    totalNseE={props.totalNseE}

                    edad13={props.edad13}
                    edad18={props.edad18}
                    edad26={props.edad26}
                    edad41={props.edad41}
                    edad55={props.edad55}

                    totalEdad13={props.totalEdad13}
                    totalEdad18={props.totalEdad18}
                    totalEdad26={props.totalEdad26}
                    totalEdad41={props.totalEdad41}
                    totalEdad55={props.totalEdad55}
                    tipo={props.tipo}
                    porcentajeUsuarios={props.porcentajeUsuarios}
                    porcentajeImpactos={props.porcentajeImpactos}
                    direccion={props.direccion}
                    colonia={props.colonia}
                    cdEdo={props.cdEdo}
                    vialidad={props.vialidad}
                    ancho={props.ancho}
                    alto={props.alto}
                    material={props.material}
                    acabados={props.acabados}
                    iluminacion={props.iluminacion}
                    vista={props.vista}
                    nicho={props.nicho}
                    estadoImplementaciones={props.estadoImplementaciones}
                    descripcion={props.descripcion}

                    imagen={props.imagen}
                    qr={props.qr}
                    />
            </div>
        </div>
    )
}
export default CardsAbcSitios;

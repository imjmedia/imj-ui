import React from "react";
import TitlesCards from "../TitlesCards";
import TextField from "../TextField";
import PropertyButton from "../PropertyButton";
import DynamicButton from "../DynamicButton";

interface CardsABCsitiosProps{
    tipoMedio: 'espectacular'| 'muro';
    clave: string;
    tipo: 'espectacular'| 'muro';
    direccion: string;
    ubicacion:string;
    vista: string;
    ancho: number;
    alto: number;
    implementaciones: string;
    estadoActivo: true | false;
    longitud: number;
    latitud:number;
    iluminacion: string;
    bloqueado: string;
    nicho: string;
    material: string;
    descripcion: string;
    precio: number;
    costo:number;
}

const getColorMedio = (props:CardsABCsitiosProps) => {
    switch (props.tipoMedio) {
        case 'espectacular': return('Rojo')            
        case 'muro': return('Azul')            
        default: return('Gris')
    }
}
const Cards = (props:CardsABCsitiosProps) => {
    const dataCards = {
        tipoMedio: props.tipoMedio,
        clave: props.clave,
        tipo: props.tipo,
        direccion: props.direccion,
        ubicacion:props.ubicacion,
        vista: props.vista,
        ancho: props.ancho,
        alto: props.alto,
        implementaciones: props.implementaciones,
        estadoActivo:props.estadoActivo,
        longitud: props.longitud,
        latitud:props.latitud,
        iluminacion: props.iluminacion,
        bloqueado: props.bloqueado,
        nicho: props.nicho,
        material: props.material,
        descripcion: props.descripcion,
        precio: props.precio,
        costo:props.costo
    }
    const Front = () => {
        return(
            <div>
                <div className={"EncabezadoCard BorderBottom"+getColorMedio(dataCards.tipoMedio)}>
                    <TitlesCards
                        identifier = {dataCards.clave}
                        type = {dataCards.tipo}
                    />
                </div>
                <div className="InformacionCard">
                    <div className="DireccionCards">
                        <TextField 
                            title = 'Dirección: '
                            description = {dataCards.direccion}
                        />
                    </div>
                    <div className="Columnas2 RowPadding1">
                        <TextField
                        title = 'Ubicación: '
                        description = {dataCards.ubicacion}                       
                        />
                        <TextField
                        title = 'Vista: '
                        description = {dataCards.vista}
                        />
                    </div>
                    <div className="Flexbox MedidasCards">
                        <TextField
                        title = 'Medidas: '
                        description = {dataCards.ancho}
                        labelColor ={getColorMedio(dataCards.tipoMedio)}
                        /> <h3>X</h3> 
                        <TextField
                        description = {dataCards.alto}
                        labelColor = {getColorMedio(dataCards.tipoMedio)}
                        /> <h3>metros</h3>
    
                    </div>
                    <div className="RowPadding1">
                    <TextField
                    title = 'Implementaciones especiales: '
                    description = {dataCards.implementaciones}
                    labelColor ={getColorMedio(dataCards.tipoMedio)}
                    />
                    </div>
                    <div className="PropiedadCardsPosition">
                        <PropertyButton
                        property = 'Activo'
                        color = 'Verde'
                        state = {dataCards.estadoActivo}
                        />
                    </div>
                </div>
    
            </div>
        )
    }
    const Back = () => {
        return(
            <div>
           <div className={"EncabezadoCard BorderBottom"+getColorMedio(dataCards.tipoMedio)}>
               <TitlesCards
                   identifier = {props.clave}
                   type = {props.tipo}
               />
           </div>
           <div className="Columnas2">
               <div className="PaddingTopBottom1">
                   <div className="IconoUbicacionGeografica">
                       <DynamicButton
                            button = 'arrastrar'
                            color = 'Amarillo'
                            size = 'Mediano'
                       />
                   </div>
                   <TextField
                   title = 'Longitud: '
                   description = {props.longitud}
                   />
                   <TextField
                   title = 'Latitud: '
                   description = {props.latitud}
                   />
               </div>
               <div className="PaddingTopBottom1">
                   <TextField
                   title = 'Iluminacion: '
                   description = {props.iluminacion}
                   />
                   <TextField
                   title = 'Bloqueado: '
                   description = {props.bloqueado}
                   />
                   <TextField
                   title = 'Nicho: '
                   description = {props.nicho}
                   />
                   <TextField
                   title = 'Material: '
                   description = {props.material}
                   />
               </div>
           </div>
           <div>
               <TextField
               description = 'Descripción: '
               />
               <div className="DescripcionCards">
                   <TextField 
                   title = {props.descripcion}
                   />
               </div>
           </div>
           <div className="PrecioCostoPosition">
               <PrecioCosto
               precio = {props.precio}
               costo = {props.costo}
               tipoMedio = {props.tipoMedio}
               />
           </div>
           </div>
        )
       }
}

   
const CardABCsitios = (props:CadsABCsitiosProps) =>{
        const tipoMedio = props.tipoMedio
        return(
            <div className="CardsPaddings">
                <div className="CardAsideFlex">
                    <div className="ContenedorCards">
                        <div className="Card CardFront">
                            <Front
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
                        <div className="Card CardBack">
                            <Back
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
                            <Icono
                                icono = 'etiqueta'
                                color = {getColorMedio(props.tipoMedio)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
export default CardABCsitios;




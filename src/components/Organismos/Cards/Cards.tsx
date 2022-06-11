import React from "react";
import CardsAbcSitios from "../CardsAbcSitios";
import CardsVisualizaPauta from "../CardsVisualizaPauta";
import CardsInventarioComercial from "../CardsInventarioComercial";
import CardsInventarioProveedores from "../CardsInventarioProveedores";
import CardsRutasIMJ from "../CardsRutasImj/CardsRutasImj";

interface CardsProps{
    ruta?: string | any;
    id?: string | any;
    inicioRuta?: string | any; 
    destinoRuta?: string | any;
    kilometraje?: number | any;
    tipoCard?: 'abcSitios' | 'inventarioComercial' | 'inventarioProveedores' | 'visualizadorPauta' | 'rutasImj' | any;
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
    estadoBloqueado?: true | false;
    estadoIluminacion?: true | false;
}
const Cards = (props:CardsProps) => {
    const modo = ''
    const tipoCard = props.tipoCard
    switch (tipoCard) {
        case 'abcSitios':
            return( 
                <CardsAbcSitios
                    modo ={modo}

                    tipoCard ={props.tipoCard}
                    tipoMedio ={props.tipoMedio}
                    clave = {props.clave}
                    tipo = {props.tipo}
                    direccion = {props.direccion}
                    ubicacion = {props.ubicacion}
                    vista = {props.vista}
                    ancho = {props.ancho}  
                    alto = {props.alto} 
                    implementaciones = {props.implementaciones} 
                    estadoActivo = {props.estadoActivo}  
                    longitud = {props.longitud} 
                    latitud = {props.latitud}  
                    iluminacion = {props.iluminacion}  
                    bloqueado = {props.bloqueado}  
                    nicho = {props.nicho}  
                    material = {props.material}  
                    descripcion = {props.descripcion}  
                    precio = {props.precio} 
                    costo = {props.costo} 
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
                    edad55 = {props.edad55} 
                    totalEdad13 = {props.totalEdad13} 
                    totalEdad18 = {props.totalEdad18} 
                    totalEdad26 = {props.totalEdad26} 
                    totalEdad41 = {props.totalEdad41} 
                    totalEdad55 = {props.totalEdad55} 
                    totalNseA = {props.totalNseA} 
                    totalNseB = {props.totalNseB} 
                    totalNseC = {props.totalNseC} 
                    totalNseD = {props.totalNseD} 
                    totalNseE = {props.totalNseE} 
                    porcentajeUsuarios = {props.porcentajeUsuarios}  
                    porcentajeImpactos = {props.porcentajeImpactos}  
                    colonia = {props.colonia} 
                    cdEdo = {props.cdEdo} 
                    vialidad = {props.cdEdo} 
                    acabados = {props.acabados} 
                    estadoImplementaciones = {props.estadoImplementaciones}  
                    imagen = {props.imagen} 
                    qr = {props.qr} 
                />
            )
        case 'visualizadorPauta':
            return(
                <CardsVisualizaPauta
                    modo = {modo}    

                    tipoMedio = {props.tipoMedio} 
                    clave = {props.clave}  
                    tipo = {props.tipo} 
                    direccion = {props.direccion} 
                    ancho = {props.ancho}  
                    alto = {props.alto}  
                    precio = {props.precio} 
                    descripcion = {props.descripcion}  
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
                    edad55 = {props.edad55} 
                    totalEdad13 = {props.totalEdad13} 
                    totalEdad18 = {props.totalEdad18} 
                    totalEdad26 = {props.totalEdad26} 
                    totalEdad41 = {props.totalEdad41} 
                    totalEdad55 = {props.totalEdad55} 
                    totalNseA = {props.totalEdad55} 
                    totalNseB = {props.totalNseB} 
                    totalNseC = {props.totalNseC} 
                    totalNseD = {props.totalNseD} 
                    totalNseE = {props.totalNseE} 
                    porcentajeUsuarios = {props.porcentajeUsuarios}  
                    porcentajeImpactos = {props.porcentajeImpactos}  
                    colonia = {props.colonia}  
                    cdEdo = {props.cdEdo}  
                    vialidad = {props.vialidad}  
                    acabados = {props.acabados}  
                    estadoImplementaciones = {props.estadoImplementaciones} 
                    material = {props.estadoImplementaciones}  
                    iluminacion = {props.iluminacion}  
                    vista = {props.vista}  
                    nicho = {props.nicho}  
                    imagen = {props.imagen} 
                    qr = {props.qr}           
                />
            )
        case 'inventarioComercial':
            return( 
                <CardsInventarioComercial
                    modo ={modo}

                    tipoMedio ={props.tipoMedio}
                    clave = {props.clave}
                    tipo = {props.tipo}
                    direccion = {props.direccion}
                    ubicacion = {props.ubicacion}
                    vista = {props.vista}
                    ancho = {props.ancho}  
                    alto = {props.alto} 
                    implementaciones = {props.implementaciones} 
                    estadoActivo = {props.estadoActivo}  
                    longitud = {props.longitud} 
                    latitud = {props.latitud}  
                    iluminacion = {props.iluminacion}  
                    bloqueado = {props.bloqueado}  
                    nicho = {props.nicho}  
                    material = {props.material}  
                    descripcion = {props.descripcion}  
                    precio = {props.precio} 
                    costo = {props.costo} 
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
                    edad55 = {props.edad55} 
                    totalEdad13 = {props.totalEdad13} 
                    totalEdad18 = {props.totalEdad18} 
                    totalEdad26 = {props.totalEdad26} 
                    totalEdad41 = {props.totalEdad41} 
                    totalEdad55 = {props.totalEdad55} 
                    totalNseA = {props.totalNseA} 
                    totalNseB = {props.totalNseB} 
                    totalNseC = {props.totalNseC} 
                    totalNseD = {props.totalNseD} 
                    totalNseE = {props.totalNseE} 
                    porcentajeUsuarios = {props.porcentajeUsuarios}  
                    porcentajeImpactos = {props.porcentajeImpactos}  
                    colonia = {props.colonia} 
                    cdEdo = {props.cdEdo} 
                    vialidad = {props.cdEdo} 
                    acabados = {props.acabados} 
                    estadoImplementaciones = {props.estadoImplementaciones}  
                    imagen = {props.imagen} 
                    qr = {props.qr}                  
                />
            )
        case 'inventarioProveedores':
            return(
                <CardsInventarioProveedores
                    modo = {modo}

                    tipoMedio = {props.tipoMedio}
                    clave = {props.clave} 
                    tipo = {props.tipo}
                    direccion = {props.direccion}
                    vista = {props.vista} 
                    ubicacion = {props.ubicacion}
                    ancho = {props.ancho} 
                    alto = {props.alto} 
                    implementaciones = {props.implementaciones}
                    estadoActivo = {props.estadoActivo}
                    estadoBloqueado = {props.estadoBloqueado}
                    estadoIluminacion = {props.estadoIluminacion}
                />
            )
        case 'rutasImj':
            return(
                    <CardsRutasIMJ 
                        modo={modo} 
                        estadoActivo={props.estadoActivo} 
                        tipoMedio={props.tipoMedio} 
                        ruta={props.ruta} 
                        id={props.id} 
                        clave={props.clave} 
                        ubicacion={props.ubicacion} 
                        inicioRuta={props.inicioRuta}  
                        destinoRuta={props.destinoRuta} 
                        kilometraje={props.kilometraje} 
                    />
            )
    }
}

export default Cards;
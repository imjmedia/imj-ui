/// <reference types="react" />
import '../../../index.css';
export declare const getColorMedio: (tipoMedio: any) => "Amarillo" | "Azul" | "Rojo" | "Magenta" | "Gris";
interface CardsInventarioComercialProps {
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
    precio?: number | any;
    costo?: number | any;
    proveedor?: string | any;
    claveProveedor?: string | any;
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeHombres?: number | any;
    numeroHombres?: number | any;
    porcentajeMujeres?: number | any;
    numeroMujeres?: number | any;
    nseA?: number | any;
    nseB?: number | any;
    nseC?: number | any;
    nseD?: number | any;
    nseE?: number | any;
    edad13?: number | any;
    edad18?: number | any;
    edad26?: number | any;
    edad41?: number | any;
    edad55?: number | any;
    totalEdad13?: number | any;
    totalEdad18?: number | any;
    totalEdad26?: number | any;
    totalEdad41?: number | any;
    totalEdad55?: number | any;
    totalNseA?: number | any;
    totalNseB?: number | any;
    totalNseC?: number | any;
    totalNseD?: number | any;
    totalNseE?: number | any;
    porcentajeUsuarios?: number | any;
    porcentajeImpactos?: number | any;
    colonia?: string | any;
    cdEdo?: string | any;
    vialidad?: string | any;
    acabados?: string | any;
    estadoImplementaciones?: true | false;
    imagen?: any;
    qr?: any;
    modo?: string | any;
}
declare const CardsInventarioComercial: (props: CardsInventarioComercialProps) => JSX.Element;
export default CardsInventarioComercial;

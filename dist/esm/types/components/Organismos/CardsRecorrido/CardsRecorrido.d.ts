/// <reference types="react" />
import '../../../index.css';
export declare const getColorMedio: (tipoMedio: any) => "Amarillo" | "Azul" | "Rojo" | "Magenta" | "Gris";
interface CardRecorridoProps {
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
    estadoActivo?: true | false;
    estadoIluminacion?: true | false;
    numeroHombres?: number | any;
    porcentajeHombres?: number | any;
    numeroMujeres?: number | any;
    porcentajeMujeres?: number | any;
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
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
}
export declare const CardsRecorrido: (props: CardRecorridoProps) => JSX.Element;
export default CardsRecorrido;

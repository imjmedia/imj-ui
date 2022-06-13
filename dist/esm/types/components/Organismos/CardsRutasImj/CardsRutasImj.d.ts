/// <reference types="react" />
import '../../../index.css';
export declare const getColorMedio: (tipoMedio: any) => "Amarillo" | "Azul" | "Rojo" | "Magenta" | "Gris";
interface CardsRutasIMJProps {
    tipoMedio: 'espectacular' | 'muro' | 'urbanos' | 'indoors' | any;
    ruta?: string | any;
    id?: string | any;
    clave?: string | any;
    ubicacion?: string | any;
    inicioRuta?: string | any;
    destinoRuta?: string | any;
    kilometraje?: number | any;
    estadoActivo?: true | false;
    modo?: string | any;
}
declare const CardsRutasIMJ: (props: CardsRutasIMJProps) => JSX.Element;
export default CardsRutasIMJ;

/// <reference types="react" />
import '../../../index.css';
export declare const getColorMedio: (tipoMedio: any) => "Amarillo" | "Azul" | "Rojo" | "Magenta" | "Gris";
interface PrecioCostoProps {
    type?: 'precio' | 'costo' | 'precioCosto';
    tipoMedio?: string | any;
    precio?: number | any;
    costo?: number | any;
}
declare const PrecioCosto: (props: PrecioCostoProps) => JSX.Element;
export default PrecioCosto;

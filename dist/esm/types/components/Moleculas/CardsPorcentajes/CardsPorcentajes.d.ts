/// <reference types="react" />
import "../../../index.css";
import "./index.css";
interface CardsPorcentajesProps {
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeHombres?: number | any;
    numeroHombres?: number | any;
    porcentajeMujeres?: number | any;
    numeroMujeres?: number | any;
    modo?: string | any;
}
declare const CardsPorcentajes: (props: CardsPorcentajesProps) => JSX.Element;
export default CardsPorcentajes;

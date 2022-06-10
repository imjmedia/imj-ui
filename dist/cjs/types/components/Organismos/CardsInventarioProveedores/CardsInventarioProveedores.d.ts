/// <reference types="react" />
import "../../../index.css";
import "./index.css";
interface CardsInventarioProveedoresProps {
    tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;
    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    vista?: string | any;
    ubicacion?: string | any;
    ancho?: number | any;
    alto?: number | any;
    implementaciones?: "Si" | "No" | any;
    estadoActivo?: true | false;
    estadoBloqueado?: true | false;
    estadoIluminacion?: true | false;
    modo?: string | null;
}
declare const CardsInventarioProveedores: (props: CardsInventarioProveedoresProps) => JSX.Element;
export default CardsInventarioProveedores;

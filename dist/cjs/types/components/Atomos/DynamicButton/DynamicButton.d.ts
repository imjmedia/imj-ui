/// <reference types="react" />
import "../../../index.css";
import "./index.css";
export interface DynaButtProps {
    type: "buttons" | "icons" | any;
    size?: "Grande" | "Mediano" | "Chico" | any;
    color?: "Amarillo" | "Azul" | "Rojo" | "Verde" | "Magenta" | "Gris" | "Aqua" | "Morado" | any;
    button?: "arrastrar" | "busqueda" | "carrito" | "circulo" | "descargar" | "editar" | "excel" | "guardar" | "kml" | "pauta" | "pdf" | "previsualizar" | "trafico" | "vaciar" | "graficas" | "ubicaciongeografica" | "iluminacion" | "bloqueado" | "nicho" | "material" | "cerrar" | "etiqueta" | "etiquetaAzul" | "etiquetaAmarillo" | "etiquetaMagenta" | "etiquetaRojo" | "hombres" | "mujeres" | any;
}
declare const DynamicButton: (props: DynaButtProps) => JSX.Element;
export default DynamicButton;

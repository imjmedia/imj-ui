/// <reference types="react" />
export declare const getColorMedio: (tipoMedio: any) => "Amarillo" | "Azul" | "Rojo" | "Magenta" | "Gris";
interface FormularioVisualizaPautaProps {
    modo?: any;
    responsables?: any[];
    campanias?: any[];
    empresa?: string;
}
declare const FormularioVisualizaPauta: (props: FormularioVisualizaPautaProps) => JSX.Element;
export default FormularioVisualizaPauta;

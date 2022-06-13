/// <reference types="react" />
import '../../../index.css';
interface PropertyBtnProps {
    property?: string | any;
    color?: 'Amarillo' | 'Azul' | 'Rojo' | 'Verde' | 'Magenta' | 'Gris' | 'Aqua' | 'Morado' | any;
    state?: true | false;
}
declare const PropertyBtn: (props: PropertyBtnProps) => JSX.Element;
export default PropertyBtn;

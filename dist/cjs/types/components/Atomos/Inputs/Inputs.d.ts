/// <reference types="react" />
import '../../../index.css';
interface InputsProps {
    justify?: 'left' | 'right' | any;
    placeholder?: string | any;
    color?: 'Amarillo' | 'Azul' | 'Rojo' | 'Verde' | 'Magenta' | 'Gris' | 'Aqua' | 'Morado' | any;
    type?: 'date' | 'aumentoDecremento' | any;
    options?: any;
    value?: any;
}
declare const Inputs: (props: InputsProps) => JSX.Element;
export default Inputs;

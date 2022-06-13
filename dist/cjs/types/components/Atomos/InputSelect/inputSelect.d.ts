/// <reference types="react" />
interface InputsProps {
    justify?: 'left' | 'right' | any;
    placeholder?: string | any;
    color?: 'Amarillo' | 'Azul' | 'Rojo' | 'Verde' | 'Magenta' | 'Gris' | 'Aqua' | 'Morado' | any;
    type?: 'date' | 'aumentoDecremento' | any;
    options?: any;
    value?: any;
}
declare const InputSelect: (props: InputsProps) => JSX.Element;
export default InputSelect;

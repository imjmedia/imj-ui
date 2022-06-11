import React from "react";

interface InputsProps{
    justify?: 'left' | 'right' | any;
    placeholder?: string | any;
    color?: 'Amarillo' | 'Azul' | 'Rojo' | 'Verde' | 'Magenta' | 'Gris' | 'Aqua' | 'Morado' | any;
    type?: 'date' | 'aumentoDecremento' | any;
    options?: any;
    value?: any;
}
const InputSelect= (props:InputsProps)=>{
    var options = props.options;
    const option = options.map((anOption:any) => <option key={anOption}>{anOption}</option>)
        if(props.options.length >0){
            return(
                    <select name="" id="" value ={props.value}>
                        {option}
                    </select>
            )
        }
        else{
            return(
                <h5>No hay opciones</h5>
            )
        }
}
export default InputSelect;
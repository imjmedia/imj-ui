import React from "react";
import './index.css'
import '../../../index.css'


interface PropertyBtnProps{
    property?: string | any;
    color?: 'Amarillo' | 'Azul' | 'Rojo' | 'Verde' | 'Magenta' | 'Gris' | 'Aqua' | 'Morado' | any;
    state?: true | false;
}
const PropertyBtn = (props:PropertyBtnProps) => {
    function titleCase(text:any){
        return (text[0].toUpperCase() + text.slice(1).toLowerCase())
    }
    const property = props.property
    const color = titleCase(props.color)
    const state = props.state
    if (state === true){
        return(
            <div className={"Propiedad"+color}>
                {property}
            </div>
        )
    } else {
        return(
            <div className="Propiedad">
                {property}
            </div>
        )
    }
}
export default PropertyBtn;
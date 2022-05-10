import React from "react";


interface PropertyButtonProps{
    property: string;
    color: 'Azul' | 'Rojo' | 'Aqua' | 'Magenta' | 'Amarillo' | 'Morado' | 'Verde' | 'Gris';
    state: true | false;
}
const PropertyButton = (props:PropertyButtonProps) => {
    const property = props.property
    const color = props.color
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
export default PropertyButton;
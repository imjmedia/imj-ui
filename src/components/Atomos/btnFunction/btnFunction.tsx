import React from "react";
import DynamicButton from "../DynamicButton";


interface BtnFunctionProps{
    onClick?: ()=>void;

    clic?: any;
    color?: 
    'Azul' |
    'Amarillo'|
    'Rojo' |
    'Verde';
    button?:
    'arrastrar' | 
    'busqueda' | 
    'carrito' | 
    'circulo' | 
    'descargar' | 
    'editar' | 
    'excel' | 
    'guardar' | 
    'kml' | 
    'pauta' | 
    'pdf' | 
    'previsualizar' | 
    'trafico' | 
    'vaciar';
}


const BtnFunction = (props: BtnFunctionProps) => {
    return(
        <div onClick={props.clic}>
            <DynamicButton
                type='buttons'
                button={props.button}
                size = 'grande'
                color = {props.color}
            />
        </div>
    )
}

export default BtnFunction;
import React from "react";
import DynamicButton from "../DynamicButton";


interface BtnFunctionProps{
    onClick?: ()=>void;

    color?: 
    'Azul' |
    'Amarillo'|
    'Rojo' |
    'Verde' |
    'none' |
    any;
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
    'vaciar' |
    'cerrar' |
    'encendido' |
    'usuarioNuevo' |
    'agregar' |
    'bloqueado' |
    'noBloqueado' |
    'iluminacion' |
    'noIluminado' |
    any;
}


const BtnFunction = (props: BtnFunctionProps) => {
    return(
        <div onClick={props.onClick}>
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
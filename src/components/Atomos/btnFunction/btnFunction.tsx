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
    'logOut' |
    'cerrarBorder' |
    'indoors' |
    'indoorsNegro' |
    'sitios' |
    'sitiosNegro' |
    'urbanos' |
    'urbanosNegro' |
    'cerrarBorder' |
    'arrastrarEjes'|
    'arrastrarMano'|
    'editarCuaderno'|
    'previsualizarDocumento'|
    'revertirVaciar'|
    'subir'|
    'urbanosFront'|
    'validadorFalse'|
    'validadorTrue'|
    'vallas'|
    'vallasFront'|
    'mapa'|
    'share'|
    'orientar'| 
    'minimizar'| 
    'maximizar'| 
    'flecha'| 
    any;
    id?: string;
    style?:any;
    title?: string;
    size?: 'Grande' | 'Mediano' | 'Chico';
}


const BtnFunction = (props: BtnFunctionProps) => {
    return(
        <div>
            <DynamicButton
                id={props.id}
                onClick={props.onClick}
                type='buttons'
                button={props.button}
                size = {props.size ? props.size :'grande'}
                color = {props.color}
                style={props.style}
                title={props.title}
            />
        </div>
    )
}

export default BtnFunction;
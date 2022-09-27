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
    any;
    id?: string;
}


const BtnFunction = (props: BtnFunctionProps) => {
    return(
        <div onClick={props.onClick} id={props.id}>
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
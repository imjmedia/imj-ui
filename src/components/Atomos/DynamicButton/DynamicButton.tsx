import React, { useEffect, useState } from "react";
import '../../../index.css';

import agregar from "../../Img/Botones/agregar.svg";
import arrastrar from "../../Img/Botones/arrastrar.svg";
import arrastrarEjes from "../../Img/Botones/arrastrarEjes.svg";
import arrastrarMano from "../../Img/Botones/arrastrarMano.svg";
import bloqueado from "../../Img/Botones/bloqueado.svg";
import busqueda from "../../Img/Botones/busqueda.svg";
import carrito from "../../Img/Botones/carrito.svg";
import cerrarBorder from '../../Img/Botones/cerrarBorder.svg';
import circulo from "../../Img/Botones/circulo.svg";
import descargar from "../../Img/Botones/descargar.svg";
import editar from "../../Img/Botones/editar.svg";
import editarCuaderno from "../../Img/Botones/editarCuaderno.svg";
import encendido from "../../Img/Botones/encendido.svg";
import excel from "../../Img/Botones/excel.svg";
import flecha from "../../Img/Botones/flecha.svg";
import graficas from "../../Img/Botones/graficas.svg";
import guardar from "../../Img/Botones/guardar.svg";
import iluminacion from '../../Img/Botones/iluminacion.svg';
import indoors from "../../Img/Botones/indoors.svg";
import indoorsNegro from "../../Img/Botones/indoorsNegro.svg";
import kml from "../../Img/Botones/kml.svg";
import logOut from '../../Img/Botones/logOut.svg';
import mapa from "../../Img/Botones/mapa.svg";
import maximizar from "../../Img/Botones/maximizar.svg";
import menu from "../../Img/Botones/menu.svg";
import menuDarkMode from "../../Img/Botones/menuDarkMode.svg";
import minimizar from "../../Img/Botones/minimizar.svg";
import noBloqueado from "../../Img/Botones/noBloqueado.svg";
import noIluminado from '../../Img/Botones/noIluminado.svg';
import orientar from "../../Img/Botones/orientar.svg";
import pauta from "../../Img/Botones/pauta.svg";
import pdf from "../../Img/Botones/pdf.svg";
import previsualizar from "../../Img/Botones/previsualizar.svg";
import previsualizarDocumento from "../../Img/Botones/previsualizarDocumento.svg";
import revertirVaciar from "../../Img/Botones/revertirVaciar.svg";
import share from "../../Img/Botones/share.svg";
import sitios from "../../Img/Botones/sitios.svg";
import sitiosNegro from "../../Img/Botones/sitiosNegro.svg";
import subir from "../../Img/Botones/subir.svg";
import trafico from "../../Img/Botones/trafico.svg";
import urbanos from "../../Img/Botones/urbanos.svg";
import urbanosFront from "../../Img/Botones/urbanosFront.svg";
import urbanosNegro from "../../Img/Botones/urbanosNegro.svg";
import usuarioNuevo from "../../Img/Botones/usuarioNuevo.svg";
import vaciar from "../../Img/Botones/vaciar.svg";
import validadorFalse from "../../Img/Botones/validadorFalse.svg";
import validadorTrue from "../../Img/Botones/validadorTrue.svg";
import vallas from "../../Img/Botones/vallas.svg";
import vallasFront from "../../Img/Botones/vallasFront.svg";
import cerrar from "../../Img/Iconos/cerrar.svg";



/*importación de Íconos*/
// import bloqueado from "../../Img/Iconos/bloqueado.svg";
import etiqueta from "../../Img/Iconos/etiqueta.svg";
import etiquetaAmarillo from "../../Img/Iconos/etiquetaAmarillo.svg";
import etiquetaAzul from "../../Img/Iconos/etiquetaAzul.svg";
import etiquetaMagenta from "../../Img/Iconos/etiquetaMagenta.svg";
import etiquetaRojo from "../../Img/Iconos/etiquetaRojo.svg";
// import iluminacion from "../../Img/Iconos/iluminacion.svg";
import hombres from "../../Img/Iconos/hombres.svg";
import material from "../../Img/Iconos/material.svg";
import mujeres from "../../Img/Iconos/mujeres.svg";
import nicho from "../../Img/Iconos/nicho.svg";
import ubicaciongeografica from "../../Img/Iconos/ubicaciongeografica.svg";

interface DynaButtProps {
    type: 
        'buttons' | 
        'icons' | 
        any;

    size?: 
        'Grande' | 
        'Mediano' | 
        'Chico' | 
        any;

    color?: 
        'Amarillo' | 
        'Azul' | 
        'Rojo' | 
        'Verde' | 
        'Magenta' | 
        'Gris' | 
        'Aqua' | 
        'Morado' |
        'none';

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
        'graficas' | 
        'ubicaciongeografica' | 
        'iluminacion' | 
        'bloqueado' | 
        'nicho' | 
        'material' | 
        'cerrar' | 
        'etiqueta' | 
        'etiquetaAzul' | 
        'etiquetaAmarillo' | 
        'etiquetaMagenta' | 
        'etiquetaRojo' | 
        'hombres' | 
        'mujeres'|
        'encendido' | 
        'usuarioNuevo' |
        'agregar' |
        'bloqueado' |
        'noBloqueado' |
        'iluminacion' |
        'noIluminado' |
        'logOut' |
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
        'mapa' |   
        'share'| 
        'orientar'| 
        'minimizar'| 
        'maximizar'| 
        'flecha'| 
        string
        ;
    
    onClick?: 
        any;
    
    id?: string;
    validador?: boolean;
    style?: any;
    title?: string;
}

interface buttonsArrInterface {
    [key: string]: string;
}

const buttonsArr:buttonsArrInterface = {
    'arrastrar': arrastrar,
    'busqueda': busqueda,
    'carrito': carrito,
    'circulo': circulo,
    'descargar': descargar,
    'editar': editar,
    'excel': excel,
    'guardar': guardar,
    'kml': kml,
    'pauta': pauta,
    'pdf': pdf,
    'previsualizar': previsualizar,
    'trafico': trafico,
    'vaciar': vaciar,
    'graficas': graficas,
    'menu': menu,
    'cerrar': cerrar,
    'encendido': encendido,
    'usuarioNuevo': usuarioNuevo,
    'bloqueado': bloqueado,
    'noBloqueado': noBloqueado,
    'iluminacion': iluminacion,
    'noIluminado': noIluminado,
    'agregar': agregar,
    'logOut': logOut,
    'cerrarBorder': cerrarBorder,
    'sitios': sitios,
    'sitiosNegro': sitiosNegro,
    'indoors': indoors,
    'indoorsNegro': indoorsNegro,
    'urbanos': urbanos,
    'urbanosNegro': urbanosNegro,
    'arrastrarEjes': arrastrarEjes,
    'arrastrarMano': arrastrarMano,
    'editarCuaderno': editarCuaderno,
    'previsualizarDocumento': previsualizarDocumento,
    'revertirVaciar': revertirVaciar,
    'subir': subir,
    'urbanosFront': urbanosFront,
    'validadorFalse': validadorFalse,
    'validadorTrue': validadorTrue,
    'vallas': vallas,
    'vallasFront': vallasFront,
    'mapa': mapa,
    'share': share,
    'orientar': orientar,
    'minimizar': minimizar,
    'maximizar': maximizar,
    'flecha': flecha,

}

const iconsArr:buttonsArrInterface ={
    'ubicaciongeografica': ubicaciongeografica,
    'iluminacion': iluminacion,
    'bloqueado': bloqueado,
    'nicho': nicho,
    'material': material,
    'etiqueta': etiqueta,
    'etiquetaAzul': etiquetaAzul,
    'etiquetaAmarillo': etiquetaAmarillo,
    'etiquetaMagenta': etiquetaMagenta,
    'etiquetaRojo': etiquetaRojo,
    'hombres': hombres,
    'mujeres': mujeres,
}

const DynamicButton = (props:DynaButtProps) => {
    
    const titleCase = (text: any) => {
        return (text[0].toUpperCase() + text.slice(1).toLowerCase())
    }

    const data = {
        size: titleCase(props.size || 'Chico'),
        button: props.button,
        color: titleCase(props.color || 'Azul')
    }
    const type = (props.type)
    const arregloEtiqueta: any = "etiqueta" + data.color

    const retornoButtonComponent = (name:string) => {
        if (type === 'buttons') {
            return (
                buttonsArr[name]
            )
        } else {
            return (
                iconsArr[name]
            )
        }
    }
    
    
    const TypeButton = (props: any) => {
        const buttonComponent = retornoButtonComponent(props.name);
        if (buttonComponent === undefined) {
            return (
                <></>
            )
        } else {
            return (
                <img src={buttonComponent} alt="" />
            )
        }
    }

    if (type === 'buttons') {
        if (data.size === 'Chico') {
            return (
                <div className={"Btn" + data.size + " Btn" + data.color} onClick={props.onClick} id={props.id} style={props.style} title={props.title}>
                    <p>
                        {data.button}
                    </p>
                </div>
            )
        } else {
            return (
                <div style={{position:'relative'}}>
                    <div>
                        {props.validador ?  <div
                        style={{
                        position:'absolute',
                        background:'#FFF',
                        minWidth:'2rem',
                        top:'-1rem',
                        right:'-1rem',
                        borderRadius:'50%',
                        zIndex:'1',
                        boxShadow:'-.2rem .2rem 1rem #52525220',
                        display: 'grid',
                        placeItems:'center'
                        }}>
                        <img src={validadorTrue} alt="" style={{width:'2rem',height:'2rem',}}/>
                        </div> : <></>}
                        <div className={'Btn' + data.size + " Btn" + data.color} onClick={props.onClick} id={props.id} style={props.style} title={props.title}>
                            <TypeButton name={data.button} />
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        if (data.button === 'etiqueta') {
            return (
                <div className={"Icono"}id={props.id}>
                    <img src={iconsArr[arregloEtiqueta]} alt=""  />
                </div>
            )
        } else {
            return (
                <div className={"Icono Icono" + data.color} id={props.id}>
                    <TypeButton name={data.button} />
                </div>
            )
        }
    }
}

export default DynamicButton;
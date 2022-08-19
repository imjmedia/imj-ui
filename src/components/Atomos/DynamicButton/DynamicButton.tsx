import React, { useEffect, useState } from "react";
import '../../../index.css';

import agregar from "../../Img/Botones/agregar.svg";
import arrastrar from "../../Img/Botones/arrastrar.svg";
import bloqueado from "../../Img/Botones/bloqueado.svg";
import busqueda from "../../Img/Botones/busqueda.svg";
import carrito from "../../Img/Botones/carrito.svg";
import cerrarBorder from '../../Img/Botones/cerrarBorder.svg';
import circulo from "../../Img/Botones/circulo.svg";
import descargar from "../../Img/Botones/descargar.svg";
import editar from "../../Img/Botones/editar.svg";
import encendido from "../../Img/Botones/encendido.svg";
import excel from "../../Img/Botones/excel.svg";
import graficas from "../../Img/Botones/graficas.svg";
import guardar from "../../Img/Botones/guardar.svg";
import iluminacion from '../../Img/Botones/iluminacion.svg';
import indoors from "../../Img/Botones/indoors.svg";
import indoorsNegro from "../../Img/Botones/indoorsNegro.svg";
import kml from "../../Img/Botones/kml.svg";
import logOut from '../../Img/Botones/logOut.svg';
import menu from "../../Img/Botones/menu.svg";
import menuDarkMode from "../../Img/Botones/menuDarkMode.svg";
import noBloqueado from "../../Img/Botones/noBloqueado.svg";
import noIluminado from '../../Img/Botones/noIluminado.svg';
import pauta from "../../Img/Botones/pauta.svg";
import pdf from "../../Img/Botones/pdf.svg";
import previsualizar from "../../Img/Botones/previsualizar.svg";
import sitios from "../../Img/Botones/sitios.svg";
import sitiosNegro from "../../Img/Botones/sitiosNegro.svg";
import trafico from "../../Img/Botones/trafico.svg";
import urbanos from "../../Img/Botones/urbanos.svg";
import urbanosNegro from "../../Img/Botones/urbanosNegro.svg";
import usuarioNuevo from "../../Img/Botones/usuarioNuevo.svg";
import vaciar from "../../Img/Botones/vaciar.svg";
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
        string
        ;
    
    onClick?: 
        any;
    
        id?: string;
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
                <div className={"Btn" + data.size + " Btn" + data.color} onClick={props.onClick} id={props.id}>
                    <p>
                        {data.button}
                    </p>
                </div>
            )
        } else {
            return (
                <div className={'Btn' + data.size + " Btn" + data.color} onClick={props.onClick} id={props.id}>
                    <TypeButton name={data.button} />
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
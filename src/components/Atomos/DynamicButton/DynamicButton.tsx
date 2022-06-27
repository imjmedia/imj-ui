import React, { useEffect, useState } from "react";
import '../../../index.css';

import graficas from "../../Img/Botones/graficas.svg";
import arrastrar from "../../Img/Botones/arrastrar.svg";
import busqueda from "../../Img/Botones/busqueda.svg";
import carrito from "../../Img/Botones/carrito.svg";
import circulo from "../../Img/Botones/circulo.svg";
import descargar from "../../Img/Botones/descargar.svg";
import editar from "../../Img/Botones/editar.svg";
import excel from "../../Img/Botones/excel.svg";
import guardar from "../../Img/Botones/guardar.svg";
import kml from "../../Img/Botones/kml.svg";
import pauta from "../../Img/Botones/pauta.svg";
import pdf from "../../Img/Botones/pdf.svg";
import previsualizar from "../../Img/Botones/previsualizar.svg";
import trafico from "../../Img/Botones/trafico.svg";
import vaciar from "../../Img/Botones/vaciar.svg";
import menu from "../../Img/Botones/menu.svg";
import menuDarkMode from "../../Img/Botones/menuDarkMode.svg";
/*importación de Íconos*/
import bloqueado from "../../Img/iconos/bloqueado.svg";
import cerrar from "../../Img/iconos/cerrar.svg";
import etiqueta from "../../Img/iconos/etiqueta.svg";
import etiquetaAzul from "../../Img/iconos/etiquetaAzul.svg";
import etiquetaAmarillo from "../../Img/iconos/etiquetaAmarillo.svg";
import etiquetaRojo from "../../Img/iconos/etiquetaRojo.svg";
import etiquetaMagenta from "../../Img/iconos/etiquetaMagenta.svg";
import iluminacion from "../../Img/iconos/iluminacion.svg";
import material from "../../Img/iconos/material.svg";
import nicho from "../../Img/iconos/nicho.svg";
import ubicaciongeografica from "../../Img/iconos/ubicaciongeografica.svg";
import hombres from "../../Img/iconos/hombres.svg";
import mujeres from "../../Img/iconos/mujeres.svg";

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
        'mujeres';
    
    onClick?: 
        any;
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
                <div className={"Btn" + data.size + " Btn" + data.color} onClick={props.onClick}>
                    <p>
                        {data.button}
                    </p>
                </div>
            )
        } else {
            return (
                <div className={'Btn' + data.size + " Btn" + data.color} onClick={props.onClick}>
                    <TypeButton name={data.button} />
                </div>
            )
        }
    } else {
        if (data.button === 'etiqueta') {
            return (
                <div className={"Icono"}>
                    <img src={iconsArr[arregloEtiqueta]} alt="" />
                </div>
            )
        } else {
            return (
                <div className={"Icono Icono" + data.color}>
                    <TypeButton name={data.button} />
                </div>
            )
        }
    }
}

export default DynamicButton;
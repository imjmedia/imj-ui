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

interface DynaButtProps{
    type: 'buttons' | 'icons' | any;
    size?: 'Grande' | 'Mediano' | 'Chico' | any;
    color?: 'Amarillo' | 'Azul' | 'Rojo' | 'Verde' | 'Magenta' | 'Gris' | 'Aqua' | 'Morado' | any;
    button?: 'arrastrar' | 'busqueda' | 'carrito' | 'circulo' | 'descargar' | 'editar' | 'excel' | 'guardar' | 'kml' | 'pauta' | 'pdf' | 'previsualizar' | 'trafico' | 'vaciar' | 'graficas' | 'ubicaciongeografica' | 'iluminacion' | 'bloqueado' | 'nicho' | 'material' | 'cerrar' | 'etiqueta' | 'etiquetaAzul' | 'etiquetaAmarillo' | 'etiquetaMagenta' | 'etiquetaRojo' | 'hombres' | 'mujeres' | any;
    onClick?: any;
}
const DynamicButton = (props:DynaButtProps) => {
    function titleCase(text:any){
    return (text[0].toUpperCase() + text.slice(1).toLowerCase())
    }
    function retornoButtonComponent(){
        if (type === 'buttons'){
            return(
                buttons 
            )
        } else {
            return(
                icons 
            ) 
        }
    }
    const data = {
        size: titleCase(props.size),
        button: props.button,
        color : titleCase(props.color)
    }
    const type = (props.type)
    const arregloEtiqueta:any = "etiqueta"+data.color

    const [buttons, setButtons] = useState([]);
    const InitButtons =()=> {
        let tmpBtn:any = [];
            tmpBtn['arrastrar'] = arrastrar;
            tmpBtn['busqueda'] = busqueda;
            tmpBtn['carrito'] = carrito;
            tmpBtn['circulo'] = circulo;
            tmpBtn['descargar'] = descargar;
            tmpBtn['editar'] = editar;
            tmpBtn['excel'] = excel;
            tmpBtn['guardar'] = guardar;
            tmpBtn['kml'] = kml;
            tmpBtn['pauta'] = pauta;
            tmpBtn['pdf'] = pdf;
            tmpBtn['previsualizar'] = previsualizar;
            tmpBtn['trafico'] = trafico;
            tmpBtn['vaciar'] = vaciar;
            tmpBtn['graficas'] = graficas;
            tmpBtn['menu'] = menu;
            setButtons(tmpBtn);
    }
    useEffect(()=>{
        InitButtons()
    },[])

    const [icons, setIcons] = useState([]);
    const InitIcons = () => {
        let tmpIcon:any =[];
            tmpIcon['ubicaciongeografica'] = ubicaciongeografica;
            tmpIcon['iluminacion'] = iluminacion;
            tmpIcon['bloqueado'] = bloqueado;
            tmpIcon['nicho'] = nicho;
            tmpIcon['material'] = material;
            tmpIcon['cerrar'] = cerrar;
            tmpIcon['etiqueta'] = etiqueta;
            tmpIcon['etiquetaAzul'] = etiquetaAzul;
            tmpIcon['etiquetaAmarillo'] = etiquetaAmarillo;
            tmpIcon['etiquetaMagenta'] = etiquetaMagenta;
            tmpIcon['etiquetaRojo'] = etiquetaRojo;
            tmpIcon['hombres'] = hombres;
            tmpIcon['mujeres'] = mujeres;
            setIcons(tmpIcon);
    }
    useEffect(()=>{
        InitIcons()
    },[])

    const TypeButton = (props:any) =>{
        const buttonComponent = retornoButtonComponent()[props.name];
        if (buttonComponent === undefined){
            return (
                <></>
            )
        } else {
            return(
                <img src={buttonComponent} alt="" />
            )
        }
    }
    if (type === 'buttons'){
        if (data.size === 'Chico'){
            return (
                <div className={"Btn"+data.size+" Btn"+data.color} onClick={props.onClick}>
                    <p>
                        {data.button}
                    </p>
                </div>
            )
        }else{       
            return(
                <div className={'Btn'+data.size+" Btn"+data.color} onClick={props.onClick}>
                    <TypeButton name={data.button}/>
                </div>
            )
        }
    } else {
        if (data.button==='etiqueta'){
            return(
                <div className={"Icono"}>
                    <img src={icons[arregloEtiqueta]} alt="" />
                </div>
            )
        } else{       
            return(
                <div className={"Icono Icono"+data.color}>
                    <TypeButton name={data.button} />
                </div>
            )
        }
    }
}

export default DynamicButton;
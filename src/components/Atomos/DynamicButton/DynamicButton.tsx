import React, { useEffect, useState } from "react";
import '../../../index.css';


const graficas =require ('./IMG/botones/graficas.svg') as string;
const arrastrar =require ("./IMG/botones/arrastrar.svg")as string;
const busqueda =require ("./IMG/botones/busqueda.svg")as string;
const carrito =require ("./IMG/botones/carrito.svg")as string;
const circulo =require ("./IMG/botones/circulo.svg")as string;
const descargar =require ("./IMG/botones/descargar.svg")as string;
const editar =require ("./IMG/botones/editar.svg")as string;
const excel =require ("./IMG/botones/excel.svg")as string;
const guardar =require ("./IMG/botones/guardar.svg")as string;
const kml =require ("./IMG/botones/kml.svg")as string;
const pauta =require ("./IMG/botones/pauta.svg")as string;
const pdf =require ("./IMG/botones/pdf.svg")as string;
const previsualizar =require ("./IMG/botones/previsualizar.svg")as string;
const trafico =require ("./IMG/botones/trafico.svg")as string;
const vaciar =require ("./IMG/botones/vaciar.svg")as string;
const menu =require ("./IMG/botones/menu.svg")as string;
const menuDarkMode =require ("./IMG/botones/menuDarkMode.svg")as string;
/*importación de Íconos*/
const bloqueado =require ("./IMG/iconos/bloqueado.svg") as string;
const cerrar =require ("./IMG/iconos/cerrar.svg") as string;
const etiqueta =require ("./IMG/iconos/etiqueta.svg") as string;
const etiquetaAzul =require ("./IMG/iconos/etiquetaAzul.svg") as string;
const etiquetaAmarillo =require ("./IMG/iconos/etiquetaAmarillo.svg") as string;
const etiquetaRojo =require ("./IMG/iconos/etiquetaRojo.svg") as string;
const etiquetaMagenta =require ("./IMG/iconos/etiquetaMagenta.svg") as string;
const iluminacion =require ("./IMG/iconos/iluminacion.svg") as string;
const material =require ("./IMG/iconos/material.svg") as string;
const nicho =require ("./IMG/iconos/nicho.svg") as string;
const ubicaciongeografica =require ("./IMG/iconos/ubicaciongeografica.svg") as string;
const hombres =require ("./IMG/iconos/hombres.svg") as string;
const mujeres =require ("./IMG/iconos/mujeres.svg") as string;

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
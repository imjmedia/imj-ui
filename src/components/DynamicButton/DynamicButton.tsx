import React, { useEffect, useState } from "react";

const arrastrar = require("./img/arrastrar.svg")as string;
const busqueda = require("./img/busqueda.svg")as string;
const calendario = require("./img/calendario.svg")as string;
const carrito = require("./img/carrito.svg")as string;
const circulo = require("./img/circulo.svg")as string;
const descargar = require("./img/descargar.svg")as string;
const editar = require("./img/editar.svg")as string;
const excel = require("./img/excel.svg")as string;
const graficas = require("./img/graficas.svg")as string;
const guardar = require("./img/guardar.svg")as string;
const kml = require("./img/kml.svg")as string;
const mas = require("./img/mas.svg")as string;
const pauta = require("./img/pauta.svg")as string;
const pdf = require("./img/pdf.svg")as string;
const previsualizar = require("./img/previsualizar.svg")as string;
const trafico = require("./img/trafico.svg")as string;
const vaciar = require("./img/vaciar.svg")as string;

interface DynamicButtonProps {
    button: 'arrastrar' | 'busqueda' | 'calendario' | 'carrito' | 'circulo' | 'descargar' | 'editar' | 'excel' | 'graficas' | 'guardar' | 'kml' | 'mas' | 'pauta' | 'pdf' | 'previsualizar' | 'trafico' | 'vaciar'
    size: 'Grande' | 'Mediano' | 'Chico';
    color: 'Azul' | 'Rojo' | 'Aqua' | 'Magenta' | 'Amarillo' | 'Morado' | 'Verde' | 'Gris';
}



const DynamicButton = (props:DynamicButtonProps) => {
        function titleCase(text:string){
        return (text[0].toUpperCase() + text.slice(1).toLowerCase())
        }
        const size = titleCase(props.size)
        const button = [titleCase(props.button)]
        const color = titleCase(props.color)
        const [buttons, setButtons] = useState([])

        const InitButtons =()=> {
            let tmpBtn:any = [];
                tmpBtn ['arrastrar'] = arrastrar;
                tmpBtn ['busqueda'] = busqueda;
                tmpBtn ['carrito'] = carrito;
                tmpBtn ['circulo'] = circulo;
                tmpBtn ['descargar'] = descargar;
                tmpBtn ['editar'] = editar;
                tmpBtn ['excel'] = excel;
                tmpBtn ['guardar'] = guardar;
                tmpBtn ['kml'] = kml;
                tmpBtn ['pauta'] = pauta;
                tmpBtn ['pdf'] = pdf;
                tmpBtn ['previsualizar'] = previsualizar;
                tmpBtn ['trafico'] = trafico;
                tmpBtn ['vaciar'] = vaciar;
                tmpBtn ['graficas'] = graficas;
                setButtons(tmpBtn);
        }

        useEffect(()=>{
            InitButtons()
        },[])
        const TypeButton = () =>{
            const buttonComponent = [props.button];
            if (buttonComponent === undefined){
                return (
                    <></>
                )
            } else {
                return(
                    {buttonComponent}
                )
            }
        }

    
    if (size === 'Chico'){
        return (
            <div className={"Btn"+size + " " + "Btn"+ color}>
                <TypeButton
                    nombre = {button}
                />
            </div>
        )
        }


}

    

export default DynamicButton;
import React, { useEffect, useState } from "react";
import "../../../index.css";
import "./index.css";

const graficas = require("../../../img/botones/graficas.svg") as string;
const arrastrar = require("../../../img/botones/arrastrar.svg") as string;
const busqueda = require("../../../img/botones/busqueda.svg") as string;
const carrito = require("../../../img/botones/carrito.svg") as string;
const circulo = require("../../../img/botones/circulo.svg") as string;
const descargar = require("../../../img/botones/descargar.svg") as string;
const editar = require("../../../img/botones/editar.svg") as string;
const excel = require("../../../img/botones/excel.svg") as string;
const guardar = require("../../../img/botones/guardar.svg") as string;
const kml = require("../../../img/botones/kml.svg") as string;
const pauta = require("../../../img/botones/pauta.svg") as string;
const pdf = require("../../../img/botones/pdf.svg") as string;
const previsualizar =
  require("../../../img/botones/previsualizar.svg") as string;
const trafico = require("../../../img/botones/trafico.svg") as string;
const vaciar = require("../../../img/botones/vaciar.svg") as string;
const menu = require("../../../img/botones/menu.svg") as string;
const menuDarkMode = require("../../../img/botones/menuDarkMode.svg") as string;
/*importación de Íconos*/
const bloqueado = require("../../../img/iconos/bloqueado.svg") as string;
const cerrar = require("../../../img/iconos/cerrar.svg") as string;
const etiqueta = require("../../../img/iconos/etiqueta.svg") as string;
const etiquetaAzul = require("../../../img/iconos/etiquetaAzul.svg") as string;
const etiquetaAmarillo =
  require("../../../img/iconos/etiquetaAmarillo.svg") as string;
const etiquetaRojo = require("../../../img/iconos/etiquetaRojo.svg") as string;
const etiquetaMagenta =
  require("../../../img/iconos/etiquetaMagenta.svg") as string;
const iluminacion = require("../../../img/iconos/iluminacion.svg") as string;
const material = require("../../../img/iconos/material.svg") as string;
const nicho = require("../../../img/iconos/nicho.svg") as string;
const ubicaciongeografica =
  require("../../../img/iconos/ubicaciongeografica.svg") as string;
const hombres = require("../../../img/iconos/hombres.svg") as string;
const mujeres = require("../../../img/iconos/mujeres.svg") as string;

export interface DynaButtProps {
  type: "buttons" | "icons" | any;
  size?: "Grande" | "Mediano" | "Chico" | any;
  color?:
    | "Amarillo"
    | "Azul"
    | "Rojo"
    | "Verde"
    | "Magenta"
    | "Gris"
    | "Aqua"
    | "Morado"
    | any;
  button?:
    | "arrastrar"
    | "busqueda"
    | "carrito"
    | "circulo"
    | "descargar"
    | "editar"
    | "excel"
    | "guardar"
    | "kml"
    | "pauta"
    | "pdf"
    | "previsualizar"
    | "trafico"
    | "vaciar"
    | "graficas"
    | "ubicaciongeografica"
    | "iluminacion"
    | "bloqueado"
    | "nicho"
    | "material"
    | "cerrar"
    | "etiqueta"
    | "etiquetaAzul"
    | "etiquetaAmarillo"
    | "etiquetaMagenta"
    | "etiquetaRojo"
    | "hombres"
    | "mujeres"
    | any;
}
const DynamicButton = (props: DynaButtProps) => {
  function titleCase(text: any) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
  function retornoButtonComponent() {
    if (type === "buttons") {
      return buttons;
    } else {
      return icons;
    }
  }
  const data = {
    size: titleCase(props.size),
    button: props.button,
    color: titleCase(props.color),
  };
  const type = props.type;
  const arregloEtiqueta: any = "etiqueta" + data.color;

  const [buttons, setButtons] = useState([]);
  const InitButtons = () => {
    let tmpBtn: any = [];
    tmpBtn["arrastrar"] = arrastrar;
    tmpBtn["busqueda"] = busqueda;
    tmpBtn["carrito"] = carrito;
    tmpBtn["circulo"] = circulo;
    tmpBtn["descargar"] = descargar;
    tmpBtn["editar"] = editar;
    tmpBtn["excel"] = excel;
    tmpBtn["guardar"] = guardar;
    tmpBtn["kml"] = kml;
    tmpBtn["pauta"] = pauta;
    tmpBtn["pdf"] = pdf;
    tmpBtn["previsualizar"] = previsualizar;
    tmpBtn["trafico"] = trafico;
    tmpBtn["vaciar"] = vaciar;
    tmpBtn["graficas"] = graficas;
    tmpBtn["menu"] = menu;
    tmpBtn["menuDarkMode"] = menuDarkMode;
    setButtons(tmpBtn);
  };
  useEffect(() => {
    InitButtons();
  }, []);

  const [icons, setIcons] = useState([]);
  const InitIcons = () => {
    let tmpIcon: any = [];
    tmpIcon["ubicaciongeografica"] = ubicaciongeografica;
    tmpIcon["iluminacion"] = iluminacion;
    tmpIcon["bloqueado"] = bloqueado;
    tmpIcon["nicho"] = nicho;
    tmpIcon["material"] = material;
    tmpIcon["cerrar"] = cerrar;
    tmpIcon["etiqueta"] = etiqueta;
    tmpIcon["etiquetaAzul"] = etiquetaAzul;
    tmpIcon["etiquetaAmarillo"] = etiquetaAmarillo;
    tmpIcon["etiquetaMagenta"] = etiquetaMagenta;
    tmpIcon["etiquetaRojo"] = etiquetaRojo;
    tmpIcon["hombres"] = hombres;
    tmpIcon["mujeres"] = mujeres;
    setIcons(tmpIcon);
  };
  useEffect(() => {
    InitIcons();
  }, []);

  const TypeButton = (props: any) => {
    const buttonComponent = retornoButtonComponent()[props.name];
    if (buttonComponent === undefined) {
      return <></>;
    } else {
      return <img src={buttonComponent} alt="" />;
    }
  };
  if (type === "buttons") {
    if (data.size === "Chico") {
      return (
        <div className={"Btn" + data.size + " Btn" + data.color}>
          <p>{data.button}</p>
        </div>
      );
    } else {
      return (
        <div className={"Btn" + data.size + " Btn" + data.color}>
          <TypeButton name={data.button} />
        </div>
      );
    }
  } else {
    if (data.button === "etiqueta") {
      return (
        <div className={"Icono"}>
          <img src={icons[arregloEtiqueta]} alt="" />
        </div>
      );
    } else {
      return (
        <div className={"Icono Icono" + data.color}>
          <TypeButton name={data.button} />
        </div>
      );
    }
  }
};

export default DynamicButton;

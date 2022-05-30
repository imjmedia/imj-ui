import React from "react";
import TitlesCards from "../../Atomos/TitlesCards";
import TextField from "../../Atomos/TextField";
import PieGraphics from "../../Atomos/PieGraphics";
import CardsPorcentajes from "../CardsPorcentajes";
import "../../../index.css";
import "./index.css";
import { getColorMedio, getModo } from "../../../utils/utils";

interface GraficasCardsProps {
  tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;
  clave?: string | any;
  proveedor?: string | any;
  claveProveedor?: string | any;
  nseA?: number | any;
  nseB?: number | any;
  nseC?: number | any;
  nseD?: number | any;
  nseE?: number | any;
  edad13?: number | any;
  edad18?: number | any;
  edad26?: number | any;
  edad41?: number | any;
  edad55?: number | any;
  totalEdad13?: number | any;
  totalEdad18?: number | any;
  totalEdad26?: number | any;
  totalEdad41?: number | any;
  totalEdad55?: number | any;
  totalNseA?: number | any;
  totalNseB?: number | any;
  totalNseC?: number | any;
  totalNseD?: number | any;
  totalNseE?: number | any;
  porcentajeUsuarios?: number | any;
  porcentajeImpactos?: number | any;
  modo?: string | any;
  alcance?: number | any;
  frecuencia?: number | any;
  totalUsuarios?: number | any;
  totalImpactos?: number | any;
  porcentajeHombres?: number | any;
  numeroHombres?: number | any;
  porcentajeMujeres?: number | any;
  numeroMujeres?: number | any;
}
const GraficasCardsFront = (props: GraficasCardsProps) => {
  return (
    <div className={"ContenedorGraficasCards" + getModo(props.modo)}>
      <div className="EncabezadoCard">
        <TitlesCards modo={props.modo} clave={props.clave || "undefined"} />
      </div>

      <div
        className={"Columnas2 BorderBottom" + getColorMedio(props.tipoMedio)}
      >
        <TextField
          modo={props.modo}
          type="titleAndDescription"
          title="Proveedor: "
          description={props.proveedor || "undefined"}
        />
        <TextField
          modo={props.modo}
          type="titleAndDescription"
          title="Clave del Proveedor: "
          description={props.claveProveedor || "undefined"}
        />
      </div>
      <div className="Columnas3ModGraficas NoMargin Witdh100">
        <div className="PieDeGrafica">
          <PieGraphics
            type="nse"
            modo={props.modo}
            nseA={props.nseA || "0"}
            nseB={props.nseB || "0"}
            nseC={props.nseC || "0"}
            nseD={props.nseD || "0"}
            nseE={props.nseE || "0"}
          />
          <div className={"ContenedorPieDeGrafica" + getModo(props.modo)}>
            <p className="TituloGrafica">
              {" "}
              Afluencia por Nivel Socio Económico
            </p>
            <div className="CamposGraficas">
              <TextField
                modo={props.modo}
                type="description"
                description={"NSE A: " + (props.totalNseA || "0")}
                labelColor="Azul"
              />
              <TextField
                modo={props.modo}
                type="description"
                description={"NSE B: " + (props.totalNseB || "0")}
                labelColor="Rojo"
              />
              <TextField
                modo={props.modo}
                type="description"
                description={"NSE C: " + (props.totalNseC || "0")}
                labelColor="Aqua"
              />
              <TextField
                modo={props.modo}
                type="description"
                description={"NSE D: " + (props.totalNseD || "0")}
                labelColor="Magenta"
              />
              <TextField
                modo={props.modo}
                type="description"
                description={"NSE E: " + (props.totalNseE || "0")}
                labelColor="Amarillo"
              />
            </div>
          </div>
        </div>
        <div className="PieDeGrafica">
          <PieGraphics
            type="edad"
            modo={props.modo}
            edad13={props.edad13 || "0"}
            edad18={props.edad18 || "0"}
            edad26={props.edad26 || "0"}
            edad41={props.edad41 || "0"}
            edad55={props.edad55 || "0"}
          />
          <div className={"ContenedorPieDeGrafica" + getModo(props.modo)}>
            <p className="TituloGrafica"> Afluencia por Grupo de edad</p>
            <div className="CamposGraficas">
              <TextField
                modo={props.modo}
                type="description"
                description={"13-17: " + props.totalEdad13 || "0"}
                labelColor="Azul"
              />
              <TextField
                modo={props.modo}
                type="description"
                description={"18-25: " + props.totalEdad18 || "0"}
                labelColor="Rojo"
              />
              <TextField
                modo={props.modo}
                type="description"
                description={"26-40: " + props.totalEdad26 || "0"}
                labelColor="Aqua"
              />
              <TextField
                modo={props.modo}
                type="description"
                description={"41-55: " + props.totalEdad41 || "0"}
                labelColor="Magenta"
              />
              <TextField
                modo={props.modo}
                type="description"
                description={"55 o +: " + props.totalEdad55 || "0"}
                labelColor="Amarillo"
              />
            </div>
          </div>
        </div>
        <CardsPorcentajes
          modo={props.modo}
          alcance={props.alcance}
          frecuencia={props.frecuencia}
          totalUsuarios={props.totalUsuarios}
          totalImpactos={props.totalImpactos}
          porcentajeHombres={props.porcentajeHombres}
          numeroHombres={props.numeroHombres}
          porcentajeMujeres={props.porcentajeMujeres}
          numeroMujeres={props.numeroMujeres}
        />
      </div>
    </div>
  );
};

export default GraficasCardsFront;

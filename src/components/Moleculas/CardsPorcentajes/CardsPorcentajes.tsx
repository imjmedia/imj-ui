import React from "react";
import TextField from "../../Atomos/";
import DynamicButton from "../../Atomos";
import "../../../index.css";
import "./index.css";

const getModo = (modo: any) => {
  switch (modo) {
    case "Dark":
      return "DarkMode";
    default:
      return "";
  }
};

interface CardsPorcentajesProps {
  alcance?: number | any;
  frecuencia?: number | any;
  totalUsuarios?: number | any;
  totalImpactos?: number | any;
  porcentajeHombres?: number | any;
  numeroHombres?: number | any;
  porcentajeMujeres?: number | any;
  numeroMujeres?: number | any;
  modo?: string | any;
}
const CardsPorcentajes = (props: CardsPorcentajesProps) => {
  return (
    <div className={"CardsPorcentajes" + getModo(props.modo)}>
      <div className="Contenedor RowPadding1">
        <div className="PaddingBottomMedio">
          <TextField modo={props.modo} type="title" title="Alcance:" />
        </div>
        <div className="PaddingBottomMedio Block">
          <TextField
            modo={props.modo}
            type="description"
            description={(props.alcance || "0") + "%"}
            labelColor="Rojo"
          />
        </div>
        <p className="PaddingBottomMedio">
          Porcentaje de personas alcanzadas dentro del universo poblacional
          total de la plaza
        </p>

        <div className="PaddingBottomMedio">
          <TextField modo={props.modo} type="title" title="Frecuencia:" />
        </div>
        <div className="PaddingBottomMedio">
          <TextField
            modo={props.modo}
            type="description"
            description={(props.frecuencia || "0") + "%"}
            labelColor="Azul"
          />
        </div>
        <p className="PaddingBottomMedio">
          Número promedio de veces que estuvo un grupo de personas en un mismo
          periodo de tiempo y ubicados dentro del radio del espacio urbano
        </p>

        <div className="PaddingBottomMedio">
          <TextField modo={props.modo} type="title" title="Total de usuario:" />
        </div>
        <div className="PaddingBottomMedio">
          <TextField
            modo={props.modo}
            type="description"
            description={props.totalUsuarios || "0"}
            labelColor="Morado"
          />
        </div>
        <p className="PaddingBottomMedio">
          Es el número de personas que pasaron circulando por un sitio, sin
          duplicidad.
        </p>

        <div className="PaddingBottomMedio">
          <TextField
            modo={props.modo}
            type="title"
            title="Total de impactos:"
          />
        </div>
        <div className="PaddingBottomMedio">
          <TextField
            modo={props.modo}
            type="description"
            description={props.totalImpactos || "0"}
            labelColor="Verde"
          />
        </div>
        <p className="PaddingBottomMedio">
          {" "}
          Son los Totales de usuarios multiplicados por la frecuencia.
        </p>

        <div className="Columnas2 CardPorcentajesHombresMujeres">
          <div className="PorcentajesHombres">
            <DynamicButton
              type="icons"
              button="hombres"
              color="transparent"
              size="grande"
            />
            <TextField
              modo={props.modo}
              type="description"
              description={(props.porcentajeHombres || "0") + "%"}
              labelColor="Azul"
            />
            <p> {"Hombres: " + (props.numeroHombres || "0")}</p>
          </div>
          <div className="PorcentajesMujeres">
            <DynamicButton
              type="icons"
              size="grande"
              button="mujeres"
              color="transparent"
            />
            <TextField
              modo={props.modo}
              type="description"
              description={(props.porcentajeMujeres || "0") + "%"}
              labelColor="Magenta"
            />
            <p> {"Mujeres: " + (props.numeroMujeres || "0")}</p>
          </div>
        </div>
        <p className="PaddingBottomMedio">*Datos actualizados mensualmente</p>
      </div>
    </div>
  );
};

export default CardsPorcentajes;

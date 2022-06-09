import React from "react";
import TitlesCards from "../../Atomos";
import TextField from "../../Atomos";
import PropertyBtn from "../../Atomos";
import "../../../index.css";
import "./index.css";
import { getModo, getColorMedio } from "../../../utils/utils";

const hombres = require("../../../img/iconos/hombres.svg") as string;
const mujeres = require("../../../img/iconos/mujeres.svg") as string;

export interface CardRecorridoProps {
  modo?: string | any;
  imagen?: string | any;
  tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;

  clave?: string | any;
  tipo?: string | any;
  direccion?: string | any;
  ubicacion?: string | any;
  vista?: "Natural" | "Cruzada";
  ancho?: number | any;
  alto?: number | any;
  material?: string | any;
  descripcion?: string | any;
  estadoActivo?: true | false;
  estadoIluminacion?: true | false;

  numeroHombres?: number | any;
  porcentajeHombres?: number | any;
  numeroMujeres?: number | any;
  porcentajeMujeres?: number | any;
  alcance?: number | any;
  frecuencia?: number | any;
  totalUsuarios?: number | any;
  totalImpactos?: number | any;

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
}
const CardsRecorrido = (props: CardRecorridoProps) => {
  const Front = (props: CardRecorridoProps) => {
    return (
      <div className={"CardFrontRecorrido CardRecorrido" + getModo(props.modo)}>
        <div className="ImageCardRecorrido">
          <img src={props.imagen} alt="" />
        </div>
        <div
          className={
            "EncabezadoCard BorderBottom" + getColorMedio(props.tipoMedio)
          }
        >
          <TitlesCards
            modo={props.modo}
            clave={props.clave || "undefined"}
            type={props.tipo || "undefined"}
          />
        </div>
        <div className="ContenidoCardsRecorrido">
          <TextField
            modo={props.modo}
            type="titleAndDescription"
            title="Dirección: "
            description={props.direccion || "undefined"}
          />
          <div className="Columnas2">
            <TextField
              modo={props.modo}
              type="titleAndDescription"
              title="Ubicación: "
              description={props.ubicacion || "undefined"}
            />
            <TextField
              modo={props.modo}
              type="titleAndDescription"
              title="Vista: "
              description={props.vista || "?"}
            />
          </div>
          <div className="Flexbox MedidasCards">
            <TextField
              modo={props.modo}
              type="titleAndDescription"
              title="Medidas: "
              description={
                (props.ancho || "0") + "m x " + (props.alto || "0") + "m"
              }
              labelColor={getColorMedio(props.tipoMedio)}
            />
          </div>
          <TextField
            modo={props.modo}
            type="titleAndDescription"
            title="Material: "
            description={props.material || "undefined"}
          />
          <div className="TextOverflowDescription PaddingRight1">
            <TextField
              modo={props.modo}
              type="titleAndDescription"
              title="Referencias: "
              description={props.descripcion || "undefined"}
            />
          </div>

          <div className="Columnas2 PropiedadesCardsRecorrido">
            <PropertyBtn
              property="Imp. Especiales"
              color="verde"
              state={props.estadoActivo || false}
            />
            <PropertyBtn
              property="Iluminación"
              color="amarillo"
              state={props.estadoIluminacion || false}
            />
          </div>
        </div>
      </div>
    );
  };
  const Back = (props: CardRecorridoProps) => {
    return (
      <div className={"CardBackRecorrido CardRecorrido" + getModo(props.modo)}>
        <div className="Columnas2 Contenedor PaddingTop2">
          <div className="HombresBackCardsRecorrido">
            <div className="PorcentajesIconos">
              <img src={hombres} alt="" />
              <div className="TotalesPorcentajes">
                <TextField
                  modo={props.modo}
                  type="description"
                  description={props.numeroHombres || "0"}
                />
              </div>
            </div>
            <div className="Width100 CenterText">
              <TextField
                modo={props.modo}
                type="description"
                description={props.porcentajeHombres || "0"}
                labelColor="Azul"
              />
            </div>
          </div>
          <div className="MujeresBackCardsRecorrido">
            <div className="PorcentajesIconos">
              <img src={mujeres} alt="" />
              <div className="TotalesPorcentajes">
                <TextField
                  modo={props.modo}
                  type="description"
                  description={props.numeroMujeres || "0"}
                />
              </div>
            </div>
            <div className="Width100">
              <TextField
                modo={props.modo}
                type="description"
                description={props.porcentajeMujeres || "0"}
                labelColor="Magenta"
              />
            </div>
          </div>
        </div>
        <div className="Columnas2 Contenedor">
          <div className="CamposBackCardsRecorrido">
            <div className="PorcentajesIconos">
              <div className="TotalesPorcentajes">
                <TextField
                  modo={props.modo}
                  type="description"
                  description="Alcance:"
                />
              </div>
            </div>
            <div className="Width100 CenterText">
              <TextField
                modo={props.modo}
                type="description"
                description={props.alcance || "0"}
                labelColor="Rojo"
              />
            </div>
          </div>
          <div className="CamposBackCardsRecorrido">
            <div className="PorcentajesIconos">
              <div className="TotalesPorcentajes">
                <TextField
                  modo={props.modo}
                  type="description"
                  description="Frecuencia:"
                />
              </div>
            </div>
            <div className="Width100">
              <TextField
                modo={props.modo}
                type="description"
                description={props.frecuencia || "0"}
                labelColor="Azul"
              />
            </div>
          </div>
        </div>
        <div className="Columnas2 Contenedor">
          <div className="CamposBackCardsRecorrido">
            <div className="PorcentajesIconos">
              <div className="TotalesPorcentajes">
                <TextField
                  modo={props.modo}
                  type="description"
                  description="Total de usuarios:"
                />
              </div>
            </div>
            <div className="Width100 CenterText">
              <TextField
                modo={props.modo}
                type="description"
                description={props.totalUsuarios || "0"}
                labelColor="Morado"
              />
            </div>
          </div>
          <div className="CamposBackCardsRecorrido">
            <div className="PorcentajesIconos">
              <div className="TotalesPorcentajes">
                <TextField
                  modo={props.modo}
                  type="description"
                  description="Total de impactos:"
                />
              </div>
            </div>
            <div className="Width100">
              <TextField
                modo={props.modo}
                type="description"
                description={props.totalImpactos || "0"}
                labelColor="Azul"
              />
            </div>
          </div>
        </div>
        <div className="ContenedorPieDeGraficaRecorrido">
          <p className="TituloGrafica"> Afluencia por Nivel Socio Económico</p>
          <div className="CamposGraficas">
            <TextField
              modo={props.modo}
              type="description"
              description={"NSE A: " + props.totalNseB || "0"}
              labelColor="Azul"
            />
            <TextField
              modo={props.modo}
              type="description"
              description={"NSE B: " + props.totalNseB || "0"}
              labelColor="Rojo"
            />
            <TextField
              modo={props.modo}
              type="description"
              description={"NSE C: " + props.totalNseC || "0"}
              labelColor="Aqua"
            />
            <TextField
              modo={props.modo}
              type="description"
              description={"NSE D: " + props.totalNseD || "0"}
              labelColor="Magenta"
            />
            <TextField
              modo={props.modo}
              type="description"
              description={"NSE E: " + props.totalNseE || "0"}
              labelColor="Amarillo"
            />
          </div>
        </div>
        <div className="ContenedorPieDeGraficaRecorrido">
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
        <p className="Absolute Top90 Left25">
          *Datos actualizados semanalmente
        </p>
      </div>
    );
  };
  return (
    <div className="ContenedorCardsRecorrido">
      <Front
        modo={props.modo}
        imagen={props.imagen}
        tipoMedio={props.tipoMedio}
        clave={props.clave}
        tipo={props.tipo}
        direccion={props.direccion}
        ubicacion={props.ubicacion}
        vista={props.vista}
        ancho={props.ancho}
        alto={props.alto}
        material={props.material}
        descripcion={props.descripcion}
        estadoActivo={props.estadoActivo}
        estadoIluminacion={props.estadoIluminacion}
      />
      <Back
        tipoMedio={props.tipoMedio}
        modo={props.modo}
        numeroHombres={props.numeroHombres}
        porcentajeHombres={props.porcentajeHombres + "%"}
        numeroMujeres={props.numeroMujeres}
        porcentajeMujeres={props.porcentajeMujeres + "%"}
        alcance={props.alcance + "%"}
        frecuencia={props.frecuencia + "%"}
        totalUsuarios={props.totalUsuarios}
        totalImpactos={props.totalImpactos}
        totalNseA={props.totalNseA}
        totalNseB={props.totalNseB}
        totalNseC={props.totalNseC}
        totalNseD={props.totalNseD}
        totalNseE={props.totalNseE}
        totalEdad13={props.totalEdad13}
        totalEdad18={props.totalEdad18}
        totalEdad26={props.totalEdad26}
        totalEdad41={props.totalEdad41}
        totalEdad55={props.totalEdad55}
      />
    </div>
  );
};

export default CardsRecorrido;

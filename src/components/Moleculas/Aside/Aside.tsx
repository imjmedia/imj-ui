import React, { useState, useEffect } from "react";
import DynamicButton from "../../Atomos/DynamicButton";
import GraficasCardsFront from "../GraficasCards";
import PrevisualizarCards from "../PrevisualizarCards";
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
interface AsideProps {
  /*Modal PROPS*/
  show?: boolean | any;
  children?: any;
  handleClose?: () => void;
  typeModal?: "Graficas" | "Previsualizar" | any;
  tipoCard?:
    | "abcSitios"
    | "inventarioComercial"
    | "visualizadorPauta"
    | "rutasImj";
  modo?: string | any;

  /*verGraficas Props*/
  tipoMedio?: string | any;
  clave?: string | any;
  proveedor?: string | any;
  claveProveedor?: string | any;
  alcance?: number | any;
  frecuencia?: number | any;
  totalUsuarios?: number | any;
  totalImpactos?: number | any;
  numeroHombres?: number | any;
  porcentajeHombres?: number | any;
  numeroMujeres?: number | any;
  porcentajeMujeres?: number | any;
  nseA?: number | any;
  totalNseA?: number | any;
  nseB?: number | any;
  totalNseB?: number | any;
  nseC?: number | any;
  totalNseC?: number | any;
  nseD?: number | any;
  totalNseD?: number | any;
  nseE?: number | any;
  totalNseE?: number | any;
  edad13?: number | any;
  totalEdad13?: number | any;
  edad18?: number | any;
  totalEdad18?: number | any;
  edad26?: number | any;
  totalEdad26?: number | any;
  edad41?: number | any;
  totalEdad41?: number | any;
  edad55?: number | any;
  totalEdad55?: number | any;

  /*abrirPrevisualizar Props*/
  imagen?: any;
  tipo?: string | any;
  porcentajeUsuarios?: number | any;
  porcentajeImpactos?: number | any;
  direccion?: string | any;
  colonia?: string | any;
  cdEdo?: string | any;
  vialidad?: string | any;
  ancho?: number | any;
  alto?: number | any;
  material?: string | any;
  acabados?: string | any;
  iluminacion?: string | any;
  vista?: string | any;
  nicho?: string | any;
  estadoImplementaciones?: boolean;
  descripcion?: string | any;
  qr?: any;
}
const Modal = ({ handleClose, show, children, typeModal }: AsideProps) => {
  const type = typeModal;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div onClick={handleClose} className={"IconoCerrarModal" + type}>
          <DynamicButton
            type="icons"
            size="grande"
            button="cerrar"
            color="transparent"
          />
        </div>
      </section>
    </div>
  );
};
const Aside = (props: AsideProps) => {
  const [showPrevisualizar, setShowPrevisualizar] = useState(false);
  const showModalPrevisualizar = () => {
    setShowPrevisualizar(true);
  };
  const hideModalPrevisualizar = () => {
    setShowPrevisualizar(false);
  };

  const [showGraficas, setShowGraficas] = useState(false);
  const showModalGraficas = () => {
    setShowGraficas(true);
  };
  const hideModalGraficas = () => {
    setShowGraficas(false);
  };
  const tipoCard = props.tipoCard;

  function verGraficas() {
    return (
      <>
        <Modal
          show={showGraficas}
          handleClose={hideModalGraficas}
          typeModal={"Graficas"}
          tipoCard={props.tipoCard}
        >
          <GraficasCardsFront
            modo={props.modo}
            tipoMedio={props.tipoMedio}
            clave={props.clave}
            proveedor={props.proveedor}
            claveProveedor={props.claveProveedor}
            alcance={props.alcance}
            frecuencia={props.frecuencia}
            totalUsuarios={props.totalUsuarios}
            totalImpactos={props.totalImpactos}
            porcentajeHombres={props.porcentajeHombres}
            numeroHombres={props.numeroHombres}
            porcentajeMujeres={props.porcentajeMujeres}
            numeroMujeres={props.numeroMujeres}
            nseA={props.nseA}
            nseB={props.nseB}
            nseC={props.nseC}
            nseD={props.nseD}
            nseE={props.nseE}
            totalNseA={props.totalNseA}
            totalNseB={props.totalNseB}
            totalNseC={props.totalNseC}
            totalNseD={props.totalNseD}
            totalNseE={props.totalNseE}
            edad13={props.edad13}
            edad18={props.edad18}
            edad26={props.edad26}
            edad41={props.edad41}
            edad55={props.edad55}
            totalEdad13={props.totalEdad13}
            totalEdad18={props.totalEdad18}
            totalEdad26={props.totalEdad26}
            totalEdad41={props.totalEdad41}
            totalEdad55={props.totalEdad55}
          />
        </Modal>
        <div onClick={showModalGraficas}>
          <DynamicButton
            type="buttons"
            button="graficas"
            size="grande"
            color="gris"
          />
        </div>
      </>
    );
  }
  function abrirPrevisualizar() {
    return (
      <>
        <Modal
          show={showPrevisualizar}
          handleClose={hideModalPrevisualizar}
          typeModal={"Previsualizar"}
          tipoCard={props.tipoCard}
        >
          <PrevisualizarCards
            modo={props.modo}
            imagen={props.imagen}
            tipoMedio={props.tipoMedio}
            clave={props.clave}
            tipo={props.tipo}
            nseA={props.nseA}
            totalNseA={props.totalNseA}
            nseB={props.nseB}
            totalNseB={props.totalNseB}
            nseC={props.nseC}
            totalNseC={props.totalNseC}
            nseD={props.nseD}
            totalNseD={props.totalNseD}
            nseE={props.nseE}
            totalNseE={props.totalNseE}
            edad13={props.edad13}
            edad18={props.edad18}
            edad26={props.edad26}
            edad41={props.edad41}
            edad55={props.edad55}
            totalEdad13={props.totalEdad13}
            totalEdad18={props.totalEdad18}
            totalEdad26={props.totalEdad26}
            totalEdad41={props.totalEdad41}
            totalEdad55={props.totalEdad55}
            numeroHombres={props.numeroHombres}
            porcentajeHombres={props.porcentajeHombres}
            numeroMujeres={props.numeroMujeres}
            porcentajeMujeres={props.porcentajeMujeres}
            totalUsuarios={props.totalUsuarios}
            porcentajeUsuarios={props.porcentajeUsuarios}
            totalImpactos={props.totalImpactos}
            porcentajeImpactos={props.porcentajeImpactos}
            direccion={props.direccion}
            colonia={props.colonia}
            cdEdo={props.cdEdo}
            vialidad={props.vialidad}
            ancho={props.ancho}
            alto={props.alto}
            material={props.material}
            acabados={props.acabados}
            iluminacion={props.iluminacion}
            vista={props.vista}
            nicho={props.nicho}
            estadoImplementaciones={props.estadoImplementaciones}
            descripcion={props.descripcion}
            alcance={props.alcance}
            frecuencia={props.frecuencia}
            qr={props.qr}
          />
        </Modal>
        <div onClick={showModalPrevisualizar}>
          <DynamicButton
            type="buttons"
            button="previsualizar"
            size="grande"
            color="verde"
          />
        </div>
      </>
    );
  }
  function carrito() {
    return alert("funciona Carrito");
  }
  function vaciar() {
    return alert("funciona Vaciar");
  }
  switch (tipoCard) {
    case "abcSitios" || "inventarioComercial":
      return (
        <div className={"AsideCards" + getModo(props.modo)}>
          <div className="ContenedorBotonesAside">
            <div className="BotonAside">{abrirPrevisualizar()}</div>
            <div className="BotonAside">
              <DynamicButton
                type="buttons"
                button="pdf"
                size="grande"
                color="rojo"
              />
            </div>
            <div className="BotonAside">
              <DynamicButton
                type="buttons"
                button="carrito"
                size="grande"
                color="amarillo"
              />
            </div>
            <div className="BotonAside">{verGraficas()}</div>
          </div>
        </div>
      );
    case "visualizadorPauta":
      if (props.tipoMedio === "espectacular" || props.tipoMedio === "muro") {
        return (
          <div className={"AsideCards" + getModo(props.modo)}>
            <div className="ContenedorBotonesAside">
              <div className="BotonAside">{abrirPrevisualizar()}</div>
              <div className="BotonAside">
                <DynamicButton
                  type="buttons"
                  button="vaciar"
                  size="grande"
                  color="rojo"
                />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className={"AsideCards" + getModo(props.modo)}>
            <div className="ContenedorBotonesAside">
              <div className="BotonAside">
                <DynamicButton
                  type="buttons"
                  button="vaciar"
                  size="grande"
                  color="rojo"
                />
              </div>
            </div>
          </div>
        );
      }

    case "rutasImj":
      return (
        <div className={"AsideCards" + getModo(props.modo)}>
          <div className="ContenedorBotonesAside">
            <div className="BotonAside">{abrirPrevisualizar()}</div>
            <div className="BotonAside">
              <DynamicButton
                type="buttons"
                button="editar"
                size="grande"
                color="amarillo"
              />
            </div>
            <div className="BotonAside">
              <DynamicButton
                type="buttons"
                button="vaciar"
                size="grande"
                color="rojo"
              />
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default Aside;

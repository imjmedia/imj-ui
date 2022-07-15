import React from "react";
import DynamicButton from "../../Atomos/DynamicButton";
import { getColorMedio } from "../../../utils/utils";
import '../../../index.css'
import './listCatalogos.css'

interface ListCatalogosProps{
    asideItemRenderer: any;
    frontIdRenderer: any;
    frontInfoRenderer: any
    tipoMedio:
        'espectacular' |
        'muro' |
        'indoors' |
        'urbanos';
}
const ListCatalogos = (props:ListCatalogosProps) => {
    const Aside = props.asideItemRenderer; // <AsideItem/> //SE COLOCAN LOS BOTONES Y LA PROPIEDAD DE ACTIVO
    const FrontId = props.frontIdRenderer; // <FrontIdRenderer imagen={noImage} /> //SE COLOCAN LA INFORMACIÓN PRINCIPAL DEL SITIO
    const FrontInfoSitio = props.frontInfoRenderer; //<FrontInfoSitioRenderer /> // SE COLOCA LA INFORMACIÓN COMPLEMENTARIA DEL SITIO
    // const modoCard = getModo(props.modo || '');
    const tipoMedio = props.tipoMedio
    return (
        <div className="ContenedorList">
            <div className="Columnas2 AlignCenter">
                {FrontId}
                <div className="Columnas2">
                    {FrontInfoSitio}
                    {Aside}
                </div>
            </div>
            <div className="EtiquetaIdentificacionListMode">
                        <DynamicButton
                            type='icons'
                            size='grande'
                            button='etiqueta'
                            color={getColorMedio(tipoMedio)}
                        />
                </div>
        </div>
    )
}

export default ListCatalogos;
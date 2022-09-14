import React from "react";
import '../../../index.css';
import TextField from "../../Atomos/TextField";
import TitlesCards from "../../Atomos/TitlesCards";
import '../listCatalogos/listCatalogos.css';

interface FrontIdRendererProps {
    imagen: any;
    clave: string;
    tipo:
    'espectacular' |
    'muro' |
    'urbanos' |
    'indoors';
    direccion: string;
}
const FrontIdRenderer = (props: FrontIdRendererProps) => {
    const imagen = (imagen: any) => {
        if (imagen) {
            return <img src={imagen} alt="" />
        } else { <></> }
    }
    return (
        <div className="Flexbox ContenidoListMode">
            <div className="ImagenListMode">
                {imagen(props.imagen)}
            </div>
            <div>
                <div className="PaddingLeft1">
                    <TitlesCards
                        clave={props.clave}
                        type={props.tipo}
                    />
                </div>
                <TextField
                    title='Dirección: '
                    description={props.direccion}
                />
            </div>
        </div>
    )
}

export default FrontIdRenderer;
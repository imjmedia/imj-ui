import React from "react";
import { getColorMedio, getModo } from "../../../utils/utils";
import BtnFunction from "../../Atomos/btnFunction";
import Logo from "../../Atomos/Logo";
import TextField from "../../Atomos/TextField";
import TitlesCards from "../../Atomos/TitlesCards";
import mujeres from '../../Img/Iconos/mujeres.svg';
import hombres from '../../Img/Iconos/hombres.svg';
import noImagen from '../../Img/img/noImagen.jpg';
import '../../../index.css'
import '../formaPrevRutas/index.css'

interface FichaRutasMapsProps{
    imagen?: any;
    clave?: string;
    ruta?: string;
    totalMujeres?: string | number;
    porcentajeMujeres?: string | number;
    totalHombres?: string | number;
    porcentajeHombres?: string | number;
    alcance?: string | number;
    frecuencia?: string | number;
    impactosRuta?: string | number;
    impactosTotales?: string | number;
    modo?: string;
    inicio?: string;
    destino?: string;
    kilometraje?: string | number;
    tipoMedio?: 
        'espectacular'|  
        'muro' |
        'urbanos' |
        'indoors';
    derrotero?: string;
    tipoExhibicion?: string;
}
const FichaRutasMap = (props:FichaRutasMapsProps) => {
    return (
        <div className="ContenedorRutasPrev" style={{ maxWidth: '60vw' }}>

            <div className="Columnas2PrevRutas AlignTop">
                <div className="ContenidoIdentificacion" style={{paddingLeft:'2rem'}}>
                    <div className={"EncabezadoCard BorderBottom" + getColorMedio('urbanos')}>
                        <Logo
                            logo='ByImj'
                            style={{ height: '6rem', marginLeft:'-16rem', marginBottom:'2rem'}}
                        />
                        <div className="Flexbox" style={{ alignItems: 'center' }}>
                            <TitlesCards
                                modo={props.modo}
                                clave={props.clave}
                                type={props.ruta}
                            />
                        </div>
                    </div>
                    <div className="ColumnasRutas" style={{ marginTop: '1rem' }}>
                        <div>
                            <TextField
                                type='titleAndDescription'
                                title='Inicio: '
                                description={props.inicio}
                            />
                        </div>
                        <div>
                            <TextField
                                type='titleAndDescription'
                                title='Tipo de Exhibición: '
                                description={props.tipoExhibicion}
                            />
                        </div>
                        <div>
                            <TextField
                                type='titleAndDescription'
                                title='Destino: '
                                description={props.destino}
                            />
                        </div>
                        <div>
                            <TextField
                                type='titleAndDescription'
                                title='Kilometraje: '
                                description={props.kilometraje}
                            />
                        </div>
                    </div>
                    <div className="" style={{ marginTop: '2rem', marginBottom: '2rem', }}>
                        <div className="Metricas">
                            <div>
                                <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
                                    <img src={mujeres} alt="" style={{ maxHeight: '2.5rem' }} />
                                    <p style={{ fontWeight: 'bold' }}>Mujeres: {props.totalMujeres}</p>
                                </div>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={props.porcentajeMujeres}
                                        labelColor='Magenta'
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
                                    <img src={hombres} alt="" style={{ maxHeight: '2.5rem' }} />
                                    <p style={{ fontWeight: 'bold' }}>Hombres: {props.totalHombres}</p>
                                </div>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={props.porcentajeHombres}
                                        labelColor='Azul'
                                    />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Alcance</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={props.alcance}
                                        labelColor='Rojo'
                                    />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Frecuencia</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={props.frecuencia}
                                        labelColor='Verde'
                                    />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Impactos de ruta</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={props.impactosRuta || 0}
                                        labelColor='Morado'
                                    />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Impactos totales</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={props.impactosTotales || 0}
                                        labelColor='Magenta'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div className="MapaRutas" style={{ minHeight: '20rem', height: 'auto', width: 'auto', minWidth: '100%' }}>
                        <img src={props.imagen} />
                    </div>
                    <div className="DerroteroRuta">
                        <div>
                            <TextField
                                type='titleAndDescription'
                                title='Derrotero: '
                                description={props.derrotero}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FichaRutasMap;
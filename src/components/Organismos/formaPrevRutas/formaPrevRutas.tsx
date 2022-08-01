import React from "react";
import '../../../index.css'
import './index.css'
import { getColorMedio} from "../../../utils/utils";
import TitlesCards from "../../Atomos/TitlesCards";
import TextField from "../../Atomos/TextField";
import mujeres from '../../Img/Iconos/mujeres.svg';
import hombres from '../../Img/Iconos/hombres.svg';

interface FormaPrevRutasProps {
    modo?: string; //'Dark' | ''
    clave?: string;
    ruta?: string;
    inicio?: string;
    ubicacion?: string;
    destino?: string;
    kilometraje?: string | number;
    totalMujeres?: string | number;
    porcentajeMujeres?: string | number;
    totalHombres?: string | number;
    porcentajeHombres?: string | number;
    alcance?: string | number;
    frecuencia?: string | number;
    impactos?: string | number;
    derrotero?: string;
    mapa?: any;
    data?: any;
}
const FormaPrevRutas = (props:FormaPrevRutasProps) => {
    const Mapa = props.mapa
    const {modo, clave, ruta, inicio, ubicacion, destino, kilometraje, derrotero, totalMujeres, porcentajeMujeres, totalHombres, porcentajeHombres, alcance, frecuencia, impactos} = props;
    return (
        <div className="ContenedorRutasPrev">
            <div className="MapaRutas">
                {<Mapa data={props.data} />}
            </div>
            <div className="Columnas2PrevRutas AlignTop">
                <div className="ContenidoIdentificacion">
                    <div className={"EncabezadoCard BorderBottom" + getColorMedio('urbanos')}>
                        <TitlesCards
                            modo={modo}
                            clave={clave}
                            type={ruta}
                        />
                    </div>
                    <div className="ColumnasRutas" style={{ marginTop: '1rem' }}>
                        <div>
                            <TextField
                                type='titleAndDescription'
                                title='Inicio: '
                                description={inicio}
                            />
                        </div>
                        <div>
                            <TextField
                                type='titleAndDescription'
                                title='Ubicación: '
                                description={ubicacion}
                            />
                        </div>
                        <div>
                            <TextField
                                type='titleAndDescription'
                                title={destino}
                            />
                        </div>
                        <div>
                            <TextField
                                type='titleAndDescription'
                                title='Kilometraje: '
                                description={kilometraje}
                            />
                        </div>
                    </div>
                    <div className="" style={{ marginTop: '2rem', marginBottom: '2rem',}}>
                        <div className="Metricas">
                            <div>
                                <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
                                    <img src={mujeres} alt="" style={{ maxHeight: '2.5rem' }} />
                                    <p>Mujeres: {totalMujeres || 0}</p>
                                </div>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={porcentajeMujeres || 0}
                                        labelColor='Magenta'
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
                                    <img src={hombres} alt="" style={{ maxHeight: '2.5rem' }} />
                                    <p>Hombres: {totalHombres || 0}</p>
                                </div>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={porcentajeHombres || 0}
                                        labelColor='Azul'
                                    />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Alcance</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={alcance || 0}
                                        labelColor='Rojo'
                                    />
                                </div>
                            </div>
                            <div>
                            <p style={{ fontWeight: 'bold' }}>Frecuencia</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={frecuencia || 0}
                                        labelColor='Verde'
                                    />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Impactos</p>
                                <div className="DisplayBlock">
                                    <TextField
                                        type='description'
                                        description={impactos || 0}
                                        labelColor='Azul'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DerroteroRuta" style={{ height: '90%' }}>
                    <div>
                        <TextField
                            type='titleAndDescription'
                            title='Derrotero: '
                            description={derrotero}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormaPrevRutas;
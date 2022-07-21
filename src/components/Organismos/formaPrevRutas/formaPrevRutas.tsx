import React from "react";
import '../../../index.css'
import './index.css'
import { getColorMedio} from "../../../utils/utils";
import TitlesCards from "../../Atomos/TitlesCards";
import TextField from "../../Atomos/TextField";

interface FormaPrevRutasProps {
    modo?: string; //'Dark' | ''
    clave?: string;
    ruta?: string;
    inicio?: string;
    ubicacion?: string;
    destino?: string;
    kilometraje?: string | number;
    derrotero?: string;
    mapa?: any;
    data?: any;
}
const FormaPrevRutas = (props:FormaPrevRutasProps) => {
    const Mapa = props.mapa
    const {modo, clave, ruta, inicio, ubicacion, destino, kilometraje, derrotero } = props;
    return (
        <div>
            <div className="MapaRutas">
                {<Mapa  data={props.data}/>}
            </div>
            <div className="Columnas2 AlignTop">
                <div className="ContenidoIdentificacion">
                    <div className={"EncabezadoCard BorderBottom" + getColorMedio('urbanos')}>
                        <TitlesCards
                            modo={modo}
                            clave={clave}
                            type={ruta}
                        />
                    </div>
                    <div className="ColumnasRutas">
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
                                title='Destino: '
                                description={destino}
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
                </div>
                <div className="DerroteroRuta">
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
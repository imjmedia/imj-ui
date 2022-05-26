import React from "react";
import TitlesCards from "../../Atomos/TitlesCards";
import TextField from "../../Atomos/TextField";
import PropertyBtn from "../../Atomos/PropertyBtn";
import '../../../index.css';
import './index.css';

const noImage = require('../../../Img/Img/noImage.jpg') as string;
const noQr = require('../../../Img/Img/noQr.png') as string;
const hombres = require('../../../Img/Iconos/hombres.jpg') as string;
const mujeres = require('../../../Img/Iconos/mujeres.jpg') as string;

/*ASIGNADO DE COLOR*/
const getModo = (modo:any) => {
    switch (modo) {
        case 'Dark': return('DarkMode')
        default: return ''
    }
}
/* ASIGNADO DE COLOR */
export const getColorMedio = (tipoMedio:any) => {
    switch (tipoMedio) {
        case 'espectacular': return('Rojo')            
        case 'urbanos': return('Magenta')
        case 'muro': return('Azul')            
        case 'indoors': return('Amarillo')
        default: return('Gris')
    }
}

interface PropsPrevisualizarCards{
    modo?:string | any;
    imagen?: any;
    tipoMedio?: 'espectacular' | 'muro' | 'urbanos' | 'indoors';
    clave?: string;
    tipo?: string;
    nseA?: number;
    totalNseA?: number;
    nseB?: number;
    totalNseB?: number;
    nseC?: number;
    totalNseC?: number;
    nseD?: number;
    totalNseD?: number;
    nseE?: number;
    totalNseE?: number;
    edad13?:number | any;
    totalEdad13?:number | any;
    edad18?:number | any;
    totalEdad18?:number | any;
    edad26?:number | any;
    totalEdad26?:number | any;
    edad41?:number | any;
    totalEdad41?:number | any;
    edad55?:number | any;
    totalEdad55?:number | any;
    numeroHombres?: number | any;
    porcentajeHombres?: number | any;
    numeroMujeres?: number | any;
    porcentajeMujeres?: number | any;
    totalUsuarios?: number | any;
    porcentajeUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeImpactos?: number | any;
    direccion?: string | any;
    colonia?: string | any;
    cdEdo?:string | any;
    vialidad?: string | any;
    ancho?: number | any;
    alto?: number | any;
    material?: string | any;
    acabados?: string | any;
    iluminacion?: string | any;
    vista?: string | any;
    nicho?: string | any;
    estadoImplementaciones?: true | false | any;
    descripcion?:string | any;
    alcance?: number | any;
    frecuencia?: number | any;
    qr?: any;
}
const PrevisualizarCards = (props:PropsPrevisualizarCards) =>{
    return(
    <div className={"ContenedorCardPrevisualizar"+getModo(props.modo)}>
        <div className="FlexboxPrevisualizar">
            <div className="ImagenCardPrevisualizar">
                <img src={props.imagen || noImage} alt="" />
            </div>
            <div className="PorcentajesCardPrevisualizar">                
                <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                    <TitlesCards 
                        modo={props.modo}   
                        clave = {props.clave || 'undefined'}
                        type = {props.tipo || 'undefined'}
                    />
                </div>
                <div className={"CardAfluenciaPrevisualizar"+getModo(props.modo)}>
                    <div className="AfluenciaTitulo">
                        <TextField
                            modo={props.modo}
                            type = 'description'
                            description = 'Afluencia por Nivel Socio Económico'
                        />
                    </div>    
                    <div className="FlexboxCamposPrevisualizar">
                        <div className="CampoPorcentajesPrevisualizar">
                            <div id="CampoPrevisualizar1">
                                <TextField
                                    modo={props.modo}
                                    type = 'description'
                                    description = {'NSE A: '+ ((props.nseA || 0)+ '%')}
                                    labelColor = 'Azul'
                                />
                            </div>
                            <p className="TotalPorcentajePrevisualizar">{props.totalNseA || 0}</p>
                        </div>
                        <div className="CampoPorcentajesPrevisualizar">
                            <div id="CampoPrevisualizar2">
                            <TextField
                                modo={props.modo}
                                type = 'description'
                                description = {'NSE B: ' +(props.nseB || 0)+ '%'}
                                labelColor = 'Rojo'
                            />
                            </div>
                            <p className="TotalPorcentajePrevisualizar">{props.totalNseB || 0}</p>
                        </div>
                        <div className="CampoPorcentajesPrevisualizar">
                            <div id="CampoPrevisualizar3">
                                <TextField
                                    modo={props.modo}
                                    type = 'description'
                                    description = {'NSE C: ' +(props.nseC || 0)+ '%'}
                                    labelColor = 'Aqua'
                                />
                            </div>
                            <p className="TotalPorcentajePrevisualizar">{props.totalNseC || 0}</p>                         
                        </div>
                        <div className="CampoPorcentajesPrevisualizar">
                            <div id="CampoPrevisualizar4">
                                <TextField
                                    modo={props.modo}
                                    type = 'description'
                                    description = {'NSE D: ' +(props.nseD || 0)+ '%'}
                                    labelColor = 'Magenta'
                                />
                            </div> 
                            <p className="TotalPorcentajePrevisualizar">{props.totalNseD || 0}</p>
                        </div>
                        <div className="CampoPorcentajesPrevisualizar">
                            <div id="CampoPrevisualizar5">
                                <TextField
                                    modo={props.modo}
                                    type = 'description'
                                    description = {'NSE E: ' +(props.nseE || 0)+ '%'}
                                    labelColor = 'Amarillo'
                                /> 
                            </div>
                            <p className="TotalPorcentajePrevisualizar">{props.totalNseE || 0}</p>
                        </div> 
                    </div>
                    <div className="AfluenciaTitulo">
                        <TextField
                            modo={props.modo}
                            type = 'description'
                            description = 'Afluencia por Rango de Edad'
                        />
                    </div>
                    <div className="FlexboxCamposPrevisualizar">
                        <div className="CampoPorcentajesPrevisualizar">
                            <div id="CampoPrevisualizar6">
                                <TextField
                                    modo={props.modo}
                                    type = 'description'
                                    description = {'13-17: ' +(props.edad13 || 0) + '%'}
                                    labelColor = 'Azul'
                                />
                            </div>
                            <p className="TotalPorcentajePrevisualizar">{props.totalEdad13 || 0}</p>
                        </div>
                        <div className="CampoPorcentajesPrevisualizar">
                            <div id="CampoPrevisualizar7">
                            <TextField
                                modo={props.modo}
                                type = 'description'
                                description = {'18-25: ' +(props.edad18 || 0) + '%'}
                                labelColor = 'Rojo'
                            />
                            </div>
                            <p className="TotalPorcentajePrevisualizar">{props.totalEdad18 || 0}</p>
                        </div>
                        <div className="CampoPorcentajesPrevisualizar">
                            <div id="CampoPrevisualizar8">
                                <TextField
                                    modo={props.modo}
                                    type = 'description'
                                    description = {'26-40: ' +(props.edad26 || 0) + '%'}
                                    labelColor = 'Aqua'
                                />
                            </div>
                            <p className="TotalPorcentajePrevisualizar">{props.totalEdad26 || 0}</p>                         
                        </div>
                        <div className="CampoPorcentajesPrevisualizar">
                            <div id="CampoPrevisualizar9">
                                <TextField
                                    modo={props.modo}
                                    type = 'description'
                                    description = {'41-55: ' +(props.edad41 || 0) + '%'}
                                    labelColor = 'Magenta'
                                />
                            </div> 
                            <p className="TotalPorcentajePrevisualizar">{props.totalEdad41 || 0}</p>
                        </div>
                        <div className="CampoPorcentajesPrevisualizar">
                            <div id="CampoPrevisualizar10">
                                <TextField
                                    modo={props.modo}
                                    type = 'description'
                                    description = {'55-+: ' +(props.edad55 || 0) + '%'}
                                    labelColor = 'Amarillo'
                                /> 
                            </div>
                            <p className="TotalPorcentajePrevisualizar">{props.totalEdad55 || 0}</p>
                        </div> 
                    </div>  
                </div>
                <div className={"ContenedorHombresMujeresPrevisualizar"+getModo(props.modo)}>
                    <div className="Columnas2 Contenedor PaddingTopMedio">
                        <div className="HombresBackCardsRecorrido">
                            <div className="PorcentajesIconos">
                                <img src={hombres} alt="" />
                                <div className="TotalesPorcentajes">
                                    <TextField
                                        modo={props.modo}
                                        type = 'description'
                                        description = {props.numeroHombres || 0}
                                    />
                                </div>
                            
                            </div>
                            <div className="Width100 CenterText">
                                <TextField
                                    modo={props.modo} 
                                    type = 'description' 
                                    description = {(props.porcentajeHombres || 0) + '%'}
                                    labelColor = 'Azul'
                                />
                            </div>  
                        </div>
                        <div className="MujeresBackCardsRecorrido">
                            <div className="PorcentajesIconos">
                                <img src={mujeres} alt="" />
                                <div className="TotalesPorcentajes">
                                    <TextField
                                        modo={props.modo}
                                        type = 'description'
                                        description = {props.numeroMujeres || 0}
                                    />
                                </div>
                            </div>
                            <div className="Width100">
                                <TextField
                                    modo={props.modo} 
                                    type = 'description' 
                                    description = {(props.porcentajeMujeres || 0) + '%'}
                                    labelColor = 'Magenta'
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
                                        type = 'description'
                                        description = {'Usuarios: '+ (props.totalUsuarios || 0)}
                                    />
                                </div>

                            </div>
                            <div className="Width100 CenterText">
                                <TextField
                                    modo={props.modo} 
                                    type = 'description' 
                                    description = {(props.porcentajeUsuarios || 0) + '%'}
                                    labelColor = 'Morado'
                                />
                            </div>  
                        </div>
                        <div className="CamposBackCardsRecorrido">
                            <div className="PorcentajesIconos">
                                <div className="TotalesPorcentajes">
                                    <TextField
                                        modo={props.modo}
                                        type = 'description'
                                        description = {'Impactos: '+ (props.totalImpactos || 0)}
                                    />
                                </div>
                            </div>
                            <div className="Width100">
                                <TextField
                                    modo={props.modo} 
                                    type = 'description' 
                                    description = {(props.porcentajeImpactos || 0) + '%'}
                                    labelColor = 'Azul'
                                />
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Columnas4">
            <div className={"ColumnaCardPrevisualizar"+getModo(props.modo)}>
                <div className="ContenedorCardPrevisualizarChico">
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Direción: '
                        description = {props.direccion || 'undefined'}
                    />
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Colonia: '
                        description = {props.colonia || 'undefined'}
                    />
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Cd. Edo: '
                        description = {props.cdEdo || 'undefined'}
                    />
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Vialidad: '
                        description = {props.vialidad || 'undefined'}
                    />
                </div>
            </div>

            <div className={"ColumnaCardPrevisualizar"+getModo(props.modo)}>
                <div className="ContenedorCardPrevisualizarChico">
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Medidas: '
                        description = {(props.ancho || 0)+'m x '+(props.alto || 0)+'m'}
                        labelColor = {getColorMedio(props.tipoMedio)}
                    />
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Material: '
                        description = {props.material || 'undefined'}
                    />
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Acabado: '
                        description = {props.acabados || 'undefined'}
                    />
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Iluminación: '
                        description = {props.iluminacion || 'undefined'}
                        labelColor ={getColorMedio(props.tipoMedio)}
                    />
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Tipo de Vista: '
                        description = {props.vista || 'undefined'}
                    />
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Nicho: '
                        description = {props.nicho || 'undefined'}
                    />
                    <PropertyBtn 
                        property = 'Imp. especiales'
                        state = {props.estadoImplementaciones || 'undefined'}
                        color = 'amarillo'
                    />
                </div>
            </div>
            <div className={"ColumnaCardPrevisualizar"+getModo(props.modo)}>
                <div className="ContenedorCardPrevisualizarChico TextOverflowDescriptionPrev">
                    <TextField
                        modo={props.modo}
                        type='titleAndDescription'
                        title = 'Referencias: '
                        description = {props.descripcion || 'undefined'}
                    />
                </div>
            </div>
            <div className={"ColumnaCardPrevisualizar"+getModo(props.modo)}>
                <div className="CamposBackCardsRecorrido">
                    <div className="PorcentajesIconos">
                        <div className="TotalesPorcentajes">
                            <TextField
                                modo={props.modo}
                                type = 'description'
                                description = 'Alcance:'
                            />
                        </div>
                    </div>
                    <div className="Width100 CenterText">
                        <TextField
                            modo={props.modo} 
                            type = 'description' 
                            description = {(props.alcance || 0)+'%'}
                            labelColor = 'Rojo'
                        />
                    </div>  
                </div>
                <div className="CamposBackCardsRecorrido">
                    <div className="PorcentajesIconos">
                        <div className="TotalesPorcentajes">
                            <TextField
                                modo={props.modo}
                                type = 'description'
                                description = 'Frecuencia:'
                            />
                        </div>
                    </div>
                    <div className="Width100">
                        <TextField
                            modo={props.modo} 
                            type = 'description' 
                            description = {(props.frecuencia || 0) +'%'}
                            labelColor = 'Azul'
                        />
                    </div>  
                </div>   
                    <img src={props.qr || noQr} alt="" className="QrPrevisualizar"/>
            </div>
        </div>
    </div>
    )
}

export default PrevisualizarCards;
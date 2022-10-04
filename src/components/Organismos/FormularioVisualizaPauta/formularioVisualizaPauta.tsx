import React, { useState } from "react";
import { getModo } from "../../../utils/utils";
import Dropdown from '../../Atomos/dropDown';
import Inputs from "../../Atomos/Inputs";
import TextField from "../../Atomos/TextField";
import noImagen from '../../Img/Img/noImageCards.jpg';

interface FormularioVisualizaPautaProps{
    modo?:any,
    responsables?: any[],
    campanias?: any[],
    empresa?: string,

}
const FormularioVisualizaPauta =(props:FormularioVisualizaPautaProps) =>{
    const [colorElegido, setColorElegido] = useState('');
    const [logotipo, setLogotipo] = useState('');
    return(    
        <div className={"ContenedorFormularioVisualizaPauta"+getModo(props.modo)}>
            <div className="Columnas3">
                <div className="Rows3">
                    <div className="JustifyLeft Responsable ">
                            <TextField
                              title = 'Responsable'
                            />
                            <Dropdown
                              options = {props.responsables}
                              color = 'gris'
                            /> 
                    </div>
                </div>
                <div className="Rows3">
                    <div className="Campaña JustifyLeft">
                        <TextField
                            title = 'Campaña'
                        />
                        <Dropdown
                            options = {props.campanias}
                            color = 'gris'
                        />
                    </div>
                    <div className="Empresa JustifyLeft">
                        <div>
                        <TextField
                            title = 'Empresa'
                        />
                        </div>
                        <div className="NombreEmpresa">
                            <TextField 
                                description = {props.empresa || 'undefined'}
                            />
                        </div>
                    </div>
                    <div className="Columnas2 ColorSelect">
                        <div className="JustifyLeft">
                            <TextField
                                title = 'Color'
                            />
                            <div className="ColorPicker">
                                <input type="color" onChange={(e)=>setColorElegido(e.target.value)} />
                            </div>
                        </div>
                        <div className="JustifyLeft">
                            <TextField
                                title = 'Color elegido'
                            />
                            <div className="ColorPicker">
                                <div className="ColorElegido" style={{backgroundColor: colorElegido}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Rows3">
                    <div className="InicioFinVisualiza Columnas2">
                        <div className="JustifyLeft ">
                            <TextField
                                title = 'Fecha Inicial'
                            />
                            <Inputs
                                type = 'date'
                                color = 'gris'
                            />
                        </div>
                        <div className="JustifyLeft ">
                            <TextField
                                title = 'Fecha Final'
                            />
                            <Inputs
                                type = 'date'
                                color = 'gris'
                            />
                        </div>
                    </div>
                    <div className="SelectFileVisualiza">
                        <TextField
                            title = 'Logotipo'
                        />
                        <input type="file" onChange={(e)=>setLogotipo(e.target.value)}/>
                    </div>
                    <div className="InicioFinVisualiza Columnas2">
                        <div className="JustifyLeft ">
                            <div className="DescuentoVisualizaPauta">
                            <TextField
                                title = 'Descuento'
                            />
                            </div>
                            <div className="Flexbox">
                                <Inputs
                                    type = 'aumentoDecremento'
                                    color = 'gris'
                                />
                                <h2>
                                    %
                                </h2>
                            </div>
                        </div>
                        <div className="LogotipoVisualia">
                            <img src={logotipo || noImagen} alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormularioVisualizaPauta;
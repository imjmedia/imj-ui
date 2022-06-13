import React from "react";
import TextField from "../../Atomos/TextField";
import Dropdown from '../../Atomos/dropDown';
import { useState } from "react";
import Inputs from "../../Atomos/Inputs";
import noImage from '../../Img/Img/noImage.svg';

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
                              type='title'
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
                            type='title'
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
                            type='title'
                            title = 'Empresa'
                        />
                        </div>
                        <div className="NombreEmpresa">
                            <TextField 
                                type = 'description'
                                description = {props.empresa || 'undefined'}
                            />
                        </div>
                    </div>
                    <div className="Columnas2 ColorSelect">
                        <div className="JustifyLeft">
                            <TextField
                                type='title'
                                title = 'Color'
                            />
                            <div className="ColorPicker">
                                <input type="color" onChange={(e)=>setColorElegido(e.target.value)} />
                            </div>
                        </div>
                        <div className="JustifyLeft">
                            <TextField
                                type='title'
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
                                type='title'
                                title = 'Fecha Inicial'
                            />
                            <Inputs
                                type = 'date'
                                color = 'gris'
                            />
                        </div>
                        <div className="JustifyLeft ">
                            <TextField
                                type='title'
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
                            type='title'
                            title = 'Logotipo'
                        />
                        <input type="file" onChange={(e)=>setLogotipo(e.target.value)}/>
                    </div>
                    <div className="InicioFinVisualiza Columnas2">
                        <div className="JustifyLeft ">
                            <div className="DescuentoVisualizaPauta">
                            <TextField
                                type='title'
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
                            <img src={logotipo || noImage} alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormularioVisualizaPauta;
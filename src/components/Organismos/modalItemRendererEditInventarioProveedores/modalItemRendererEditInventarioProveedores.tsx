import React from "react";
import { useState } from "react";
import { getColorMedio } from "../../../utils/utils";
import TextField from "../../Atomos/TextField";
import PropertyBtn from "../../Atomos/PropertyBtn";
import DynamicButton from "../../Atomos/DynamicButton";
import '../../../index.css';

interface ModalITemRendererEditInventarioProveedoresProps{
    proveedor?: string;
    claveProveedor?: string;
    direccion?: string;
    ubicacion?: string;
    vista?: 
        'Cruzada' | 
        'Natural';
    tipo?: string;
    ancho?: number;
    alto?: number;
    implementaciones?: 
        'Si' |
        'No';
    tipoMedio?:
        'espectacular' |
        'muro'| 
        'indoors' |
        'urbanos';
    
}

const ModalITemRendererEditInventarioProveedores = (props:ModalITemRendererEditInventarioProveedoresProps) => {
    const [clicActivo, setClicActivo] = useState(false)
    const [clicBloqueado, setClicBloqueado] = useState(false)
    const [clicIluminacion, setClicIluminacion] = useState(false)
    const [vista, setVista] = useState('')
    const [tipo, setTipo] = useState('')
    const [implementaciones, setImplementaciones] = useState('')

    const data={
        proveedor: props.proveedor || 'undefined',
        claveProveedor: props.claveProveedor || 'undefined',
        direccion: props.direccion || 'undefined',
        ubicacion: props.ubicacion || 'undefined',
        vista: props.vista || 'undefined', 
        tipo: props.tipo || 'undefined',
        ancho: props.ancho || '0',
        alto: props.alto || '0',
        implementaciones: props.implementaciones || '?'
    }
    const vistaChange = (event:any) => {
        setVista(event.target.value);
      };
    const tipoChange = (event:any) => {
        setTipo(event.target.value);
      };
    const implChange = (event:any) => {
        setImplementaciones(event.target.value);
      };
      
    const [toggle, setToggle] = useState(true);
    const [text, setText] = useState(data);
    function toggleInput() {
        setToggle(false);
        }
    function handleChange(event:any) {
        setText(event.target.value);
        }
    
    return(
        <div className="Index1">
            <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                {toggle ? (
                    <h2 onDoubleClick={toggleInput} className='ClaveCards'>
                        {text.proveedor}
                    </h2>
                ) : (
                    <div style={{ textAlign:'left'}}>
                        <input type="text" value={text.proveedor} onChange={handleChange} className='ClaveCards Index1' style={{maxWidth:'85%', maxHeight:'2.5rem', display:'inline-block'}}/>
                    </div>

                )
                
                }{toggle ? (
                    <h2 onDoubleClick={toggleInput} className='TipoCards'>
                        {text.claveProveedor}
                    </h2>
                ) : (
                    <div style={{ textAlign:'left'}}>
                        <input type="text" value={text.claveProveedor} onChange={handleChange} className='TipoCards Index1' style={{minWidth:'85%',maxHeight:'1.5rem'}}/>
                    </div>
                )}
            </div>
            <div className="InformacionCard">
                <div className="FlexTextField">
                    <TextField
                            type='titleAndDescription'
                            title='Dirección: '
                            description={
                                toggle ? (
                                    <span onDoubleClick={toggleInput} className='DireccionCards'>
                                        {text.direccion}
                                    </span>
                                ) : (
                                    <input type="text" value={text.direccion} onChange={handleChange} className='DireccionCards InputTextField Index1'/>
                                    )
                                }
                        />
                </div>

                <div className="Flexbox">    
                    <div className="FlexTextField">
                    <TextField
                        type='titleAndDescription'
                        title='Ubicación: '
                        description={
                            toggle ? (
                                <span onDoubleClick={toggleInput} className='DireccionCards'>
                                        {text.ubicacion}
                                </span>
                            ) : (
                                <input type="text" value={text.ubicacion} onChange={handleChange} className='DireccionCards InputTextField Index1'/>
                                )
                            }
                    />        
                    </div>
                    <div className="FlexTextField">
                        <TextField
                            type='titleAndDescription'
                            title='Vista: '
                            description={
                                toggle ? (
                                    <span onDoubleClick={toggleInput} className='DireccionCards'>
                                            {text.vista}
                                    </span>
                                ) : (
                                    <select name="" id="" value={vista} className='DireccionCards InputTextField Index1' onChange={vistaChange}>
                                        <option value="Natural">
                                            Natural
                                        </option>
                                        <option value="Cruzada">
                                            Cruzada
                                        </option>
                                    </select>

                                )
                            }
                        />
                    </div>  
                </div>
                <div className="RowPadding1">
                    <div className="FlexTextField">
                            <TextField
                                type='titleAndDescription'
                                title='Vista: '
                                description={
                                    toggle ? (
                                        <span onDoubleClick={toggleInput} className='DireccionCards'>
                                                {text.tipo}
                                        </span>
                                    ) : (
                                        <select name="" id="" value={tipo} className='DireccionCards InputTextField Index1' onChange={tipoChange}>
                                            <option value="espectacular">
                                                Espectacular
                                            </option>
                                            <option value="muro">
                                                Muro
                                            </option>
                                            <option value="indoors">
                                                Indoors
                                            </option>
                                            <option value="urbanos">
                                                Urbanos
                                            </option>
                                        </select>

                                    )
                                }
                            />
                        </div> 
                </div>
                <div className="Flexbox MedidasCards">
                    <div className="FlexTextField">
                        <TextField
                            type='titleAndDescription'
                            title='Ancho: '
                            description={
                                toggle ? (
                                    <span onDoubleClick={toggleInput} className='DireccionCards'>
                                            {text.ancho}
                                    </span>
                                ) : (
                                    <input type="number" value={text.ancho} onChange={handleChange} className='DireccionCards InputTextField'/>
                                )
                            }
                        />
                    </div>
                    <div className="FlexTextField">
                        <TextField
                            type='titleAndDescription'
                            title='Alto: '
                            description={
                                toggle ? (
                                    <span onDoubleClick={toggleInput} className='DireccionCards'>
                                            {text.alto}
                                    </span>
                                ) : (
                                    <input type="number" value={text.alto} onChange={handleChange} className='DireccionCards InputTextField'/>
                                )
                            }
                        />
                    </div>
                </div>
                <div className="RowPadding1">
                    <div className="FlexTextField">
                            <TextField
                                type='titleAndDescription'
                                title='Implementaciones especiales: '
                                description={
                                    toggle ? (
                                        <span onDoubleClick={toggleInput} className='DireccionCards'>
                                                {text.implementaciones}
                                        </span>
                                    ) : (
                                        <select name="" id="" value={implementaciones} className='DireccionCards InputTextField Index1' onChange={implChange}>
                                            <option value="true">
                                                Si
                                            </option>
                                            <option value="false">
                                                No
                                            </option>
                                        </select>
                                    )
                                }
                            />
                        </div> 
                </div>
                <div>
                    <div onClick={()=>setClicActivo(!clicActivo)} style={{cursor:'pointer',maxWidth:'95%', margin:'0 auto'}}>
                        <PropertyBtn
                            property = 'Activo'
                            color = 'verde'
                            state = {clicActivo}
                        />
                    </div>
                    <div onClick={()=>setClicBloqueado(!clicBloqueado)} style={{cursor:'pointer',maxWidth:'95%', margin:'0 auto'}}>
                        <PropertyBtn
                            property = 'Bloqueado'
                            color = 'Rojo'
                            state = {clicBloqueado}
                        />
                    </div>
                    <div onClick={()=>(setClicIluminacion(!clicIluminacion))} style={{cursor:'pointer',maxWidth:'95%', margin:'0 auto'}}>
                        <PropertyBtn
                            property = 'Iluminación'
                            color = 'Amarillo'
                            state = {clicIluminacion}
                        />
                    </div>
                </div>
                <div className="RowPadding2">
                    <DynamicButton
                        type='buttons'
                        size='Chico'
                        button='guardar'
                        color='Azul'
                        onClick={()=>(handleChange)}
                    />    
                </div>
            </div>

        </div>
    )
}
export default ModalITemRendererEditInventarioProveedores;
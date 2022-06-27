import React from "react";
import { useState } from "react";
import BtnFunction from "../btnFunction/btnFunction";
import { getColorMedio, getModo } from "../../../utils/utils";
import '../../../index.css';


interface ModalBtnProps {
    closeModal?: any;
    data?: any;
    modalItemRenderer?: any;
    modo?: 
        'Dark' |
        '';
    width?: string;
    height?: string;
    button?: 
        'arrastrar' |
        'busqueda' |
        'carrito' |
        'circulo' |
        'descargar' |
        'editar' |
        'excel' |
        'guardar' |
        'kml' |
        'pauta' |
        'pdf' |
        'previsualizar' |
        'trafico' |
        'vaciar' |
        'graficas' |
        'menu' |
        'cerrar';
    color?:
        'Rojo' |
        'Azul' |
        'Amarillo' |
        'Verde' |
        'Gris'
}
function ModalClean({closeModal,data, modalItemRenderer, modo, width, height}:ModalBtnProps){
    const ModalRenderer = modalItemRenderer
    return(
        <div className="ModalBackground">
            <div className="ModalContainer">
                <div className="ModalBody">    
                    <div className={"ContenedorModal"+getModo(modo)} style={{
                        width:width,
                        height:height,
                    }}>
                        <div style={{position:'relative', display:'flex',justifyContent:'flex-end',paddingRight:'2rem', top:'2rem', zIndex:'1'}}>
                            <BtnFunction 
                                button="cerrar" 
                                color="none"
                                onClick={()=>closeModal(false)}
                                />
                        </div>
                        <div className="ContenidoModal">
                            <ModalRenderer
                                data={data}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ShowModal(props:ModalBtnProps){
    const [openModal, setOpenModal] = useState(false)
    return(
        <div>
            <BtnFunction
                button='previsualizar'
                color="Verde"
                onClick={()=>{
                    setOpenModal(true)
                }}
            />
            {openModal && <ModalClean closeModal={setOpenModal} height={props.height} width={props.width} data={props.data} modalItemRenderer={props.modalItemRenderer} modo={props.modo} /> }
        </div>
    )
}
const ModalBtn =(props:ModalBtnProps)=>{
    const [openModal, setOpenModal] = useState(false)
    const ModalRenderer= props.modalItemRenderer
    return(
        <div>
            <BtnFunction
                button={props.button}
                color={props.color}
                onClick={()=>setOpenModal(true)}
            />

        {openModal && <ModalClean 
        closeModal={setOpenModal} 
        data ={()=>{}} 
        modo={props.modo}
        width={props.width}
        height={props.height}
        modalItemRenderer={()=>(
            <ModalRenderer data={props.data}/>
        )}
        />}
    </div>
    )  
}

export default ModalBtn;
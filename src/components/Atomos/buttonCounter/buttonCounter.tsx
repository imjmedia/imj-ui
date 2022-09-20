import React, { useState } from "react";
import { validadorTrue } from '../../Img/Botones/validadorTrue.svg';
import DynamicButton from "../DynamicButton";
import './buttonCounter.css';

interface ButtonCounterProps {
  size?: 
    'Grande' |  
    'Mediano' |
    'Chico';
  color?: 
    'Azul' |
    'Amarillo'|
    'Rojo' |
    'Verde' |
    'none' |
    any;
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
    'cerrar' |
    'encendido' |
    'usuarioNuevo' |
    'agregar' |
    'bloqueado' |
    'noBloqueado' |
    'iluminacion' |
    'noIluminado' |
    'logOut' |
    'cerrarBorder' |
    'indoors' |
    'indoorsNegro' |
    'sitios' |
    'sitiosNegro' |
    'urbanos' |
    'urbanosNegro' |
    'cerrarBorder' |
    'arrastrarEjes'|
    'arrastrarMano'|
    'editarCuaderno'|
    'previsualizarDocumento'|
    'revertirVaciar'|
    'subir'|
    'urbanosFront'|
    'validadorFalse'|
    'validadorTrue'|
    'vallas'|
    'vallasFront'|
    any;
  value?: Number | string | any;
  onClick?: ()=>void;
  active?: any;
  setActive?: any;
  setCounter?: any;
  submenus?: any;
  contador?: boolean;
  validador?: boolean;
  setValidador?: any;
}
export const ButtonCounter = (props:ButtonCounterProps)=>{
  const {size, button, color, value, onClick,active,setActive,submenus, contador, setCounter, validador,setValidador} = props
  const colorBorde = (color:string)=>{
    switch (color) {
      case 'Amarillo': return '#FCB23B'
      case 'Verde': return '#1CBF59'
      case 'Rojo': return '#FC3D38'
      case 'Azul': return '#126EFA'
      case 'Magenta': return '#D11787'
      default:
        break;
    }
  }
  return(
    <div className="Dropdown-menu">
      <div className="NavigationIcon" style={{position:'absolute'}}>
          <div className={active ? 'MenuToggleIcon active' : 'MenuToggleIcon'}>
            {contador ?  <div  className='counter'style={{    
              border:`.3rem solid ${colorBorde(color?color : 'Azul')}`,
              }}>
              <span style={{display:'grid', placeItems:'center', fontWeight:'700'}}>{value ? value : '00'}</span>
            </div> : <></>}
            {validador ?  <div  
            style={{ 
              position:'absolute',
              fontSize:'1.3rem',
              background:'#FFF',
              width:'auto',
              minWidth:'2rem',
              height:'2rem',
              borderRadius:'2rem',
              top:'-.5rem',
              right:'-.5rem',
              zIndex:'1',
              }}>
              {/* <img src={validadorTrue} alt="" /> */}
              {validadorTrue}
            </div> : <></>}
            <DynamicButton
							type="buttons"
							button={!active ? button : 'cerrar'}
							color={!active ? color : 'none'}
							size={size ? size : 'Mediano'}
							onClick={() => {
								setActive(!active);
                contador && setCounter(!contador)
                validador && setValidador(!validador)
							}}
						/>
          </div>
          <div className={'MenuIcon'}>
            {submenus ? (
              submenus.map((e: any, index: any) => (
                <a
                  onClick={() => {
                    setActive(false);
                    e.onClick();
                  }}
                  key={index}
                >
                  {e.menu}
                </a>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
    </div>
  )
}
export default ButtonCounter;
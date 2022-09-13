import React from "react";
import './buttons.css';

interface ButtonsHierarchyProps{
  legend?: string; 
  style?: any;
  disabled?: boolean; 
  value?: string;
  id?: string; 
  className?: string;
  key?: string;
  title?: string;
  onClick?: ()=>void;
  tipo?: string;
}

const ButtonsHierarchy = (props:ButtonsHierarchyProps)=>{
  const {
    legend, 
    style,
    disabled, 
    value,
    id, 
    className,
    key,
    title,
    onClick,
    tipo,
  } = props;
  return (
    <button 
      style={style} 
      disabled={disabled} 
      value={value} 
      id={id}
      className={
        disabled ? 'disabled' : tipo === 'primary' ? 'PrimaryBtn ' + className : 
        tipo === 'secondary' ? 'SecondaryBtn ' + className : 
        tipo === 'tertiary' ? 'TertiaryBtn ' + className : '' 
      }
      key={key}
      title={title}
      onClick={onClick}
      >
      {legend}
    </button>
  )
}

interface ButtonsProps {
  primary?: {
    tipo?: any,
    legend?: any,
    style?: any,
    disabled?: any,
    value?: any,
    id?: any,
    className?: any,
    key?: any,
    title?: any,
    onClick?: any,
  }
  secondary?: {
    tipo?: any,
    legend?: any,
    style?: any,
    disabled?: any,
    value?: any,
    id?: any,
    className?: any,
    key?: any,
    title?: any,
    onClick?: any,
  }
  tertiary?: {
    tipo?: any,
    legend?: any,
    style?: any,
    disabled?: any,
    value?: any,
    id?: any,
    className?: any,
    key?: any,
    title?: any,
    onClick?: any,
  }
  style?: any,
}
const Buttons = (props:ButtonsProps)=>{
  const {primary, secondary, tertiary, style} = props;
  const tipoBtn = (btn:any, data:any)=>{
    return <ButtonsHierarchy
    tipo={btn}
    legend={data.legend} 
    style={data.style} 
    disabled={data.disabled} 
    value={data.value}
    id={data.id} 
    className={data.className}
    key={data.key}
    title={data.title}
    onClick={data.onClick}
  />
  }
  return (
    <>
      {primary || secondary || tertiary ?
        <div style={style}>
          {primary && tertiary && secondary ? (
            <div style={{display:'flex', justifyContent:'space-between'}}>
              {tipoBtn('secondary', secondary)}
              <div style={{display:'flex'}}>
                {tipoBtn('tertiary', tertiary)}
                {tipoBtn('primary', primary )}
              </div>
            </div>
          ): (primary || secondary) && (secondary || tertiary) ? (
            <div style={{display:'flex', justifyContent:'space-between'}}>
              {secondary ? tipoBtn('secondary', secondary) : <></>}
              <div style={{display:'flex'}}>
                {tertiary ? tipoBtn('tertiary', tertiary) : <></>}
                {primary ? tipoBtn('primary', primary ) : <></>}
              </div>
            </div>
          ) : primary? tipoBtn('primary', primary ) : secondary ? tipoBtn('secondary', secondary) : tertiary ?   tipoBtn('tertiary', tertiary) : <></> }
        </div> : <></>
      }
    </>
  )
}

export default Buttons;
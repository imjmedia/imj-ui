import React from "react";

interface ButtonProps{
    onClick?: ()=> void;
    width?: string;
    height?: string;
    color?: string;
    fontSize: string;
    legend?: string;
    click?: any;
}
const Button=(props:ButtonProps)=>{
    const medidas = {
        height: props.height || '30px',
        color: props.color || '#000',
        fontSize: props.fontSize || '20px',
        width: props.width || 'auto'
    }
    const click = props.click
    return(
        <button 
        style={{
            height:medidas.height,
            width: medidas.width,
            backgroundColor: medidas.color,
            fontSize: medidas.fontSize,
            display:"inline-block",
            padding: '0 20px',
            borderRadius:'15px',
            border: '0px',
            color: '#fff',
            fontWeight: 'lighter',
            cursor: 'pointer'
            }}
            onClick = {(click)}
            >
            {props.legend}          
        </button>      
    )  
}
export default Button;

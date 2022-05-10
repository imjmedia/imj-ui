import React from "react";

/*props*/
interface InputProps{
    justify: 'left' | 'center' | 'right';
    placeholder: string;
    color: 'Azul' | 'Amarillo' | 'Rojo' | 'Verde' | 'Aqua' | 'Gris' | 'Magenta' | ''
    type: 'date' | 'number' | 'text'
}



function titleCase(text:any){
    return (text[0].toUpperCase() + text.slice(1).toLowerCase())
}


/*Diseño y estilo*/
const Inputs = (props:InputProps) => {
    const justify = props.justify
    const placeholder = props.placeholder
    const color = titleCase(props.color)
    const type = props.type
    const Switchtipo = () => {
        switch (type) {
            case 'date': return ('date')
            case 'number': return('number')
            default: return('text')
        }}
    const SwitchJustify = () => {
        switch (justify) {
            case 'left':
                return(
                    <div className={"Inputs InputLeft Borde"+color}>
                        <input type={type} placeholder={placeholder}/>
                    </div> 
                )
            case 'right':
                return(
                    <div className={"Inputs InputRight Borde"+color}>
                        <input type={type} placeholder={placeholder}/>
                    </div>  
                )
            default:
                return(
                    <div className={"Inputs Borde"+color}>
                        <input type={type} placeholder={placeholder}/>
                    </div>  
                )
        }}
    if (type === undefined){
        return(
            <></>
        )
    } else {
        return(
            SwitchJustify
        )
    }
}

export default Inputs;
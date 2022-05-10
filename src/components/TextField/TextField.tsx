import React from "react";

interface TextFieldProps {
    title?: string | null;
    description?: string | number | null;
    labelColor?: 'Azul' | 'Rojo' | 'Aqua' | 'Magenta' | 'Amarillo' | 'Morado' | 'Verde' | 'Gris' | string | null;
}

const TextField = (props:TextFieldProps) => {
    const text = {
        title: props.title,
        description: props.description,
        labelColor: props.labelColor
    }
    if ((text.title === undefined || null) && (text.description === undefined || null )){
        return(
            <div className="CampoDescriptivo">
                <span className={"CampoDescripcion Campo"+text.labelColor}>0</span>  
            </div>
        )
    }
    if (text.title === undefined && text.labelColor){
        return(
            <div className="CampoDescriptivo">
                <span className={"CampoDescripcion Campo"+text.labelColor}>{text.description}</span>  
            </div>
        )
    } else {
        return(
            <div className="CampoDescriptivo">
                <span className="CampoTitulo">{text.title}</span>
                <span className={"CampoDescripcion Campo"+text.labelColor}>{text.description}</span>
            </div>  
        )
    }
}

export default TextField;
import React from "react";
import '../../../index.css';
import './index.css';


const getModo = (modo:any) => {
    switch (modo) {
        case 'Dark': return('DarkMode')
        default: return ''
    }
}

interface TextFieldProps{
    type: 'title' | 'description' | 'titleAndDescription' | any;
    title?: string | any;
    description?: string | any;
    labelColor?: 'Amarillo' | 'Azul' | 'Rojo' | 'Verde' | 'Magenta' | 'Gris' | 'Aqua' | 'Morado' | any;

    modo?:'Dark' | any;
}
const TextField = (props:TextFieldProps) => {
    const text:any = {
        type: props.type,
        title: props.title,
        description: props.description,
        labelColor: props.labelColor
    }
    switch (text.type) {
        case 'title':
                return(
                    <span className={"CampoTitulo"+getModo(props.modo)}>
                        {text.title}
                    </span>
                )
        case 'description':
            if (text.labelColor === undefined || null){
                return(
                    <span className={"CampoDescripcion"+getModo(props.modo)}>
                        {text.description}
                    </span>
                )
            } else {
                return(
                    <span className={"CampoDescripcion"+getModo(props.modo) + " "+"Campo"+text.labelColor}>
                        {text.description}
                    </span>
                )
            }
        case 'titleAndDescription':
            if (text.labelColor === undefined || null){
                return(
                    <div className={"CampoDescriptivo"}>
                        <span className={"CampoTitulo"+getModo(props.modo)}>
                            {text.title}
                        </span>
                        <span className={"CampoDescripcion"+getModo(props.modo)}>
                            {text.description}
                        </span>
                    </div>
                )
            } else {
                return(
                <div className={"CampoDescriptivo"}>
                        <span className={"CampoTitulo"+getModo(props.modo)}>
                            {text.title}
                        </span>
                        <span className={"CampoDescripcion"+getModo(props.modo)+ " "+"Campo"+text.labelColor}>
                            {text.description}
                        </span>
                    </div>
                )
            }
        default: return <></>
    }
}
export default TextField;
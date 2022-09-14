import React from "react";
import '../../../index.css';
import { getModo } from "../../../utils/utils";

// interface TextFieldProps{
//     // type: 'title' | 'description' | 'titleAndDescription' | any;
//     // title?: string | any;
//     description?: string | any;
//     // labelColor?: 'Amarillo' | 'Azul' | 'Rojo' | 'Verde' | 'Magenta' | 'Gris' | 'Aqua' | 'Morado' | any;
//     labelColor?: string;
//     modo?:string;
// }
interface TextFieldProps{
    description?: string | any;
    labelColor?: string;
    title?:string;
    style?: any;
    generalLabel?: string;
    modo?:string;
}
// const TextField = (props:TextFieldProps) => {
//     const text:any = {
//         type: props.type,
//         title: props.title,
//         description: props.description,
//         labelColor: props.labelColor
//     }
//     switch (text.type) {
//         case 'title':
//                 return(
//                     <span className={"CampoTitulo"+getModo(props.modo)}>
//                         {text.title}
//                     </span>
//                 )
//         case 'description':
//             if (text.labelColor === undefined || null){
//                 return(
//                     <span className={"CampoDescripcion"+getModo(props.modo)}>
//                         {text.description}
//                     </span>
//                 )
//             } else {
//                 return(
//                     <span className={"CampoDescripcion"+getModo(props.modo) + " "+"Campo"+text.labelColor}>
//                         {text.description}
//                     </span>
//                 )
//             }
//         case 'titleAndDescription':
//             if (text.labelColor === undefined || null){
//                 return(
//                     <div className={"CampoDescriptivo"}>
//                         <span className={"CampoTitulo"+getModo(props.modo)}>
//                             {text.title}
//                         </span>
//                         <span className={"CampoDescripcion"+getModo(props.modo)}>
//                             {text.description}
//                         </span>
//                     </div>
//                 )
//             } else {
//                 return(
//                 <div className={"CampoDescriptivo"}>
//                         <span className={"CampoTitulo"+getModo(props.modo)}>
//                             {text.title}
//                         </span>
//                         <span className={"CampoDescripcion"+getModo(props.modo)+ " "+"Campo"+text.labelColor}>
//                             {text.description}
//                         </span>
//                     </div>
//                 )
//             }
//         default: return <></>
//     }
// }

const secundario ='#575757'
const secundarioDark ='#BFBFBF'
const terciario = '#707070'
const terciarioDark = '#808080'
export const TextField = (props:TextFieldProps)=> {
    const {title, description, style, generalLabel, labelColor, modo} = props;
    return(
      <div style={style}>
        <span style={
          generalLabel ? { 
            background: generalLabel, 
            padding:'10px 15px', 
            fontSize:'13px',
            color:'#fff', 
            fontWeight:'700', 
            textAlign:'left',
            borderRadius:'10px'
          }:{
          fontSize:'13px',
          color: modo === 'Dark' ? secundarioDark : secundario, 
          fontWeight:'700', 
          textAlign:'left',
        }}> {title} {description ? 
          <span style={
            generalLabel ?{
              color:'#fff' , 
              fontWeight:'400'
              }: labelColor ? {
                background:labelColor, 
                color:'#fff' , 
                fontWeight:'400', 
                padding:'10px 15px', 
                margin:'1rem 0', 
                borderRadius:'10px'
                } : {
                  color:modo === 'Dark' ? terciarioDark : terciario , 
                  fontWeight:'400'
                  }}>
                    {description}
            </span> 
              : 
            <></>
            }
        </span>
      </div>
    )
  }
export default TextField;
import React from "react";
import '../../../index.css';
// import { getModo } from "../../../utils/utils";
import falseIcon from '../../Img/Botones/validadorFalse.svg';
import trueIcon from '../../Img/Botones/validadorTrue.svg';

// interface TitlesCardsProps{
//     clave?:string | any;
//     type?: string | any;
//     modo?: string | any;
// }
// const TitlesCards = (props:TitlesCardsProps) => {
//     const clave = props.clave
//     const type = props.type
//     return(
//         <div>
//             <h2 className={"ClaveCards"+getModo(props.modo)}>
//                 {clave}
//             </h2>
//             <h3 className={"TipoCards"+getModo(props.modo)}>
//                 {type}
//             </h3>
//         </div>
//     )
// }
interface TitlesCardsProps{
    clave?:string | any;
    type?: string | any;
    modo?: string | any;
    state?: boolean;
    property?: string;
    color?: string;
  }
  interface TitlesProps{
    title?:string;
    modo?: string;
  }
  interface SubtitlesProps{
    subtitle?:string;
    modo?: string;
  }
  const primario = '#3D3D3D'
  const primarioDark = '#E6E6E6'
  const secundario ='#575757'
  const secundarioDark ='#BFBFBF'
  const terciario = '#707070'
  const terciarioDark = '#808080'

    const Titles = (props:TitlesProps)=> {
      const {title, modo} = props
      return (
      <h2 style={{
        fontSize:'25px',
        fontWeight:'500',
        textAlign:'left',
        marginBlock:'0',
        color: modo === 'Dark' ? primarioDark : primario,
        textOverflow:'ellipsis',
        overflow:'hidden',
        display:'-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient:'vertical'
      }} title={title}>
        {title}
      </h2>
      )
    }
    
    const Subtitle = (props:SubtitlesProps)=> {
      const {subtitle, modo} = props
      return (
      <h3 style={{
        fontSize:'18px',
        fontWeight:'300',
        textAlign:'left',
        marginBlock:'0', 
        color: modo === 'Dark' ? secundarioDark : secundario
    
      }}>
        {subtitle}
      </h3>
      )
    }
    const BodyText = (props:any)=> {
      const {text, style, modo} = props;
      return (
        <div style={style}>
          <p style={{
              marginBlock:'0', 
              fontSize:'13px',
              color: modo === 'Dark' ? terciarioDark : terciario
            }}>
              {text}
          </p>
        </div>
      )
    }

    const StateProperty = (props:any)=>{
      const {icon, style} = props;
      return (
        <div style={style}>
          <div style={{
            height:'20px',
          }}>
            <img 
            src={icon ? trueIcon : falseIcon} 
            alt="" 
            style={{
              height:'20px',
              marginBottom:'5px',
            }}/>
          </div>
        </div>
      )
    }
    const Property = (props:any) => {
      const {property, estado,modo} = props;
      return(
        <>
          <div style={{
            display:'flex', 
            flexWrap:'wrap'
            }}>
            <div style={{width:'100%'}}>
              <StateProperty 
                icon={estado} 
                style={{justifyContent:'right', width:'100%'}} 
                estado={estado}
              />
            </div>
            <div style={{width:'100%'}}>
              <BodyText 
                text={property}  
                style={{textAlign:'center'}}
                modo={modo}
              />
            </div>
          </div>
        </>
      )
    }
  export const TitlesCards = (props:TitlesCardsProps) => {
    const {clave, type, state, property,color, modo} = props;
    return(
        <div style={{
            display:'flex', 
            justifyContent:'space-between', 
            alignItems:'center', 
            width:'300px',
            paddingBottom:'1rem', 
            borderBottom:`.2rem solid ${color}`
          }}>
          <div >
            <Titles title={clave} modo={modo}/>
            <Subtitle subtitle={type} modo={modo}/>
          </div>
          {
          property ? 
          <Property 
            property={property} 
            estado={state}
            modo={modo}
          />  
          :
          <></> 
          }       
        </div>
    )
  }

export default TitlesCards;
import React, { useState } from "react";
import '../../../index.css';
import BtnFunction from "../../Atomos/btnFunction";
import PrecioCosto from "../../Atomos/PrecioCosto";
import PropertyBtn from "../../Atomos/PropertyBtn";
import TextField from "../../Atomos/TextField";
import noImagen from '../../Img/Img/noImagen.jpg';
import './formaPrevIndoorsMap.css';

interface PrevIndoorsProps {
    imagenSitio?: any;
    onClickEspacios?: ()=>void;
    onSelectEspacios?: ()=>void;
    espacios?: any;//array con espacios dentro del nivel
    niveles?: any; //array con niveles
    onClickNiveles?: ()=>void;
    mapaNivel?: any;
    descripcion?: string;
    ancho?: number | string;
    alto?: number | string;
    ubicacion?: string;
    nivelPiso?: boolean;
    material?: string;
    activo?: boolean;
    onClickCarrito?: ()=>void;
    precio?: string;
    plazaComercial?: string;
}

const PrevIndoorsMap = (props:PrevIndoorsProps) => {
    const {imagenSitio,onClickEspacios,onSelectEspacios, espacios, niveles, onClickNiveles, mapaNivel,descripcion,ancho,alto,ubicacion,nivelPiso,material,activo,onClickCarrito,precio, plazaComercial} = props;
    
    const Directorio = ()=>{
        const nivelesDisp = niveles
        const Niveles = ()=>{
            if (niveles){
                const nivel = nivelesDisp.map((niv:any) => (<h3 className='NivelIndoor Hover' onClick={onClickNiveles}>
                    {niv}
                </h3>))
                if (niveles.length > 5){
                    return <div className="Columnas2">{nivel}</div>
                } else return nivel
            }
            else { return <h3>No hay Niveles</h3> }
    
        }
        return (
            <div>
                <h2 style={{textAlign:'left',color:'#52525275'}}>
                    Directorio
                </h2>
                {<Niveles/>}
            </div>
        )
    }
    const Plaza = (  ) => {
        const Sitios = ()=>{
            const espaciosDisponibles = espacios
            if (espaciosDisponibles) {
                const sitio = espaciosDisponibles.map((niv:any) => (
                    <h3 className="BtnSitios Hover" onClick={onClickEspacios} onSelect={onSelectEspacios}>{niv}</h3>))
                    return <div className='SitiosDisp'>{sitio}</div>
            } else {return <h2 style={{position:'relative', top:'45%', left:'50%', transform:'translate(-50%, -50%)'}}>No hay Sitios por mostrar</h2>}
        }
        return (
            <div style={{background:'#fff',paddingRight:'1rem'}}>
                    <div className="HeaderPrevIndoors">
                        <h2>{plazaComercial}</h2>
                    </div>
                    <div className="MapaPrevIndoors">
                        <img src={mapaNivel || noImagen} alt="MapaNivel" />
                    </div>
                <div className="SitiosMapaIndoors">  
                    <Directorio/>
                    <div className="ShadowCards">
                        {<Sitios/>}
                    </div>    
                </div>
            </div>
        )
    }
    const FichaIndoor = () => {
        return (
            <div className='ShadowCards'>
                <div className="ImgSitio">
                    <img src={imagenSitio || noImagen} alt="ImagenSitio" />
                </div>
                <div className="TextOverflowDescription" style={{margin:'1rem auto'}}>
                    <TextField
                        type='titleAndDescription'
                        title='Descripción: '
                        description={descripcion}
                    />
                </div>
                <TextField
                    type='titleAndDescription'
                    title='Medidas: '
                    description={(ancho || 0) + 'm de ancho x ' +(alto || 0)+ 'm de alto'}
                    labelColor='Amarillo'
                />
                <div className="Columnas2" style={{alignItems:'flex-start'}}>
                    <TextField
                        type='titleAndDescription'
                        title='Ubicación: '
                        description={ubicacion}
                    />
                    <TextField
                        type='titleAndDescription'
                        title='Nivel de piso: '
                        description={nivelPiso === true? 'Si' : 'No'}
                        labelColor='Amarillo'
                    />
                </div>
                <TextField
                    type='titleAndDescription'
                    title='Material: '
                    description={material}
                />
                <div style={{position:'absolute', top:'80%' ,transform:'translate(4%, 0)'}}>
                    <div style={{width:'50%', margin:'0 auto'}}>
                        <PropertyBtn property={activo === true ? 'Activo' : 'Inactivo'} state={activo || false} color='Verde'/>
                    </div>
                    <div className="Columnas2" style={{minWidth:'25vw'}}>
                        <BtnFunction button='carrito' color='Amarillo' onClick={onClickCarrito}/>
                        <PrecioCosto type='precio' tipoMedio='indoors' precio={precio || 0}/>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="PrevIndoorsMap ShadowCards">
            <div className="ContenidoPrevIndoors">
                <Plaza/>
                {espacios && <FichaIndoor/>}
            </div>
        </div>
        
    )
}
export default PrevIndoorsMap;
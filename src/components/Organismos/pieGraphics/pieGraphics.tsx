import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js'
import {Pie} from 'react-chartjs-2';
import '../../../index.css'

interface PieGraphicsProps{
    modo?: string | any;
    type?: 'nse' | 'edad';
    style?: object;

    nseA?: number | any;
    nseB?: number | any;
    nseC?: number | any;
    nseD?: number | any;
    nseE?: number | any;
    edad13?:number | any;
    edad18?:number | any;
    edad26?:number | any;
    edad41?:number | any;
    edad55?:number | any;
    default?: number | any;
}
ChartJS.register(ArcElement, Tooltip, Legend);
const mode = (modo:any) =>{
    switch (modo) {
        case 'Dark': return ('#333333')    
        default: return('#fff')
    }
}
const PieGraphics =(props:PieGraphicsProps)=>{
    const type = props.type;

    const GraficasEdad=(props:PieGraphicsProps)=>{
        const data = {
            labels: [],
            datasets: [
                {
                    data:[
                        props.edad13,
                        props.edad18,
                        props.edad26,
                        props.edad41,
                        props.edad55,
                        props.default,
                    ],
                    backgroundColor: [
                        '#126EFA',
                        '#FC3D38',
                        '#1CB5B2',
                        '#D11787',
                        '#FCB23B',
                        '#874AFA'
                    ],
                    borderColor:[
                        mode(props.modo),
                    ],
                    borderWidth: 3,
                    with:'100px'
                    
                },
            ],
        };
        return(
            <div className="GraficasCards">
                <Pie 
                    data={data}
                />
            </div>
        )
    }
    const GraficasNse =(props:PieGraphicsProps) => {
        const data = {
            labels: [],
            datasets: [
                {
                    data:[
                        props.nseA,
                        props.nseB,
                        props.nseC,
                        props.nseD,
                        props.nseE,
                        props.default,
                    ],
                    backgroundColor: [
                        '#126EFA',
                        '#FC3D38',
                        '#1CB5B2',
                        '#D11787',
                        '#FCB23B',
                        '#874AFA'

                    ],
                    borderColor: [
                        mode(props.modo),
                    ],
                    borderWidth: 3,
                },
            ],
        };
        return(
            <div className="GraficasCards" style={props.style} >
                <Pie 
                    data={data}
                />
            </div>
        )
    }
    
    switch (type) {
        case 'edad':
            return(
                <>
                <GraficasEdad
                    modo = {props.modo}
                    edad13 = {props.edad13}
                    edad18 = {props.edad18}
                    edad26 = {props.edad26}
                    edad41 = {props.edad41}
                    edad55 = {props.edad55}
                /> 
                </>
            ) 
        case 'nse':
            return(
                <GraficasNse
                    modo = {props.modo}
                    nseA = {props.nseA}
                    nseB = {props.nseB}
                    nseC = {props.nseC}
                    nseD = {props.nseD}
                    nseE = {props.nseE}
                />
            )
        default:
            return(<></>)
    }
}

export default PieGraphics;
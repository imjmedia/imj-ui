import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js'
import {Pie} from 'react-chartjs-2';
import '../../../index.css';
import './index.css';

interface PieGraphicsProps{
    modo?: string | any;

    type: 'edad' | 'nse';
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
}
ChartJS.register(ArcElement, Tooltip, Legend);
export const mode = (modo:any) =>{
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
                    ],
                    backgroundColor: [
                        '#126EFA',
                        '#FC3D38',
                        '#1CB5B2',
                        '#D11787',
                        '#FCB23B'
                    ],
                    borderColor:[
                        mode(props.modo),
                    ],
                    borderWidth: 3,
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
                    ],
                    backgroundColor: [
                        '#126EFA',
                        '#FC3D38',
                        '#1CB5B2',
                        '#D11787',
                        '#FCB23B'
                    ],
                    borderColor: [
                        mode(props.modo),
                    ],
                    borderWidth: 3,
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
    
    switch (type) {
        case 'edad':
            return(
                <>
                <GraficasEdad
                    type = 'edad'
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
                    type = 'nse'
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
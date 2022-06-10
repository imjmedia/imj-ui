/// <reference types="react" />
import "../../../index.css";
import "./index.css";
interface PieGraphicsProps {
    modo?: string | any;
    type: "edad" | "nse";
    nseA?: number | any;
    nseB?: number | any;
    nseC?: number | any;
    nseD?: number | any;
    nseE?: number | any;
    edad13?: number | any;
    edad18?: number | any;
    edad26?: number | any;
    edad41?: number | any;
    edad55?: number | any;
}
export declare const mode: (modo: any) => "#333333" | "#fff";
declare const PieGraphics: (props: PieGraphicsProps) => JSX.Element;
export default PieGraphics;

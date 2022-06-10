/// <reference types="react" />
interface DynaButtProps {
    type: "buttons" | "icons" | any;
    size?: "Grande" | "Mediano" | "Chico" | any;
    color?: "Amarillo" | "Azul" | "Rojo" | "Verde" | "Magenta" | "Gris" | "Aqua" | "Morado" | any;
    button?: "arrastrar" | "busqueda" | "carrito" | "circulo" | "descargar" | "editar" | "excel" | "guardar" | "kml" | "pauta" | "pdf" | "previsualizar" | "trafico" | "vaciar" | "graficas" | "ubicaciongeografica" | "iluminacion" | "bloqueado" | "nicho" | "material" | "cerrar" | "etiqueta" | "etiquetaAzul" | "etiquetaAmarillo" | "etiquetaMagenta" | "etiquetaRojo" | "hombres" | "mujeres" | any;
}
declare const DynamicButton: (props: DynaButtProps) => JSX.Element;

interface LogoProps {
    logo: "Imj" | "Obp" | "ByImj";
    modo?: string | any;
}
declare const Logo: (props: LogoProps) => JSX.Element;

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
declare const PieGraphics: (props: PieGraphicsProps) => JSX.Element;

interface PrecioCostoProps {
    type: "precio" | "costo" | "precioCosto";
    tipoMedio?: string | any;
    precio?: number | any;
    costo?: number | any;
}
declare const PrecioCosto: (props: PrecioCostoProps) => JSX.Element;

interface PropertyBtnProps {
    property?: string | any;
    color?: "Amarillo" | "Azul" | "Rojo" | "Verde" | "Magenta" | "Gris" | "Aqua" | "Morado" | any;
    state?: true | false;
}
declare const PropertyBtn: (props: PropertyBtnProps) => JSX.Element;

interface TextFieldProps {
    type: "title" | "description" | "titleAndDescription" | any;
    title?: string | any;
    description?: string | any;
    labelColor?: "Amarillo" | "Azul" | "Rojo" | "Verde" | "Magenta" | "Gris" | "Aqua" | "Morado" | any;
    modo?: "Dark" | any;
}
declare const TextField: (props: TextFieldProps) => JSX.Element;

interface TitlesCardsProps {
    clave?: string | any;
    type?: string | any;
    modo?: string | any;
}
declare const TitlesCards: (props: TitlesCardsProps) => JSX.Element;

interface AsideProps {
    show?: boolean | any;
    children?: any;
    handleClose?: () => void;
    typeModal?: "Graficas" | "Previsualizar" | any;
    tipoCard?: "abcSitios" | "inventarioComercial" | "visualizadorPauta" | "rutasImj";
    modo?: string | any;
    tipoMedio?: string | any;
    clave?: string | any;
    proveedor?: string | any;
    claveProveedor?: string | any;
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    numeroHombres?: number | any;
    porcentajeHombres?: number | any;
    numeroMujeres?: number | any;
    porcentajeMujeres?: number | any;
    nseA?: number | any;
    totalNseA?: number | any;
    nseB?: number | any;
    totalNseB?: number | any;
    nseC?: number | any;
    totalNseC?: number | any;
    nseD?: number | any;
    totalNseD?: number | any;
    nseE?: number | any;
    totalNseE?: number | any;
    edad13?: number | any;
    totalEdad13?: number | any;
    edad18?: number | any;
    totalEdad18?: number | any;
    edad26?: number | any;
    totalEdad26?: number | any;
    edad41?: number | any;
    totalEdad41?: number | any;
    edad55?: number | any;
    totalEdad55?: number | any;
    imagen?: any;
    tipo?: string | any;
    porcentajeUsuarios?: number | any;
    porcentajeImpactos?: number | any;
    direccion?: string | any;
    colonia?: string | any;
    cdEdo?: string | any;
    vialidad?: string | any;
    ancho?: number | any;
    alto?: number | any;
    material?: string | any;
    acabados?: string | any;
    iluminacion?: string | any;
    vista?: string | any;
    nicho?: string | any;
    estadoImplementaciones?: boolean;
    descripcion?: string | any;
    qr?: any;
}
declare const Aside: (props: AsideProps) => JSX.Element;

interface CardsPorcentajesProps {
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeHombres?: number | any;
    numeroHombres?: number | any;
    porcentajeMujeres?: number | any;
    numeroMujeres?: number | any;
    modo?: string | any;
}
declare const CardsPorcentajes: (props: CardsPorcentajesProps) => JSX.Element;

interface GraficasCardsProps {
    tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;
    clave?: string | any;
    proveedor?: string | any;
    claveProveedor?: string | any;
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
    totalEdad13?: number | any;
    totalEdad18?: number | any;
    totalEdad26?: number | any;
    totalEdad41?: number | any;
    totalEdad55?: number | any;
    totalNseA?: number | any;
    totalNseB?: number | any;
    totalNseC?: number | any;
    totalNseD?: number | any;
    totalNseE?: number | any;
    porcentajeUsuarios?: number | any;
    porcentajeImpactos?: number | any;
    modo?: string | any;
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeHombres?: number | any;
    numeroHombres?: number | any;
    porcentajeMujeres?: number | any;
    numeroMujeres?: number | any;
}
declare const GraficasCardsFront: (props: GraficasCardsProps) => JSX.Element;

interface PropsPrevisualizarCards {
    modo?: string | any;
    imagen?: any;
    tipoMedio?: "espectacular" | "muro" | "urbanos" | "indoors";
    clave?: string;
    tipo?: string;
    nseA?: number;
    totalNseA?: number;
    nseB?: number;
    totalNseB?: number;
    nseC?: number;
    totalNseC?: number;
    nseD?: number;
    totalNseD?: number;
    nseE?: number;
    totalNseE?: number;
    edad13?: number | any;
    totalEdad13?: number | any;
    edad18?: number | any;
    totalEdad18?: number | any;
    edad26?: number | any;
    totalEdad26?: number | any;
    edad41?: number | any;
    totalEdad41?: number | any;
    edad55?: number | any;
    totalEdad55?: number | any;
    numeroHombres?: number | any;
    porcentajeHombres?: number | any;
    numeroMujeres?: number | any;
    porcentajeMujeres?: number | any;
    totalUsuarios?: number | any;
    porcentajeUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeImpactos?: number | any;
    direccion?: string | any;
    colonia?: string | any;
    cdEdo?: string | any;
    vialidad?: string | any;
    ancho?: number | any;
    alto?: number | any;
    material?: string | any;
    acabados?: string | any;
    iluminacion?: string | any;
    vista?: string | any;
    nicho?: string | any;
    estadoImplementaciones?: true | false | any;
    descripcion?: string | any;
    alcance?: number | any;
    frecuencia?: number | any;
    qr?: any;
}
declare const PrevisualizarCards: (props: PropsPrevisualizarCards) => JSX.Element;

interface CardsProps {
    ruta?: string | any;
    id?: string | any;
    inicioRuta?: string | any;
    destinoRuta?: string | any;
    kilometraje?: number | any;
    tipoCard?: "abcSitios" | "inventarioComercial" | "inventarioProveedores" | "visualizadorPauta" | "rutasImj" | any;
    modo?: string | any;
    tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;
    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    ubicacion?: string | any;
    vista?: "Natural" | "Cruzada";
    ancho?: number | any;
    alto?: number | any;
    implementaciones?: "Si" | "No";
    estadoActivo?: true | false;
    longitud?: number | any;
    latitud?: number | any;
    iluminacion?: "Si" | "No";
    bloqueado?: "Si" | "No";
    nicho?: string | any;
    material?: string | any;
    descripcion?: string | any;
    precio?: number | any;
    costo?: number | any;
    proveedor?: string | any;
    claveProveedor?: string | any;
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeHombres?: number | any;
    numeroHombres?: number | any;
    porcentajeMujeres?: number | any;
    numeroMujeres?: number | any;
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
    totalEdad13?: number | any;
    totalEdad18?: number | any;
    totalEdad26?: number | any;
    totalEdad41?: number | any;
    totalEdad55?: number | any;
    totalNseA?: number | any;
    totalNseB?: number | any;
    totalNseC?: number | any;
    totalNseD?: number | any;
    totalNseE?: number | any;
    porcentajeUsuarios?: number | any;
    porcentajeImpactos?: number | any;
    colonia?: string | any;
    cdEdo?: string | any;
    vialidad?: string | any;
    acabados?: string | any;
    estadoImplementaciones?: true | false;
    imagen?: any;
    qr?: any;
    estadoBloqueado?: true | false;
    estadoIluminacion?: true | false;
}
declare const Cards: (props: CardsProps) => JSX.Element | undefined;

interface CardsAbcSitiosProps {
    show?: boolean | any;
    children?: any;
    handleClose?: () => void;
    typeModal?: "Graficas" | "Previsualizar" | any;
    tipoCard?: "abcSitios" | "inventarioComercial" | "visualizadorPauta" | "rutasImj";
    modo?: string | any;
    tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;
    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    ubicacion?: string | any;
    vista?: "Natural" | "Cruzada";
    ancho?: number | any;
    alto?: number | any;
    implementaciones?: "Si" | "No";
    estadoActivo?: true | false;
    longitud?: number | any;
    latitud?: number | any;
    iluminacion?: "Si" | "No";
    bloqueado?: "Si" | "No";
    nicho?: string | any;
    material?: string | any;
    descripcion?: string | any;
    precio?: number | any;
    costo?: number | any;
    proveedor?: string | any;
    claveProveedor?: string | any;
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeHombres?: number | any;
    numeroHombres?: number | any;
    porcentajeMujeres?: number | any;
    numeroMujeres?: number | any;
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
    totalEdad13?: number | any;
    totalEdad18?: number | any;
    totalEdad26?: number | any;
    totalEdad41?: number | any;
    totalEdad55?: number | any;
    totalNseA?: number | any;
    totalNseB?: number | any;
    totalNseC?: number | any;
    totalNseD?: number | any;
    totalNseE?: number | any;
    porcentajeUsuarios?: number | any;
    porcentajeImpactos?: number | any;
    colonia?: string | any;
    cdEdo?: string | any;
    vialidad?: string | any;
    acabados?: string | any;
    estadoImplementaciones?: true | false;
    imagen?: any;
    qr?: any;
}
declare const CardsAbcSitios: (props: CardsAbcSitiosProps) => JSX.Element;

interface CardsInventarioComercialProps {
    tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;
    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    ubicacion?: string | any;
    vista?: "Natural" | "Cruzada";
    ancho?: number | any;
    alto?: number | any;
    implementaciones?: "Si" | "No";
    estadoActivo?: true | false;
    longitud?: number | any;
    latitud?: number | any;
    iluminacion?: "Si" | "No";
    bloqueado?: "Si" | "No";
    nicho?: string | any;
    material?: string | any;
    descripcion?: string | any;
    precio?: number | any;
    costo?: number | any;
    proveedor?: string | any;
    claveProveedor?: string | any;
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeHombres?: number | any;
    numeroHombres?: number | any;
    porcentajeMujeres?: number | any;
    numeroMujeres?: number | any;
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
    totalEdad13?: number | any;
    totalEdad18?: number | any;
    totalEdad26?: number | any;
    totalEdad41?: number | any;
    totalEdad55?: number | any;
    totalNseA?: number | any;
    totalNseB?: number | any;
    totalNseC?: number | any;
    totalNseD?: number | any;
    totalNseE?: number | any;
    porcentajeUsuarios?: number | any;
    porcentajeImpactos?: number | any;
    colonia?: string | any;
    cdEdo?: string | any;
    vialidad?: string | any;
    acabados?: string | any;
    estadoImplementaciones?: true | false;
    imagen?: any;
    qr?: any;
    modo?: string | any;
}
declare const CardsInventarioComercial: (props: CardsInventarioComercialProps) => JSX.Element;

interface CardsInventarioProveedoresProps {
    tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;
    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    vista?: string | any;
    ubicacion?: string | any;
    ancho?: number | any;
    alto?: number | any;
    implementaciones?: "Si" | "No" | any;
    estadoActivo?: true | false;
    estadoBloqueado?: true | false;
    estadoIluminacion?: true | false;
    modo?: string | null;
}
declare const CardsInventarioProveedores: (props: CardsInventarioProveedoresProps) => JSX.Element;

interface CardRecorridoProps {
    modo?: string | any;
    imagen?: string | any;
    tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;
    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    ubicacion?: string | any;
    vista?: "Natural" | "Cruzada";
    ancho?: number | any;
    alto?: number | any;
    material?: string | any;
    descripcion?: string | any;
    estadoActivo?: true | false;
    estadoIluminacion?: true | false;
    numeroHombres?: number | any;
    porcentajeHombres?: number | any;
    numeroMujeres?: number | any;
    porcentajeMujeres?: number | any;
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    totalEdad13?: number | any;
    totalEdad18?: number | any;
    totalEdad26?: number | any;
    totalEdad41?: number | any;
    totalEdad55?: number | any;
    totalNseA?: number | any;
    totalNseB?: number | any;
    totalNseC?: number | any;
    totalNseD?: number | any;
    totalNseE?: number | any;
}
declare const CardsRecorrido: (props: CardRecorridoProps) => JSX.Element;

interface CardsRutasIMJProps {
    tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;
    ruta?: string | any;
    id?: string | any;
    clave?: string | any;
    ubicacion?: string | any;
    inicioRuta?: string | any;
    destinoRuta?: string | any;
    kilometraje?: number | any;
    estadoActivo?: true | false;
    modo?: string | any;
}
declare const CardsRutasIMJ: (props: CardsRutasIMJProps) => JSX.Element;

interface CardsVisualizaPautaProps {
    tipoMedio: "espectacular" | "muro" | "urbanos" | "indoors" | any;
    clave?: string | any;
    tipo?: string | any;
    direccion?: string | any;
    ancho?: number | any;
    alto?: number | any;
    precio?: number | any;
    descripcion?: string | any;
    proveedor?: string | any;
    claveProveedor?: string | any;
    alcance?: number | any;
    frecuencia?: number | any;
    totalUsuarios?: number | any;
    totalImpactos?: number | any;
    porcentajeHombres?: number | any;
    numeroHombres?: number | any;
    porcentajeMujeres?: number | any;
    numeroMujeres?: number | any;
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
    totalEdad13?: number | any;
    totalEdad18?: number | any;
    totalEdad26?: number | any;
    totalEdad41?: number | any;
    totalEdad55?: number | any;
    totalNseA?: number | any;
    totalNseB?: number | any;
    totalNseC?: number | any;
    totalNseD?: number | any;
    totalNseE?: number | any;
    porcentajeUsuarios?: number | any;
    porcentajeImpactos?: number | any;
    colonia?: string | any;
    cdEdo?: string | any;
    vialidad?: string | any;
    acabados?: string | any;
    estadoImplementaciones?: true | false;
    material?: string | any;
    iluminacion?: "Si" | "No" | any;
    vista?: string | any;
    nicho?: string | any;
    imagen?: any;
    qr?: any;
    modo?: any;
}
declare const CardsVisualizaPauta: (props: CardsVisualizaPautaProps) => JSX.Element;

export { Aside, Cards, CardsAbcSitios, CardsInventarioComercial, CardsInventarioProveedores, CardsPorcentajes, CardsRecorrido, CardsRutasIMJ as CardsRutasImj, CardsVisualizaPauta, DynamicButton, GraficasCardsFront as GraficasCards, Logo, PieGraphics, PrecioCosto, PrevisualizarCards, PropertyBtn, TextField, TitlesCards };

import React from "react";
import '../../../index.css';
import { colores, getColorMedio, getModo, modoTipoMedio, porcentaje } from "../../../utils/utils";
import BtnFunction from "../../Atomos/btnFunction";
import DynamicButton from "../../Atomos/DynamicButton";
import Logo from "../../Atomos/Logo";
import TextField from "../../Atomos/TextField";
import TitlesCards from "../../Atomos/TitlesCards";
import hombres from '../../Img/Iconos/hombres.svg';
import mujeres from '../../Img/Iconos/mujeres.svg';
import noImagen from '../../Img/img/noImagen.jpg';
import '../formaPrevRutas/index.css';

// interface FichaRutasMapsProps{
//     imagen?: any;
//     clave?: string;
//     ruta?: string;
//     totalMujeres?: string | number;
//     porcentajeMujeres?: string | number;
//     totalHombres?: string | number;
//     porcentajeHombres?: string | number;
//     alcance?: string | number;
//     frecuencia?: string | number;
//     impactosRuta?: string | number;
//     impactosTotales?: string | number;
//     modo?: string;
//     inicio?: string;
//     destino?: string;
//     kilometraje?: string | number;
//     tipoMedio?: 
//         'espectacular'|  
//         'muro' |
//         'urbanos' |
//         'indoors';
//     derrotero?: string;
//     tipoExhibicion?: string;
// }
// const FichaRutasMap = (props:FichaRutasMapsProps) => {
//     return (
//         <div className="ContenedorRutasPrev" style={{ maxWidth: '60vw' }}>

//             <div className="Columnas2PrevRutas AlignTop">
//                 <div className="ContenidoIdentificacion" style={{ paddingLeft: '1rem' }}>
//                     <Logo
//                         logo='ByImj'
//                         style={{height:'7rem', display:'flex', marginLeft:'2rem'}}
//                     />
//                     <div className={"EncabezadoCard BorderBottom" + getColorMedio('urbanos')}>
//                         <div className="Flexbox" style={{ alignItems: 'center' }}>
//                             <TitlesCards
//                                 modo={props.modo}
//                                 clave={props.clave}
//                                 type={props.ruta}
//                             />
//                         </div>
//                     </div>
//                     <div className="ColumnasRutas" style={{ marginTop: '1rem' }}>
//                         <div>
//                             <TextField
//                                 title='Inicio: '
//                                 description={props.inicio}
//                             />
//                         </div>
//                         <div>
//                             <TextField
//                                 title='Tipo de Exhibición: '
//                                 description={props.tipoExhibicion}
//                             />
//                         </div>
//                         <div>
//                             <TextField
//                                 title='Destino: '
//                                 description={props.destino}
//                             />
//                         </div>
//                         <div>
//                             <TextField
//                                 title='Kilometraje: '
//                                 description={props.kilometraje}
//                             />
//                         </div>
//                     </div>
//                     <div className="" style={{ marginTop: '2rem', marginBottom: '2rem', }}>
//                         <div className="Metricas">
//                             <div>
//                                 <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
//                                     <img src={mujeres} alt="" style={{ maxHeight: '2.5rem' }} />
//                                     <p style={{ fontWeight: 'bold' }}>Mujeres: {props.totalMujeres || 0}</p>
//                                 </div>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={porcentaje([props.totalMujeres, props.totalHombres],props.totalMujeres) || 0}
//                                         labelColor='Magenta'
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
//                                     <img src={hombres} alt="" style={{ maxHeight: '2.5rem' }} />
//                                     <p style={{ fontWeight: 'bold' }}>Hombres: {props.totalHombres || 0}</p>
//                                 </div>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={porcentaje([props.totalMujeres, props.totalHombres],props.totalHombres) || 0}
//                                         labelColor='Azul'
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <p style={{ fontWeight: 'bold' }}>Alcance</p>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={props.alcance || 0}
//                                         labelColor='Rojo'
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <p style={{ fontWeight: 'bold' }}>Frecuencia</p>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={props.frecuencia || 0}
//                                         labelColor='Verde'
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <p style={{ fontWeight: 'bold' }}>Impactos de ruta</p>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={props.impactosRuta || 0}
//                                         labelColor='Morado'
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <p style={{ fontWeight: 'bold' }}>Impactos totales</p>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={props.impactosTotales || 0}
//                                         labelColor='Magenta'
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                     <div className="MapaRutas" style={{height: '23rem', width: '38rem', background:'#ffffff00'}}>
//                         <img src={props.imagen || noImagen} alt="" style={{height: '23rem', width: '36rem', objectFit:'cover', borderRadius:'2rem'}}/>
//                     </div>
//                     <div className="DerroteroRuta">
//                         <div>
//                             <TextField
//                                 title='Derrotero: '
//                                 description={props.derrotero}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FichaRutasMap;
interface FichaRutasMapsProps {
	imagen?: any;
	clave?: string;
	ruta?: string;
	totalMujeres?: string | number;
	porcentajeMujeres?: string | number;
	totalHombres?: string | number;
	porcentajeHombres?: string | number;
	alcance?: string | number;
	frecuencia?: string | number;
	impactosRuta?: string | number;
	impactosTotales?: string | number;
	modo?: string;
	inicio?: string;
	destino?: string;
	kilometraje?: string | number;
	tipoMedio?: 'espectacular' | 'muro' | 'urbanos' | 'indoors';
	derrotero?: string;
	tipoExhibicion?: string;
	// TODO: Ponerle los tipos correctos y quitar los any
	agregarCarrito?: any;
	eliminarCarrito?: any;
	rutaObj?: any;
	circuloActivo?: any;
	addCircle?: any;
	validador?: any;
	setValidador?: any;
}
const noImage = require('../../imagenes/noImage.jpg');

export const FichaRutasMap = (props: FichaRutasMapsProps) => {
	// const [validador, setValidador] = useState(false);

	const {
		agregarCarrito,
		alcance,
		clave,
		derrotero,
		destino,
		eliminarCarrito,
		frecuencia,
		imagen,
		impactosRuta,
		impactosTotales,
		inicio,
		kilometraje,
		modo,
		ruta,
		tipoExhibicion,
		tipoMedio,
		totalHombres,
		totalMujeres,
		rutaObj,
		validador,
		setValidador,
		addCircle,
		circuloActivo,
	} = props;

	return (
		<div
			style={{
				minWidth: '50vw',
				maxWidth: '50vw',
				overflowX: 'auto',
				overflowY: 'auto',
			}}
		>
			<div style={{ width: '95%', margin: '0 auto' }}>
				<div style={{ position: 'absolute', top: '6rem', right: '4rem' }}>
					<DynamicButton
						type="buttons"
						size="Grande"
						button="carrito"
						validador={validador}
						color={validador ? 'Verde' : 'Amarillo'}
						onClick={() => {
							if (validador) {
								eliminarCarrito(rutaObj);
							} else {
								addCircle(circuloActivo);
								agregarCarrito({
									...rutaObj,
									circulospauta: circuloActivo.identificador,
									cantidad: 1,
								});
							}
							setValidador(!validador);
						}}
					/>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '40% auto' }}>
					<div>
						<Logo logo="ByImj" style={{ position: 'relative', left: '-2rem' }} />
						<TitlesCards
							modo={modo}
							clave={clave}
							type={ruta}
							color={modoTipoMedio(tipoMedio ? tipoMedio : '', modo)}
						/>
						<div className="columnas2Cards">
							<div>
								<TextField title="Inicio: " />
								<TextField description={inicio} />
							</div>
							<div>
								<TextField title="Destino: " />
								<TextField description={destino} />
							</div>
							<div>
								<TextField
									title="Tipo de Exhibición: "
									style={{ marginTop: '2rem' }}
								/>
								<TextField description={tipoExhibicion} />
							</div>
							<div>
								<TextField title="Kilometraje: " style={{ marginTop: '2rem' }} />
								<TextField description={kilometraje} />
							</div>
						</div>
						<div
							className="columnas2Cards"
							style={{
								marginBlock: '0',
								width: '100%',
								padding: '2rem 0 2rem 0',
								margin: '0 auto',
							}}
						>
							<div>
								<div
									className="Flexbox"
									style={{ marginBottom: '-.5rem', alignItems: 'center' }}
								>
									<p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
										Mujeres: {totalMujeres || 0}
									</p>
								</div>
								<div className="DisplayBlock">
									<TextField
										description={porcentaje(
											[
												totalMujeres ? totalMujeres : 0,
												totalHombres ? totalHombres : 0,
											],
											totalMujeres ? totalMujeres : 0
										)}
										generalLabel={colores('magenta')}
										style={{ margin: '1rem 0' }}
									/>
								</div>
							</div>
							<div>
								<div
									className="Flexbox"
									style={{ marginBottom: '-.5rem', alignItems: 'center' }}
								>
									<p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
										Hombres: {totalHombres || 0}
									</p>
								</div>
								<div className="DisplayBlock">
									<TextField
										description={porcentaje(
											[
												totalMujeres ? totalMujeres : 0,
												totalHombres ? totalHombres : 0,
											],
											totalHombres ? totalHombres : 0
										)}
										generalLabel={colores('azul')}
										style={{ margin: '1rem 0' }}
									/>
								</div>
							</div>
							<div>
								<TextField title="Alcance " style={{ marginTop: '1.5rem' }} />
								<TextField
									description={alcance || 0}
									labelColor={colores('rojo')}
									style={{ margin: '1.5rem 0' }}
								/>
							</div>
							<div>
								<TextField title="Frecuencia " style={{ marginTop: '1.5rem' }} />
								<TextField
									description={frecuencia || 0}
									labelColor={colores('aqua')}
									style={{ margin: '1.5rem 0' }}
								/>
							</div>
							<div>
								<TextField
									title="Impactos de ruta "
									style={{ marginTop: '1.5rem' }}
								/>
								<TextField
									description={impactosRuta || 0}
									labelColor={colores('amarillo')}
									style={{ margin: '1.5rem 0' }}
								/>
							</div>
							<div>
								<TextField
									title="Impactos totales "
									style={{ marginTop: '1.5rem' }}
								/>
								<TextField
									description={impactosTotales || 0}
									labelColor={colores('azul')}
									style={{ margin: '1.5rem 0' }}
								/>
							</div>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							width: '95%',
							margin: '0 auto',
						}}
					>
						<div
							style={{
								height: 'auto',
								maxHeight: '20vh',
								minWidth: '28vw',
								background: '#ffffff00',
							}}
						>
							<img
								src={imagen || noImage}
								alt=""
								style={{
									height: 'auto',
									maxHeight: '28vh',
									width: '28vw',
									objectFit: 'cover',
									borderRadius: '2rem',
								}}
							/>
						</div>
						<div
							style={{
								height: 'auto',
								borderLeft: '.2rem solid #525252',
							}}
						>
							<TextField
								title="Derrotero: "
								description={derrotero}
								style={{ width: '90%', margin: '1rem auto 0 auto', height: '90%' }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FichaRutasMap;
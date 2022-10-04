import React from "react";
import '../../../index.css';
import { colores, getColorMedio, modoTipoMedio, separadorComas } from "../../../utils/utils";
import TextField from "../../Atomos/TextField";
import TitlesCards from "../../Atomos/TitlesCards";
import hombres from '../../Img/Iconos/hombres.svg';
import mujeres from '../../Img/Iconos/mujeres.svg';
import './index.css';

// interface FormaPrevRutasProps {
//     modo?: string; //'Dark' | ''
//     clave?: string;
//     ruta?: string;
//     inicio?: string;
//     ubicacion?: string;
//     destino?: string;
//     kilometraje?: string | number;
//     totalMujeres?: string | number;
//     porcentajeMujeres?: string | number;
//     totalHombres?: string | number;
//     porcentajeHombres?: string | number;
//     alcance?: string | number;
//     frecuencia?: string | number;
//     impactos?: string | number;
//     derrotero?: string;
//     mapa?: any;
//     data?: any;
// }
// const FormaPrevRutas = (props:FormaPrevRutasProps) => {
//     const Mapa = props.mapa
//     const {modo, clave, ruta, inicio, ubicacion, destino, kilometraje, derrotero, totalMujeres, porcentajeMujeres, totalHombres, porcentajeHombres, alcance, frecuencia, impactos} = props;
//     return (
//         <div className="ContenedorRutasPrev">
//             <div className="MapaRutas">
//                 {<Mapa data={props.data} />}
//             </div>
//             <div className="Columnas2PrevRutas AlignTop">
//                 <div className="ContenidoIdentificacion">
//                     <div className={"EncabezadoCard BorderBottom" + getColorMedio('urbanos')}>
//                         <TitlesCards
//                             modo={modo}
//                             clave={clave}
//                             type={ruta}
//                         />
//                     </div>
//                     <div className="ColumnasRutas" style={{ marginTop: '1rem' }}>
//                         <div>
//                             <TextField
//                                 title='Inicio: '
//                                 description={inicio}
//                             />
//                         </div>
//                         <div>
//                             <TextField
//                                 title='Ubicación: '
//                                 description={ubicacion}
//                             />
//                         </div>
//                         <div>
//                             <TextField
//                                 title={destino}
//                             />
//                         </div>
//                         <div>
//                             <TextField
//                                 title='Kilometraje: '
//                                 description={kilometraje}
//                             />
//                         </div>
//                     </div>
//                     <div className="" style={{ marginTop: '2rem', marginBottom: '2rem',}}>
//                         <div className="Metricas">
//                             <div>
//                                 <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
//                                     <img src={mujeres} alt="" style={{ maxHeight: '2.5rem' }} />
//                                     <p>Mujeres: {totalMujeres || 0}</p>
//                                 </div>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={porcentajeMujeres || 0}
//                                         labelColor='Magenta'
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center' }}>
//                                     <img src={hombres} alt="" style={{ maxHeight: '2.5rem' }} />
//                                     <p>Hombres: {totalHombres || 0}</p>
//                                 </div>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={porcentajeHombres || 0}
//                                         labelColor='Azul'
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <p style={{ fontWeight: 'bold' }}>Alcance</p>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={alcance || 0}
//                                         labelColor='Rojo'
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                             <p style={{ fontWeight: 'bold' }}>Frecuencia</p>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={frecuencia || 0}
//                                         labelColor='Verde'
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <p style={{ fontWeight: 'bold' }}>Impactos</p>
//                                 <div className="DisplayBlock">
//                                     <TextField
//                                         description={impactos || 0}
//                                         labelColor='Azul'
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="DerroteroRuta" style={{ height: '90%' }}>
//                     <div>
//                         <TextField
//                             title='Derrotero: '
//                             description={derrotero}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
interface FormaPrevRutasProps {
	modo?: string; //'Dark' | ''
	clave?: string;
	ruta?: string;
	inicio?: string;
	ubicacion?: string;
	destino?: string;
	kilometraje?: string | number;
	totalMujeres?: string | number;
	porcentajeMujeres?: string | number;
	totalHombres?: string | number;
	porcentajeHombres?: string | number;
	alcance?: string | number;
	frecuencia?: string | number;
	impactos?: string | number;
	derrotero?: string;
	mapa?: any;
	data?: any;
}

const FormaPrevRutas = (props: FormaPrevRutasProps) => {
	const Mapa = props.mapa;
	const {
		modo,
		clave,
		ruta,
		inicio,
		ubicacion,
		destino,
		kilometraje,
		derrotero,
		totalMujeres,
		porcentajeMujeres,
		totalHombres,
		porcentajeHombres,
		alcance,
		frecuencia,
		impactos,
	} = props;
	return (
		<div className="ContenedorRutasPrev*">
			<div className="MapaRutas">{<Mapa data={props.data} />}</div>
			<div
				style={{
					width: '95%',
					margin: '2rem auto ',
					display: 'grid',
					gridTemplateColumns: '40% auto',
				}}
			>
				<div>
					<TitlesCards
						modo={modo}
						clave={clave}
						type={ruta}
						color={modoTipoMedio('urbanos', modo)}
					/>
					<div className="columnas2Cards" style={{ marginTop: '1rem' }}>
						<div>
							<TextField title="Inicio: " />
							<TextField description={inicio} style={{ margin: '0 0 1.5rem 0' }} />
						</div>
						<div>
							<TextField title="Destino: " />
							<TextField description={destino} style={{ margin: '0 0 1.5rem 0' }} />
						</div>
						<div>
							<TextField title="Ubicación: " description={ubicacion} />
						</div>
						<div>
							<TextField title="Kilometraje: " description={kilometraje} />
						</div>
					</div>
					<div
						style={{
							marginTop: '.5rem',
							marginBottom: '2rem',
							display: 'flex',
							justifyContent: 'space-evenly',
						}}
					>
						<div>
							<div
								className="Flexbox"
								style={{ marginBottom: '-.5rem', alignItems: 'center' }}
							>
								<span style={{ fontSize: '1.2rem', margin: '2rem 0' }}>
									Totales:{' '}
									<span style={{ fontWeight: 'bold' }}>
										{separadorComas(totalMujeres ? totalMujeres : 0)}
									</span>
								</span>
							</div>
							<div className="DisplayBlock">
								<TextField
									title="Porcentaje: "
									description={porcentajeMujeres ? porcentajeMujeres : 0}
									generalLabel={colores('magenta')}
								/>
							</div>
						</div>
						<div>
							<div
								className="Flexbox"
								style={{ marginBottom: '-.5rem', alignItems: 'center' }}
							>
								<span style={{ fontSize: '1.2rem', margin: '2rem 0' }}>
									Totales:{' '}
									<span style={{ fontWeight: 'bold' }}>
										{separadorComas(totalHombres ? totalHombres : 0)}
									</span>
								</span>
							</div>
							<div className="DisplayBlock">
								<TextField
									title="Porcentaje: "
									description={porcentajeHombres ? porcentajeHombres : 0}
									generalLabel={colores('azul')}
								/>
							</div>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							marginTop: '3rem',
						}}
					>
						<div className="DisplayBlock">
							<TextField
								title="Alcance: "
								description={alcance || 0}
								generalLabel={colores('rojo')}
							/>
						</div>
						<div className="DisplayBlock">
							<TextField
								title="Frecuencia: "
								description={frecuencia || 0}
								generalLabel={colores('aqua')}
							/>
						</div>
						<div className="DisplayBlock">
							<TextField
								title={'Impactos: '}
								description={separadorComas(impactos ? impactos : 0)}
								style={{ display: 'block', minWidth: '100%' }}
								generalLabel={colores('magenta')}
							/>
						</div>
					</div>
				</div>
				<div
					style={{
						height: 'auto',
						maxHeight: '100%',
						width: '95%',
						marginLeft: '5%',
						borderLeft: '.2rem solid #525252',
					}}
				>
					<div>
						<TextField
							title="Derrotero: "
							description={derrotero}
							style={{ width: '95%', margin: '2rem auto' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormaPrevRutas;
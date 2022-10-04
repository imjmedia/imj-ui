import React, { useEffect, useState } from "react";
import '../../../index.css';
import { getColorMedio, getModo, isEmpty, Overflow, porcentaje } from "../../../utils/utils";
import BtnFunction from "../../Atomos/btnFunction";
import Logo from "../../Atomos/Logo";
import TextField from "../../Atomos/TextField";
import TitlesCards from "../../Atomos/TitlesCards";
import hombres from '../../Img/Iconos/hombres.svg';
import mujeres from '../../Img/Iconos/mujeres.svg';
import noImagen from '../../Img/Img/noImagen.jpg';
// import PieGraphics from "../pieGraphics/pieGraphics";
import DynamicButton from "../../Atomos/DynamicButton";
import PropertyBtn from "../../Atomos/PropertyBtn";
import BigData from "../../Moleculas/bigData/bigData";
import InfoInfinia from "../../Moleculas/EtiquetaVisualizaPauta/infoInfinia/infoInfinia";

// interface FichaSitiosProps {
//     modo?: string;//'Dark' | ''
//     tipoMedio?:
//     'espectacular' |
//     'muro' |
//     'indoors' |
//     'urbanos';
//     clave?: string;
//     tipo?: string;
//     nseA?: string | number;
//     nseB?: string | number;
//     nseC?: string | number;
//     nseD?: string | number;
//     nseE?: string | number;
//     edad13?: string | number;
//     edad18?: string | number;
//     edad26?: string | number;
//     edad41?: string | number;
//     edad55?: string | number;
//     direccion?: string;
//     vista?: string;
//     nicho?: string;
//     implementaciones?: boolean;
//     iluminacion?: boolean;
//     female_users?: string | number;
//     male_users?: string | number;
//     latitud?: string | number;
//     longitud?: string | number;
//     impactos?: string | number;
//     alcance?: string | number;
//     frecuencia?: string | number;
//     alto?: string | number;
//     ancho?: string | number;
//     material?: string;
//     acabados?: string;
//     imagen?: string | any;
//     onClickCarrito?: () => void;
// }

// const FichaSitios = (props: FichaSitiosProps) => {

//     const stylesImpactos = () => {
//         return { gridColumn: '1/3', border: '.2rem solid #525252', padding: '1rem', borderRadius: '1rem', width: '80%', margin: '1rem auto', fontSize: '1.2rem' }
//     }
//     const porcentajesInfinia = (color:string) => {
//         return {
//             backgroundColor: color ,
//             padding: '.3rem',
//             display: 'block',
//             borderRadius: '.5rem',
//             minWidth: '100%',
//             margin: '.5rem 0',
//             paddingLeft: '2rem',
//             color: '#fff',
//         }
//     }

//     const { imagen, onClickCarrito, modo, clave, direccion, latitud, longitud, ancho, alto, material, acabados, male_users, female_users, alcance, frecuencia, impactos, nseA, nseB, nseC, nseD, nseE, edad13, edad18, edad26, edad41, edad55, iluminacion, implementaciones } = props;
//     // const imagen = 'props.imagen'
//     return (
//         <div className="ContenedorRutasPrev" style={{ width: '65vw', height: '82.5vh' }}>
//             <div className="Columnas2Prev" style={{ height: '100%' }}>
//                 <div style={{ width: '100%', gridColumn: '1/2', position: 'relative' }}>
//                     <div className="MapaRutas" style={{ minHeight: '44vh', height: '40vh', width: '100%', margin: '0 0 0 0', position: 'relative' }}>
//                         <img src={imagen || noImagen} alt="" style={{ minHeight: '44vh', height: '40vh', width: '100%', objectFit: 'cover', borderRadius: '2rem' }} />
//                     </div>
//                     <div style={{ position: 'absolute', top: '2rem', left: '2rem' }}>
//                         <BtnFunction button='carrito' color='Amarillo' onClick={onClickCarrito} />
//                     </div>
//                     <div className="ContenidoIdentificacion" style={{ paddingLeft: '2rem', gridColumn: '1/2', width: '100%' }}>
//                         <div className="Columnas2Prev" style={{ maxWidth: '95%', margin: '0 auto' }}>
//                             <div className="ContenidoInfoPrev" style={{ width: '100%', gridColumn: '1/2' }}>
//                                 <div className={"EncabezadoCard BorderBottom" + getColorMedio('urbanos')} /* style={{ display: 'flex', alignItems: 'center' }} */>
//                                     <div className="Flexbox" style={{ alignItems: 'center' }}>
//                                         <TitlesCards
//                                             modo={modo}
//                                             clave={clave}
//                                             type={''}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="RowPadding1">
//                                     <TextField
//                                         title='Dirección: '
//                                         description={direccion || 'Indefinida'}
//                                     />
//                                 </div>
//                                 <div className="Columnas2 RowPadding1">
//                                     <TextField
//                                         title='Latitud: '
//                                         description={latitud || 'Indefinida'}
//                                     />
//                                     <TextField
//                                         title='Longitud: '
//                                         description={longitud || 'Indefinida'}
//                                     />
//                                     <TextField
//                                         title='Medidas: '
//                                         description={(ancho || 0) + 'm x ' + (alto || 0) + 'm'}
//                                     />
//                                     <TextField
//                                         title='Material: '
//                                         description={material || 'Indefinido'}
//                                     />
//                                     <TextField
//                                         title='Acabados: '
//                                         description={acabados || 'Indefinidos'}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="Columnas2 ContenedorSombra" style={{ minWidth: '18rem', height: '100%', gridColumn: '2/3', padding: '0 1rem', margin: '0' }}>
//                                 <h4 style={stylesImpactos()}>Big Data</h4>
//                                 <div style={{ paddingTop: '0' }}>
//                                     <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center', justifyContent: 'center' }}>
//                                         <img src={hombres} alt="" style={{ maxHeight: '2.5rem' }} />
//                                         <p style={{ fontWeight: 'bold' }}>Hombres</p>
//                                     </div>
//                                     <div className="DisplayBlock">
//                                         <TextField
//                                             description={male_users || 0}
//                                             labelColor='Azul'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <div className="Flexbox" style={{ marginBottom: '-.5rem', alignItems: 'center', justifyContent: 'center' }}>
//                                         <img src={mujeres} alt="" style={{ maxHeight: '2.5rem' }} />
//                                         <p style={{ fontWeight: 'bold' }}>Mujeres</p>
//                                     </div>
//                                     <div className="DisplayBlock">
//                                         <TextField
//                                             description={female_users || 0}
//                                             labelColor='Magenta'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p style={{ fontWeight: 'bold' }}>Alcance</p>
//                                     <div className="DisplayBlock">
//                                         <TextField
//                                             description={alcance || 0}
//                                             labelColor='Aqua'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p style={{ fontWeight: 'bold' }}>Frecuencia</p>
//                                     <div className="DisplayBlock">
//                                         <TextField
//                                             description={frecuencia || 0}
//                                             labelColor='Rojo'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div style={{ gridColumn: '1/3', marginBottom: '2rem' }}>
//                                     <p style={{ fontWeight: 'bold' }}>Impactos</p>
//                                     <div className="DisplayBlock">
//                                         <TextField
//                                             description={impactos || 0}
//                                             labelColor='Amarillo'
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//                 {/*Columna3*/}
//                 <div className='ContenedorSombra' style={{ display: 'flex', flexDirection: 'column', gridColumn: '3/4', width: '95%', height: '95%', padding: '0 1rem' }}>
//                     <div style={{ marginBottom: '2rem', marginTop: '2rem', }}>
//                         <Logo
//                             logo='ByImj'
//                             style={{ height: '6rem', marginLeft: '1rem' }}
//                         />
//                     </div>
//                     <div >
//                         <h4 style={stylesImpactos()}>Impacto por nivel Socieconómico</h4>
//                         <div>
//                             <div style={{ width: '83%', marginLeft: '1rem' }}>
//                                 <p className='StylesGraphics C-Azul' style={porcentajesInfinia('#126EFA')}>
//                                     NSE A:
//                                     <span className="NumerosGraphics">{porcentaje([nseA, nseB,nseC,nseD,nseE], nseA) || 0}</span></p>
//                                 <p className='StylesGraphics C-Rojo' style={porcentajesInfinia('#FC3D38')}>
//                                     NSE B:
//                                     <span className="NumerosGraphics" >{porcentaje([nseA, nseB,nseC,nseD,nseE], nseB) || 0}</span>
//                                 </p>
//                                 <p className='StylesGraphics C-Aqua' style={porcentajesInfinia('#1CB5B2')}>
//                                     NSE C:
//                                     <span className="NumerosGraphics">{porcentaje([nseA, nseB,nseC,nseD,nseE], nseC) || 0}</span>
//                                 </p>
//                                 <p className='StylesGraphics C-Magenta' style={porcentajesInfinia('#D11787')}>
//                                     NSE D:
//                                     <span className="NumerosGraphics">{porcentaje([nseA, nseB,nseC,nseD,nseE], nseD) || 0}</span>
//                                 </p>
//                                 <p className='StylesGraphics C-Amarillo' style={porcentajesInfinia('#FCB23B')}>
//                                     NSE E:
//                                     <span className="NumerosGraphics">{porcentaje([nseA, nseB,nseC,nseD,nseE], nseE) || 0}</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <h4 style={stylesImpactos()}>Impacto por rango de edad</h4>
//                         <div>
//                             <div style={{ width: '83%', marginLeft: '1rem' }}>
//                                 <p className='StylesGraphics C-Azul' style={porcentajesInfinia('#126EFA')}>
//                                     13 - 17:
//                                     <span className="NumerosGraphics">{porcentaje([edad13,edad18,edad26,edad41, edad55],edad13) || 0}</span>
//                                 </p>
//                                 <p className='StylesGraphics C-Rojo' style={porcentajesInfinia('#FC3D38')}>
//                                     18 - 25:
//                                     <span className="NumerosGraphics">{porcentaje([edad13,edad18,edad26,edad41, edad55],edad18) || 0}</span>
//                                 </p>
//                                 <p className='StylesGraphics C-Aqua' style={porcentajesInfinia('#1CB5B2')}>
//                                     26 - 41:
//                                     <span className="NumerosGraphics">{porcentaje([edad13,edad18,edad26,edad41, edad55],edad26) || 0}</span>
//                                 </p>
//                                 <p className='StylesGraphics C-Magenta' style={porcentajesInfinia('#D11787')}>
//                                     41 - 55:<span className="NumerosGraphics">{porcentaje([edad13,edad18,edad26,edad41, edad55],edad41) || 0}</span>
//                                 </p>
//                                 <p className='StylesGraphics C-Amarillo' style={porcentajesInfinia('#FCB23B')}>
//                                     55 o +:
//                                     <span className="NumerosGraphics">{porcentaje([edad13,edad18,edad26,edad41, edad55],edad55) || 0}</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{ justifyContent: 'left', margin: '0 1rem' }}>
//                         <PropertyBtn
//                             property={iluminacion === true ? 'Con iluminación' : 'Sin iluminación'}
//                             color='Amarillo'
//                             state={iluminacion}
//                         />
//                     </div>
//                     <div style={{ justifyContent: 'left', margin: '0 1rem' }}>
//                         <PropertyBtn
//                             property={implementaciones === true ? 'Impl. especiales' : 'Sin impl. especiales'}
//                             color='Verde'
//                             state={implementaciones}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
const FichaSitios = (props: any) => {
	const stylesImpactos = () => {
		return {
			gridColumn: '1/3',
			border: '.2rem solid #525252',
			padding: '1rem',
			borderRadius: '1rem',
			width: '80%',
			margin: '1rem auto',
			fontSize: '1.2rem',
		};
	};
	const porcentajesInfinia = (color: string) => {
		return {
			backgroundColor: color,
			padding: '.3rem',
			display: 'block',
			borderRadius: '.5rem',
			minWidth: '100%',
			margin: '.5rem 0',
			paddingLeft: '2rem',
			color: '#fff',
		};
	};
	const {
		sitio,
		imagen,
		agregarCarrito,
		eliminarCarrito,
		circuloActivo,
		addCircle,
		modo,
		clave,
		direccion,
		latitud,
		longitud,
		ancho,
		alto,
		material,
		acabados,
		male_users,
		female_users,
		alcance,
		frecuencia,
		impactos,
		nseA,
		nseB,
		nseC,
		nseD,
		nseE,
		edad13,
		edad18,
		edad26,
		edad41,
		edad55,
		iluminacion,
		implementaciones,
		type,
		tipoMedio,
		medidas,
        sitios
	} = props;
	// const { sitios } = props;
	const [validador, setValidador] = useState(false);

	useEffect(() => {
		sitios.map((e:any) => {
			if (e?.id === sitio.id) {
				setValidador(true);
			}
		});
	}, [props]);

	function validacionDatos(datos: any, caso: string, label?: string) {
		let arreglo:any = [];
		switch (caso) {
			case 'nse':
				arreglo = [nseA, nseB, nseC, nseD, nseE];
				break;
			case 'edad':
				arreglo = [edad13, edad18, edad26, edad41, edad55];
				break;
			case 'genero':
				arreglo = [male_users ? male_users : 0, female_users ? female_users : 0];
				break;
		}
		return label
			? isEmpty(datos)
				? label + '0%'
				: label + porcentaje(arreglo, datos)
			: isEmpty(datos)
			? '0%'
			: porcentaje(arreglo, datos);
	}

	return (
		<div className="ContenedorRutasPrev*" style={{ minWidth: '65vw', height: '82.5vh' }}>
			<div
				className="contenedoresInfoCards*"
				style={{
					height: '100%',
					display: 'grid',
					gridTemplateColumns: '70% auto',
					width: '95%',
					margin: '0 auto',
				}}
			>
				<div style={{ width: '100%', position: 'relative' }}>
					<div
						className="MapaRutas"
						style={{
							minHeight: '44vh',
							height: '40vh',
							width: '100%',
							margin: '0 0 0 0',
							position: 'relative',
						}}
					>
						<img
							src={imagen ? imagen : ''}
							alt=""
							style={{
								minHeight: '44vh',
								height: '40vh',
								width: '100%',
								objectFit: 'cover',
								borderRadius: '2rem',
							}}
						/>
					</div>
					<div style={{ position: 'absolute', top: '2rem', left: '2rem' }}>
						<DynamicButton
							type="buttons"
							size="Grande"
							button="carrito"
							validador={validador}
							color={validador ? 'Verde' : 'Amarillo'}
							onClick={() => {
								if (validador) {
									eliminarCarrito(sitio);
								} else {
									addCircle(circuloActivo);
									agregarCarrito({
										...sitio,
										circulospauta: circuloActivo.identificador,
									});
								}
								setValidador(!validador);
							}}
						/>
					</div>
					<div
						className="ContenidoIdentificacion"
						style={{ paddingLeft: '2rem', gridColumn: '1/2', width: '100%' }}
					>
						<div
							className="columnas2Cards"
							style={{ maxWidth: '100%', margin: '0 auto' }}
						>
							<div
								className="ContenidoInfoPrev"
								style={{ width: '100%', gridColumn: '1/2' }}
							>
								<TitlesCards
									modo={modo}
									clave={clave}
									type={type}
									color={tipoMedio}
								/>
								<TextField
									title="Medidas: "
									description={medidas}
									generalLabel={tipoMedio}
									style={{ margin: '1.5rem 0' }}
								/>

								<div className="RowPadding1">
									<TextField
										title="Dirección: "
										description={direccion}
										style={Overflow(3)}
									/>
								</div>
							</div>
							<div>
								<div className="columnas2Cards">
									<div>
										<TextField title="Latitud: " />
										<TextField
											description={latitud}
											style={{ marginBottom: '1.5rem' }}
										/>
									</div>
									<div>
										<TextField title="Longitud: " />
										<TextField
											description={longitud}
											style={{ marginBottom: '1.5rem' }}
										/>
									</div>
									<div>
										<TextField title="Material: " />
										<TextField
											description={
												material ? material : 'Material indefinido'
											}
											style={{ marginBottom: '1.5rem' }}
										/>
									</div>
									<div>
										<TextField title="Acabados: " />
										<TextField
											description={
												acabados ? acabados : 'Acabados indefinidos'
											}
										/>
									</div>
								</div>
								<div>
									<TextField
										title="Iluminación: "
										description={iluminacion ? 'Si' : 'No'}
									/>
								</div>
								<div>
									<TextField
										title="Impl.Especiales: "
										description={implementaciones ? 'Si' : 'No'}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*Columna3*/}
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<InfoInfinia
						modo={modo}
						width="100%"
						income_a_users={validacionDatos(nseA, 'nse')}
						income_b_users={validacionDatos(nseB, 'nse')}
						income_c_users={validacionDatos(nseC, 'nse')}
						income_d_users={validacionDatos(nseD, 'nse')}
						income_e_users={validacionDatos(nseE, 'nse')}
						a13_17_users={validacionDatos(edad13, 'nse')}
						a18_25_users={validacionDatos(edad18, 'nse')}
						a26_40_users={validacionDatos(edad26, 'nse')}
						a41_55_users={validacionDatos(edad41, 'nse')}
						a55_users={validacionDatos(edad55, 'nse')}
					/>
					<div style={{ marginTop: '4rem', width: '100%' }}>
						<BigData
							female_users={female_users}
							male_users={male_users}
							reach={alcance}
							frequency={frecuencia}
							total_users={female_users + male_users}
							total_hits={impactos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FichaSitios;
import React from "react";
import { colores, porcentaje, separadorComas } from "../../../utils/utils";
import TextField from "../../Atomos/TextField";

interface BigDataProps{
  female_users?:any ;
  male_users?:any ;
  reach?:any ;
  frequency?:any ;
  total_users?:any ;
  total_hits?:any;
}
const BigData = (props:BigDataProps) => {
	const { female_users, male_users, reach, frequency, total_users, total_hits } = props;
	return (
		<div
			className="columnas2Cards"
			style={{
				width: '100%',
				justifyContent: 'center',
				margin: '0 auto',
				background: 'e6e6e6',
				height: '100%',
				minHeight: '250px',
				boxShadow: '-.5rem .5rem 3rem #00000015',
				borderRadius: '2rem',
				padding: '1rem 0',
			}}
		>
			<div>
				<p style={{ fontSize: '1.3rem', marginBlock: '0' }}>
					{female_users
						? 'Total: ' + separadorComas(female_users ? female_users : 0)
						: 'Total: 0'}
				</p>
				<TextField
					title="Mujeres | "
					description={porcentaje(
						[male_users ? male_users : 0, female_users ? female_users : 0],
						female_users ? female_users : 0
					)}
					generalLabel={colores('magenta')}
					style={{ margin: '1rem 0 0 0' }}
				/>
			</div>

			<div>
				<p style={{ fontSize: '1.3rem', marginBlock: '0' }}>
					{male_users
						? 'Total: ' + separadorComas(male_users ? male_users : 0)
						: 'Total: 0'}
				</p>
				<TextField
					title="Hombres | "
					description={porcentaje(
						[male_users ? male_users : 0, female_users ? female_users : 0],
						male_users ? male_users : 0
					)}
					generalLabel={colores('azul')}
					style={{ margin: '1rem 0 0 0' }}
				/>
			</div>

			<div style={{ marginTop: '0rem' }}>
				<TextField
					title="Alcance | "
					description={reach ? reach : 0}
					generalLabel={colores('aqua')}
					style={{ margin: '1rem 0 0 0' }}
				/>
			</div>
			<div style={{ marginTop: '0rem' }}>
				<TextField
					title="Frecuencia | "
					description={frequency ? frequency : 0}
					generalLabel={colores('amarillo')}
					style={{ margin: '1rem 0 0 0' }}
				/>
			</div>

			<div>
				<TextField title="Usuarios" />
				<TextField
					description={separadorComas(total_users ? total_users : 0)}
					generalLabel={colores('azul')}
					style={{ margin: '1rem 0 0 0' }}
				/>
			</div>
			<div>
				<TextField title="Impactos " />
				<TextField
					description={separadorComas(total_hits ? total_hits : 0)}
					generalLabel={colores('rojo')}
					style={{ margin: '1rem 0 0 0' }}
				/>
			</div>
		</div>
	);
};
export default BigData;
import React from "react";
import { colores } from "../../../../utils/utils";
import Logo from "../../../Atomos/Logo";
import TextField from "../../../Atomos/TextField";

interface InfoInfiniaProps{
  width?: any;
  modo?: any;
  income_a_users?: any;
  income_b_users?: any;
  income_c_users?: any;
  income_d_users?: any;
  income_e_users?: any;
  a13_17_users?: any;
  a18_25_users?: any;
  a26_40_users?: any;
  a41_55_users?: any;
  a55_users?: any; 
}
const InfoInfinia = (props:InfoInfiniaProps) => {
	const {
		width,
		modo,
		income_a_users,
		income_b_users,
		income_c_users,
		income_d_users,
		income_e_users,
		a13_17_users,
		a18_25_users,
		a26_40_users,
		a41_55_users,
		a55_users,
	} = props;
	return (
		<div style={{ width: width ? width : '30vw', marginLeft: '2rem' }}>
			<Logo
				logo="ByImj"
				modo={modo}
				style={{
					margin: '2rem 0 0 0',
					height: '7rem',
					position: 'relative',
					left: '50%',
					transform: 'translateX(-50%)',
				}}
			/>

			<div
				style={{
					maxWidth: '25vw',
					position: 'relative',
				}}
			>
				<h4 style={{ marginBlock: '0', marginTop: '1rem', textAlign: 'center' }}>
					Afluencia por Nivel Socieconómico y Rango de Edad
				</h4>
				<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<TextField
							title="NSE A | "
							description={income_a_users ? income_a_users : 0}
							generalLabel={colores('azul')}
							style={{ marginTop: '2.5rem ' }}
						/>
						<TextField
							title="NSE B | "
							description={income_b_users ? income_b_users : 0}
							generalLabel={colores('rojo')}
							style={{ marginTop: '2.5rem ' }}
						/>
						<TextField
							title="NSE C | "
							description={income_c_users ? income_c_users : 0}
							generalLabel={colores('aqua')}
							style={{ marginTop: '2.5rem ' }}
						/>
						<TextField
							title="NSE D | "
							description={income_d_users ? income_d_users : 0}
							generalLabel={colores('magenta')}
							style={{ marginTop: '2.5rem ' }}
						/>
						<TextField
							title="NSE E | "
							description={income_e_users ? income_e_users : 0}
							generalLabel={colores('amarillo')}
							style={{ marginTop: '2.5rem ' }}
						/>
					</div>

					<div
						style={{
							marginTop: '2.5rem',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<TextField
								title="13-17 | "
								description={a13_17_users ? a13_17_users : 0}
								generalLabel={colores('azul')}
							/>
							<TextField
								title="18-25 | "
								description={a18_25_users ? a18_25_users : 0}
								generalLabel={colores('rojo')}
								style={{ marginTop: '2.5rem ' }}
							/>
							<TextField
								title="26-40 | "
								description={a26_40_users ? a26_40_users : 0}
								generalLabel={colores('aqua')}
								style={{ marginTop: '2.5rem ' }}
							/>
							<TextField
								title="41-55 | "
								description={a41_55_users ? a41_55_users : 0}
								generalLabel={colores('magenta')}
								style={{ marginTop: '2.5rem ' }}
							/>
							<TextField
								title="55 o + | "
								description={a55_users ? a55_users : 0}
								generalLabel={colores('amarillo')}
								style={{ marginTop: '2.5rem ' }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default InfoInfinia;
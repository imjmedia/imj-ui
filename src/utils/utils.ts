/*ASIGNADO DE COLOR*/
export const getModo = (modo:any) => {
  switch (modo) {
      case 'Dark': return('DarkMode')
      default: return ''
  }
}
/* ASIGNADO DE COLOR */
export const getColorMedio = (tipoMedio:any) => {
  switch (tipoMedio) {
      case 'espectacular': return('Rojo')            
      case 'urbanos': return('Magenta')
      case 'muro': return('Azul')            
      case 'indoors': return('Amarillo')
      default: return('Gris')
  }
}

/* Obtener porcentaje */
export const porcentaje = (numeros:any, porcentaje:any) => {
	const array = numeros;
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	let porcentajes = (porcentaje * 100) / sum;
	sum === 0 ? (porcentajes = 0) : (porcentajes = porcentajes);
	return porcentajes.toFixed(0) + '%';
};

/*Coloca el color dependiendo el modo de visualización, Dark ó default*/
export function modoTipoMedio(tipo:any, modo:any){
  switch (tipo) {
    case 'sitios':
      return modo === 'Dark' ? '#C9322C' : '#FC3D38'
    case 'urbanos':
      return modo === 'Dark' ? '#D959A6' : '#D11787'
    case 'indoors':
      return modo === 'Dark' ? '#C98E2E' : '#FCB23B'
    default: 
      return '#525252'
  }
}

export function colores(color:string) {
	switch (color) {
		case 'azul':
			return '#126efa';
		case 'amarillo':
			return '#fcb23b';
		case 'aqua':
			return '#1cb5b2';
		case 'magenta':
			return '#d11787';
		case 'rojo':
			return '#fc3d38';
		default:
			break;
	}
}
export function separadorComas(num:any) {
	var str = num.toString().split('.');
	str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return str.join('.');
}

export function isEmpty(value:any) {
	return value === undefined || value === null || value === '';
}

export function Overflow(lines:number) {
	return {
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		display: '-webkit-box',
		WebkitLineClamp: lines,
		WebkitBoxOrient: 'vertical',
	};
}
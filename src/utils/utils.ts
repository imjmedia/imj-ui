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
export const porcentaje = (numeros: any, porcentaje: any) => {
  const array = numeros;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
      sum += array[i]
  }
  const porcentajes = (porcentaje * 100) / sum
  return porcentajes.toFixed(2) + '%'
}

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
export const getColorMedio = (tipoMedio: any) => {
  switch (tipoMedio) {
    case "espectacular":
      return "Rojo";
    case "urbanos":
      return "Magenta";
    case "muro":
      return "Azul";
    case "indoors":
      return "Amarillo";
    default:
      return "Gris";
  }
};

export const getModo = (modo: any) => {
  switch (modo) {
    case "Dark":
      return "DarkMode";
    default:
      return "";
  }
};

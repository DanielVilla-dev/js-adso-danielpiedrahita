// Reto: Generador de correos institucionales

const DOMINIO = "@adso.ejemplo.co";
const correos = [];  // solo los correos
const registros = []; // nombre + correo (para console.table)

// Quita tildes y ñ usando dos textos "paralelos"
function quitarTildes(texto) {
  const conTilde = "áéíóúüñ";
  const sinTilde = "aeiouun";
  let resultado = "";
  for (const letra of texto) {
    const pos = conTilde.indexOf(letra);
    if (pos !== -1) {
      resultado += sinTilde[pos];
    } else {
      resultado += letra;
    }
  }
  return resultado;
}

// Nivel extra 2: "ana maria GOMEZ" -> "Ana Maria Gomez"
function formatoTitulo(texto) {
  const palabras = texto.toLowerCase().split(" ");
  let resultado = [];
  for (const p of palabras) {
    resultado.push(p[0].toUpperCase() + p.slice(1));
  }
  return resultado.join(" ");
}

// 1. Pedir nombres hasta que el prompt quede vacío
let nombre = prompt("Nombre completo (deja vacío para terminar):");

while (nombre !== null && nombre.trim() !== "") {
  // Limpiar: minúsculas, sin tildes, y quitar espacios de más
  const limpio = quitarTildes(nombre.trim().toLowerCase());
  const partes = limpio.split(" ").filter(p => p !== "");

  // REGLA DEL PRIMER APELLIDO:
  // - 1 palabra: se usa esa misma palabra
  // - 2 palabras (Nombre Apellido): el apellido es la última
  // - 3 o más (Nombre(s) Apellido1 Apellido2): el apellido es la penúltima
  let apellido;
  if (partes.length === 1) {
    apellido = partes[0];
  } else if (partes.length === 2) {
    apellido = partes[partes.length - 1];
  } else {
    apellido = partes[partes.length - 2];
  }

  // 2. Usuario = inicial del primer nombre + primer apellido
  const usuario = partes[0][0] + apellido;

  // Nivel extra 1: correos repetidos -> agomez, agomez2, agomez3...
  let correo = usuario + DOMINIO;
  let numero = 2;
  while (correos.includes(correo)) {
    correo = usuario + numero + DOMINIO;
    numero++;
  }

  // 3. Guardar en el arreglo
  correos.push(correo);
  registros.push({ nombre: formatoTitulo(partes.join(" ")), correo: correo });

  nombre = prompt("Nombre completo (deja vacío para terminar):");
}

// 4. Mostrar lista numerada y total
console.log("=== Correos generados ===");
for (let i = 0; i < correos.length; i++) {
  console.log(`${i + 1}. ${correos[i]}`);
}
console.log(`Total de correos generados: ${correos.length}`);

// Nivel extra 2: tabla con nombre en formato título
console.table(registros);
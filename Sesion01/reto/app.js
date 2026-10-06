const NOMBRE = "Daniel Piedrahita"                                          // Creo una variable para mi nombre
const NUMERO_FICHA = 3534466                                                // Creo una variable para el numero de mi ficha
const PROGRAMA = "ADSO"                                                     // Creo una variable para el nombre de mi programa
let ciudad = "Medellin"                                                     // Creo una variable para el nombre de la ciudad donde resido 
let frase = "La duda es la clave del conocimiento"                          // Creo una variable para la frase que me representa


console.log("==============================")                               // En esta tarjeta muestro por consola mi presentacion personal 
console.log(`👋 Hola, soy ${NOMBRE.toUpperCase()}`)                        // Uso el metodo .toUpperCase() para mostrar mi nombre en mayusculas
console.log(`📚 ${PROGRAMA}: Ficha ${NUMERO_FICHA}`)                       // Muestro el programa al que pertenezco y el numero de ficha                    
console.log(`📍 Vivo en ${ciudad}`)                                        // Muestro la ciudad en la que estoy residiendo
console.log(`💭 "${frase}"`)                                               // Muestro la frase que mas me representa
console.log("==============================")                               // Cierre de la tarjeta de presentacion
ciudad = "Bogota"                                                           // Reasigno la variable ciudad con la ciudad a la que me mude
console.log(`Ahora vivo en ${ciudad}`)                                      // Aqui muestro la ciudad a la que me mude

console.log(`%c${PROGRAMA}: ${NUMERO_FICHA}`, "color: blue; font-size: 15px")      // Aqui muestro mi programa y ficha en consola, adicionando que le doy color
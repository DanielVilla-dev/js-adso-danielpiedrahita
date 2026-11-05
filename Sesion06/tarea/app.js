// * Función contar palabras aunque haya espacios

function contarFrase(frase){
    
    let cantidadPalabras = frase.trim().split(/\s+/).length
    
    return `La cantidad de palabras que tiene la frase son: ${cantidadPalabras}`
    
}

// Se pide la frase
frase = prompt("Ingresa una frase")

// Se muestra la frase y cuántas palabras tiene por consola
console.log(frase)
console.log(contarFrase(frase))


// * Formato de título, primera letra de cada palabra en mayúscula

function formatoTitulo(frase) {
    
    // Validacion si oprime en cancelar o deja vacio el texto

    if (!frase || frase.trim === ""){

        return "No ingresaste ninguna frase"

    }

    let formato;
    let fraseNuevoFormato = []

    // Le da formato a la frase por palabras y quitando espacios.

    frase = frase.trim().split(/\s+/)

    // Le da formato a cada palabra, Inicial mayuscula y el resto minuscula.
        
    for (let palabra of frase){
            
        formato = palabra[0].toUpperCase() + palabra.slice(1).toLowerCase()

        fraseNuevoFormato.push(formato)
            
    }

    return fraseNuevoFormato.join(" ")
}

// Pide la frase para dar formato

frase = prompt("Ingresa una frase")

// Muestra la frase con formato por consola

console.log(formatoTitulo(frase))

// * Lista de pendientes

// Menú

let menu;
let tareas = []
let tareaAgregada;
let tareaEliminada;
let posicionTareaEliminada;

do {

    menu = prompt("1- Agregar una tarea\n2- Ver lista de tareas\n3- Eliminar una tarea\n4- Deja vacio para salir")

    if (menu){

        switch (Number(menu)){
        
            case 1:

                tareaAgregada = prompt("Ingresa el nombre de la tarea")

                if (tareas.includes(tareaAgregada)){

                    alert("Esa tarea ya existe")

                }else{

                    tareas.push(tareaAgregada)

                }

                break

            case 2:

                console.table(tareas)

                break

            case 3:

                tareaEliminada = prompt("Ingresa el nombre de la tarea que desea eliminar")

                posicionTareaEliminada = tareas.indexOf(tareaEliminada)
                
                if (posicionTareaEliminada === -1){

                    alert("Esa tarea no existe")

                }else{

                    tareas.splice(posicionTareaEliminada, 1)

                }

                break

            default:
                
                alert("Opción no válida, intenta nuevamente")
        }

    }   
} while (menu)
// * Proceso para crear una funcion
// funtion nombrefuncion(parametros){
// }


// function saludar(nombre){
//     console.log(`Hola, ${nombre}`)
// }

// saludar("Daniel")

// * Para que sea considerada una funcion debe RETORNAR ALGUNA COSA, de lo contrario es un procedimiento

// function areaRectangulo(b,h){
//     return b * h
// }

// let areaRec = areaRectangulo(5, 6)
// console.log(`El area de rectangulo es: ${areaRec}`)
// console.log(`El area de rectangulo es: ${areaRectangulo(7, 3)}`)


// * Funcion es par

// function esPar(numero){
//     return numero % 2 === 0
// }

// let numero1 = Number(prompt("Ingresa un número"))

// if (esPar(numero1)){
//     console.log(`El número ${numero1} es par`)
// }
// else{
//     console.log(`El número ${numero1} es impar`)
// }


// * FUNCION DE FLECHA


// MEJORA tu clasificador

function clasificadorNota(nota){
    if (nota < 3){
        return `Nota ${nota} : No aprobado`
    }
    else if(nota < 4){
        return `Nota ${nota} : Aprobado`
    }
    else if(nota < 4.6){
        return `Nota ${nota} : Sobresaliente`
    }
    else {
        return `Nota ${nota} : Excelente`
    }
}

console.log(clasificadorNota(3.5))
console.log(clasificadorNota(4))
console.log(clasificadorNota(5))
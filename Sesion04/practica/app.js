// Practica con ciclo FOR

// let numero = Number(prompt("digite un numero para crear su tabla"))

// for (let i = 0; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }

// let numero1 = Number(prompt("digite un numero para crear su tabla"))

// for (let i = 20; i >= 0; i--){
//     console.log(`${numero1} x ${i} = ${numero1 * i}`)
// }

// Practica While + For

// let numero = Number(prompt("Digite un numero para su tabla"))

// let i = 0

// while (i <= 10){
//     console.log(`${numero} x ${i} = ${numero * i}`)
//     i++;
// }


// Ejercicio de alcancia

// let ahorro = Number(prompt("cuanto vas ahorrar?"))
// let suma = 0;
// let semanas = 0

// while (suma < 100000){
//     suma += ahorro
//     semanas++
//     console.log(`Llevas ahorrado ${suma} en ${semanas} semanas`)
// }


// Ejercicio suma y cuenta

// let numero = Number(prompt("Ingresa un número"))
// let suma = 0
// let contpares = 0
// for (let i = 1; i <= numero; i++){
//     suma += i
//     if (i % 2 === 0)
//         contpares += 1
    
// }

// alert(contpares)
// alert(`la suma de los numeros entre 1 y ${numero} es ${suma}`)



// Do while, el portero insistente

// let notas

// do{
//     notas = prompt("Digite una nota entre 0 y 5")
// }while (Number.isNaN(notas) || notas < 0 || notas < 5){
//     console.log(`Nota valida -> ${notas}`)
// }

let respuesta

do{
    respuesta = prompt("Esta claro el tema?").toLocaleLowerCase()
}while (respuesta != "si")

console.log("tema comprendido")



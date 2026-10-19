// const nombre = "Ana";
// let edad = 17;
// let estatura = 1.68;
// let esAprendiz = true
// let apodo;

// console.log(typeof nombre, typeof edad, typeof estatura, typeof esAprendiz, typeof apodo)

// //

// console.log(7 / 2); // 3.5 (FLOAT)
// console.log(7 % 2); // 1 (INT)
// console.log(2 ** 3) // 8 (INT)
// console.log(10 + 3 * 2) //16 (INT)
// console.log((10 + 3) * 2) //26 (INT)
// console.log(0.1 + 0.2); // 0.3 (FLOAT)

// //

// console.log(typeof("5" + "5")) //55
// console.log(typeof("5" + 5 + 5)) //10
// console.log(typeof(5 + 5)) //55
// console.log(typeof(5 + 5 + "5")) //55

//

// let nombre1 = prompt("Digite su nombre")

// let entrada = Number(prompt("Digite su edad"))

// let edad1 = 0

// let suma = 0

//     if (Number.isNaN(entrada)) {

//         console.log("La edad debe ser en número")

//     } else {

//         edad1 = entrada

//         suma = edad1 + 15
        
//         console.log("su edad incrementada es: " + suma)
//     }
    

// entrada = Number(prompt("Digite su nota de JavaScript"))

//     let nota = 0

//     if (Number.isNaN(entrada)) {

//         console.log("La nota debe ser en número")

//     }else {

//         nota = entrada
        
//         console.log(`su nota definitiva es: ${nota}`)
//     }



// console.log("su nombre es: " + nombre1)





// Ingreso de notas

let nota1 = Number(prompt("Ingrese la nota 1"))

let nota2 = Number(prompt("Ingrese la nota 2"))

let nota3 = Number(prompt("Ingrese la nota 3"))

let promedio = (nota1 + nota2 + nota3) / 3

console.log(`Tu nota definitiva es: ${promedio.toFixed(1)}`)
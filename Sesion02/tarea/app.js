// Convertidor de segundos

let cantidadSegundos = Number(prompt("Ingrese una cantidad de segundos"))

let horas = 0
let minutos = 0
let segundos = 0


if (Number.isNaN(cantidadSegundos)) {

    console.log("La cantidad de segundos deben ser números")

}else {
        
    horas = Math.floor(cantidadSegundos / 3600);

    minutos = Math.floor((cantidadSegundos % 3600) / 60);

    segundos = cantidadSegundos % 60;

    console.log(`${cantidadSegundos} --> ${horas}h ${minutos}min ${segundos}s`)

}

// Convertidor de °C a °F

let temperatura = Number(prompt("Ingrese una temperatura en °C"))

let temperaturaF = 0

if (Number.isNaN(temperatura)){

    console.log("la temperatura debe ser en números")
}else {

    temperaturaF = temperatura * 9 / 5 + 32
    console.log(`La conversion a °F es: ${temperaturaF.toFixed(1)}`)
}

// Promedio de notas

let nota1 = Number(prompt("Ingrese la primera nota"))
let nota2 = Number(prompt("Ingrese la segunda nota"))
let nota3 = Number(prompt("Ingrese la tercera nota"))

let promedio = (nota1 + nota2 + nota3) / 3

console.log(`el promedio es: ${promedio.toFixed(1)}`)
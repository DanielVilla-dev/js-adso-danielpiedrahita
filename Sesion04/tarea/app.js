// Tabla de multiplicar a pedido del usuario

let numeroTabla = Number(prompt("Ingresa un número para mostrar su tabla de multiplicar"))

if (Number.isNaN(numeroTabla)){
    alert("Solo se pueden ingresar números")
}else{
    for (let i = 1; i <= 10; i++){
        console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`)
    }
}

// Estadística del grupo

let cantidadNotas;
let notaMayor;
let notaMenor;
let promedio;

// Ciclo que pide una por una de las nota

do {
    cantidadNotas = Number(prompt("¿Cuantas notas vas a ingresar?"))

    if (Number.isNaN(cantidadNotas) || Number.isInteger(cantidadNotas) != true || cantidadNotas < 1){
        alert("Algo salio mal, intenta nuevamente")
    }

} while (Number.isNaN(cantidadNotas) || Number.isInteger(cantidadNotas) != true|| cantidadNotas < 1)


let listaNotas = []

let nota;

for (let i = 0; i < cantidadNotas; i++){
    
    do {
        nota = Number(prompt(`Digite la nota ${i+1}`))

        if (Number.isNaN(nota) || nota < 0 || nota > 5){
            alert("Algo fallo, intenta nuevamente")
        }
        
    } while (Number.isNaN(nota) || (nota < 0) || (nota > 5));
        
    listaNotas.push(nota)
}

//Ciclo que suma cada nota de la lista

let sumaNotas = 0

for (let i = 0; i < listaNotas.length; i++){

    sumaNotas += listaNotas[i]
}

// Evalúa nota menor, nota mayor y promedio
 
notaMayor = Math.max(...listaNotas)
    
notaMenor = Math.min(...listaNotas)
    
promedio = sumaNotas / listaNotas.length;

console.log(`El promedio es: ${promedio.toFixed(1)}`)
console.log(`La nota mayor es ${notaMayor}`)
console.log(`La nota menor es ${notaMenor}`)
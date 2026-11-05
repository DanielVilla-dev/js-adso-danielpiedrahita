// // * ARREGLOS Y METODOS

// // Laboratorio del tren

// let tren = ["ana", "sofia", "ricardo", "rosalva"]

// // Procedimiento para saber la cantidad de elementos

// // Usando metodo length 
// // console.log(tren.length)

// // tren[3] usando el index de uno de la lista muestra uno especifico
// // console.log(tren[3])

// // Muestra todos los elementos del arreglo
// // console.log(tren)

// // Muestra la última posición del arreglo
// // console.log(tren[tren.length - 1])

// // Con push se agrega al final del arreglo el elemento que le indiques
// tren.push("Daniel")

// // Con unshift se agrega al principio del arreglo el elemento que le indiques
// tren.unshift("pedro")


// // Con pop se elimina el último elemento del arreglo
// // tren.pop()


// // Esta manera de hacer el for, iteramos de derecha a izquierda (Inversamente)

// for (let i = tren.length-1; i >= 3; i--){
//     console.log(i)
//     console.log(tren[i])
// }
// // Este es el for común, iteramos de izquierda a derecha sobre los elementos

// for (let i = 0; i < tren.length; i ++){
//     console.log(`${i+1}. ${tren[i]}`)
// }

// for (const pasajero of tren){
//     console.log(pasajero)
// }

// let nombre = "Estefania"

// //  for ( in ) itera sobre cada posicion y muestra su index

// for (let x in nombre){
//     console.log(x)
// }

// // for ( of ) itera sobre cada posicion y muestra su valor

// for (let x of nombre){
//     console.log(x)
// }

// // Con .join se le da un formato horizontal UNICAMENTE A LOS ARREGLOS

// console.log(tren.join(" "))

// console.table(tren)




// * Practica 

let compras = []
let productos;

do {
    productos = prompt("Ingresa un producto para agregar")

    compras.push(productos)

} while (productos != "" )

compras.pop()

console.table(compras)

for (let i = 0; i < compras.length; i++){
    console.log(`${i+1}. ${compras[i]}`)
}

let quitarProd = prompt("¿Qué producto vas a elimiar?")

let posicion = -1

posicion = compras.indexOf(quitarProd)

compras.splice(posicion, 1)

if (posicion === -1) console.log("el producto no se encontro")
else{
    console.log(`Producto eliminado: ${quitarProd}`)
}
console.table(compras)

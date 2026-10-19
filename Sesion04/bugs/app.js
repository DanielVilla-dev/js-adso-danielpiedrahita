// let suma = 0;
// const cantidad = 4;

// for (let i = 1; i <= cantidad; i++) {
// //   suma = 0;
//   let nota = Number(prompt(`Nota ${i}:`));
//   suma += nota;
// }

// console.log(`Promedio: ${suma / cantidad}`);


// Menu de la tienda

let opcion;
let total = 0

do{
    opcion = prompt("1 Cuaderno $4.500, 2 Lápiz $1.200, 3 Borrador $800, 0 pagar")

    switch(opcion){
        case "1": total += 4500; break;
        case "2": total += 1200; break;
        case "3": total += 800; break;
        case "0": break;
        default: alert("opcion no valida");
    }
    console.log(`llevas: ${total}`);

}while (opcion != "0");

alert(`total a pagar: ${total}`);
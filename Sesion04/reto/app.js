let numeroAleatorio = Math.floor(Math.random() * 100) + 1

let intentos = 1

let adivino = false

while (intentos <= 7 && adivino === false){

    let numeroIngresado = Number(prompt("Ingresa un número entre 1 al 100"))

    if (Number.isNaN(numeroIngresado) || numeroIngresado > 100 || numeroIngresado < 1 || Number.isInteger(numeroIngresado) != true){
        console.log("Solo debes ingresar números, y del 1 al 100")
    }
    else if (numeroIngresado === numeroAleatorio){
        adivino = true
        console.log(`ADIVINASTE!!!`)
        console.log(`El número secreto era ${numeroAleatorio} y lo lograste con ${intentos} intentos`)
        break
    }
    else if (numeroIngresado < numeroAleatorio){
        console.log(`Intento ${intentos}: El número es más alto`)
        intentos += 1
    }
    else if (numeroIngresado > numeroAleatorio){
        console.log(`Intento ${intentos}: El número es más bajo`)
        intentos += 1
    }
}   

if (adivino === false){
console.log(`Perdiste!!!`)
console.log(`El número secreto es: ${numeroAleatorio}`)
}
// Año bisisesto

let año = Number(prompt("Ingresa un año"))

if (Number.isNaN(año)) {

    console.log("Debes ingresar solo números")

}else{
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0){
        console.log("El año ingresado es bisiesto")
    }
    else {
        console.log("El año ingresado no es bisiesto")
    }
}


// Calculadora

let numero = Number(prompt("Ingresa un número"))
let numero2 = Number(prompt("Ingresa otro número"))
let operacion = prompt("Ingresa la operacion que desea realizar ( +, -, *, / )")


if (Number.isNaN(numero) || Number.isNaN(numero2)){
    alert("Solo se puede ingresar números")
}else{
    let resultado = 0

    switch (operacion.trim()){

        case "+":
            resultado = numero + numero2
            console.log(`El resultado es: ${resultado}`)
            break
        case "-":
            resultado = numero - numero2
            console.log(`El resultado es: ${resultado}`)
            break
        case "*":
            resultado = numero * numero2
            console.log(`El resultado es: ${resultado}`)
            break
        case "/":
            if (numero2 === 0){
                alert("No se puede dividir entre cero")
            }
            else{
                resultado = numero / numero2
                console.log(`El resultado es: ${resultado}`)
            }
            break
        default:
            alert("La operación que utilizaste no existe")
    }
}

// IMC

let peso = Number(prompt("Ingresa tu peso (Kg)"))
let estatura = Number(prompt("Ingresa tu estatura (m)"))

let resultado = peso / estatura ** 2

if (resultado < 18.5){
    console.log(`Tu condición es: Bajo peso`)
}
else if (resultado <= 24.9 ){
    console.log(`Tu condición es: Normal`)
}
else if (resultado <=29.9){
    console.log(`Tu condición es: Sobrepeso`)
}
else{
    console.log(`Tu condición es: Obesidad`)
}
    
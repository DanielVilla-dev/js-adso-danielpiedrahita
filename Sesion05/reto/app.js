// * Creación de las funciones

// Convertidor de pesos a dólares

function pesosDolares(){

    let cantidadPesos;
    let precioDolar;
    
    do {

        cantidadPesos = Number(prompt("Ingrese la cantidad de pesos a convertir"))
        precioDolar = Number(prompt("Ingrese a cuanto esta el dolar"))
    
        if (Number.isNaN(cantidadPesos) || Number.isNaN(precioDolar) || cantidadPesos < 0 || precioDolar <=0 ){
            alert("Datos no válidos, intenta nuevamente")
        }else{
            return `La conversión de $${cantidadPesos} pesos a dólares es: ${(cantidadPesos / precioDolar).toFixed(2)} dólares`
        }

    }while (Number.isNaN(cantidadPesos) || Number.isNaN(precioDolar) || cantidadPesos < 0 || precioDolar <= 0 )

}

// Convertidor de °C a °F

function convertirTemperatura(){
    let temperatura;

    do {
        temperatura = Number(prompt("Ingresa una temperatura en °C"))

        if (Number.isNaN(temperatura)){

            alert("Solo se pueden ingresar números")

        }else{
            
            return `La conversion de °C ${temperatura} a °F es equivalente: ${(temperatura * 9 / 5 + 32).toFixed(2)} °F`

        }

    }while (Number.isNaN(temperatura))

}  

// Convertidor de Km a Millas

function kmaMillas(){

    let cantidadKm;

    do {
        cantidadKm = Number(prompt("Ingresa la cantidad de Km a convertir"))

        if (Number.isNaN(cantidadKm) || cantidadKm < 0){
            
            alert("Algo fallo, intenta nuevamente")

        }else{

            return `La conversión de ${cantidadKm} Km es: ${(cantidadKm * 0.621371).toFixed(2)} Millas`

        }

    }while (Number.isNaN(cantidadKm) || cantidadKm < 0)
}

// Convertidor de Segundos a horas

function segundosaHoras(){
    let cantidadSegundos;

    do {
        cantidadSegundos = Number(prompt("Ingresa la cantidad de segundos a convertir"))

        if (Number.isNaN(cantidadSegundos) || cantidadSegundos < 0){

            alert("Algo fallo, intenta nuevamente")

        }else{

            return `La conversión de ${cantidadSegundos} segundos a horas es: ${(cantidadSegundos / 3600).toFixed(2)} horas`

        }

    } while (Number.isNaN(cantidadSegundos) || cantidadSegundos < 0)
}

// * Creación del menú

let eleccionMenu;

do {
    eleccionMenu = Number(prompt("1- Pesos a dólares\n2- °C a °F\n3- Km a Millas\n4- Segundos a horas\n0- salir"))

    switch (eleccionMenu){

        case 1:
            console.log(pesosDolares())
            break
        case 2:
            console.log(convertirTemperatura())
            break
        case 3:
            console.log(kmaMillas())
            break
        case 4:
            console.log(segundosaHoras())
            break
        case 0:
            alert("¡Hasta luego!")
            break
        default:
            alert("Opción no válida, intenta nuevamente")

    }

}while (eleccionMenu != 0)
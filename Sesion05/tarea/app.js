// * Año bisisesto

// Creación de la funcion año bisiesto

function añoBisiesto(){
    
    let año;

    do{ 

        año = Number(prompt("Ingresa un año"))

        if (Number.isNaN(año) || año <= 0){
    
            alert("Algo fallo, intenta nuevamente")

        }
        else{   

            if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0){
                return `El año ${año} es bisiesto`
            }
            else{
                return `El año ${año} no es bisiesto`
            }
            }  

    }while (Number.isNaN(año) || año <= 0)
            
}
            
console.log(añoBisiesto())
            

// * Mayor de tres
            
// Creación de la función mayor de tres
            
function mayorDeTres(){
                
    let numero;
    let numero2;
    let numero3;
    let mayor;

    do{
        numero = Number(prompt("Ingresa el numero 1"))

        numero2 = Number(prompt("Ingresa el numero 2"))
    
        numero3 = Number(prompt("Ingresa el numero 3"))
        
        if (Number.isNaN(numero) || Number.isNaN(numero2) || Number.isNaN(numero3)){
        
            alert("Algo fallo, intenta nuevamente")
        }

        // Se realiza la comparación de los números por si se da el caso de que sean iguales

        else if (numero === numero2 && numero2 === numero3){
    
            return `Los tres números son iguales\n1: ${numero}\n2: ${numero2}\n3: ${numero3}`
        }
        // Se realiza la comparación de los números para conocer el mayor

        else if (numero >= numero2 && numero >= numero3){
    
            mayor = numero

            return `Número 1: ${numero}\nNúmero 2: ${numero2}\nNúmero 3: ${numero3}\nEl número mayor es ${mayor}`
        }
        else if (numero2 >= numero && numero2 >= numero3){
    
            mayor = numero2

            return `Número 1: ${numero}\nNúmero 2: ${numero2}\nNúmero 3: ${numero3}\nEl número mayor es ${mayor}`
        }
        else if (numero3 >= numero && numero3 >= numero2){
    
            mayor = numero3

            return `Número 1: ${numero}\nNúmero 2: ${numero2}\nNúmero 3: ${numero3}\nEl número mayor es ${mayor}`
        }

    }while (Number.isNaN(numero) || Number.isNaN(numero2) || Number.isNaN(numero3) || numero <= 0 || numero2 <= 0 || numero3 <= 0)
}

console.log(mayorDeTres())

// * Precio con descuento

// Función flecha

const precioFinal = (precio, descuento = 0) => {

    if (!Number.isFinite(precio) || !Number.isFinite(descuento) || precio < 0 || descuento < 0 || descuento > 100){
        return "Datos inválidos, intenta nuevamente"
    }

    return `Precio: $${precio}\nDescuento: ${descuento}% -> ${precio * descuento / 100}\nEl precio final es: ${precio - (precio * descuento / 100)}`

}

console.log(precioFinal(10000, 10))
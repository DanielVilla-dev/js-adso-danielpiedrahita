// * Creación de las funciones


// Función buscar producto por código

function buscarCodigo(codigo){

    for (let i = 0; i < catalogo.length; i++){
        
        if (catalogo[i].codigo === codigo){

            return catalogo[i]

        }else{

            return alert(`El producto con el código ${codigo} no existe`)

        }
    }
    return null
}


// Función contar productos agotados

function contarAgotados(){

    let cantidadAgotados = 0

    for (let i = 0; i < catalogo.length; i++){

        if (catalogo[i].stock === 0){

            cantidadAgotados += 1

        }

    }

    return `La cantidad de productos agotados son: ${cantidadAgotados}`
}


// Función valor del inventario

function valorInventario(){
    
    let sumaInventario = 0
    
    for (let i = 0; i < catalogo.length; i++){

        sumaInventario += catalogo[i].precio

    }
    
    return `El total del inventario es: $${sumaInventario}`
}


// * Creación del catalogo


let catalogo = [
    {codigo: "P001", nombre: "laptop", categoria: "computador", precio: 12000, stock: 5},
    {codigo: "P002", nombre: "mouse", categoria: "accesorio", precio: 300, stock: 10},
    {codigo: "P003", nombre: "grafica", categoria: "componente", precio: 1500, stock: 2},
    {codigo: "P004", nombre: "monitor", categoria: "componente", precio: 700, stock: 7},
    {codigo: "P005", nombre: "ram", categoria: "componente", precio: 2000, stock: 0},
    {codigo: "P006", nombre: "cargador", categoria: "componente", precio: 4000, stock: 0}
]

// * Creación del menú

let menu;

do {

    menu = Number(prompt("1- Ver catologo\n2- Buscar por código\n3- Agotados\n4- Valor del inventario\n0- Salir"))

    if (menu !== 0){
        
        switch (menu){

            case 1:

                // Mostrar todo el catalogo

                console.table(catalogo)

                break

            case 2:

                // Buscar producto por código
                
                let codigoBuscar = prompt("Ingresa el código del producto")

                console.log(buscarCodigo(codigoBuscar))

                break

            case 3:

                // Mostrar la cantidad de productos agotados

                console.log(contarAgotados())

                break

            case 4:

                // Mostrar el valor del inventario

                console.log(valorInventario())

                break

            default:

                alert("Opción no válida")
        }

    }


} while (menu !== 0)
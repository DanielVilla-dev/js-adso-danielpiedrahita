// Creación de la agenda de contactos

const agenda = [
    {nombre: "daniel", telefono: 3123213, correo: "correo@correo.com"},
    {nombre: "juan", telefono: 1212322, correo: "correo@correo.com"},
    {nombre: "santiago", telefono: 34343432, correo: "correo@correo.com"}
    ]

let menu;
let nombre;
let telefono;
let correo;
let nombreBuscar;

// Creación del menú

do {

    menu = prompt("1- Agregar contacto\n2- Ver agenda\n3- Buscar contacto\n4- Deja vacio para salir")

    if (menu) {
        
        switch (Number(menu)){

            case 1:

                // Agregar contacto

                nombre = prompt("Ingresa el nombre").toLowerCase()

                do {

                    telefono = Number(prompt("Ingresa el telefono"))

                    if (Number.isNaN(telefono)){
                        alert("Solo puedes ingresar números")
                    }

                } while (Number.isNaN(telefono))
                
                do {

                    correo = prompt("Ingresa el correo")

                    if (!correo.includes("@") || !correo.includes(".com")){
                        alert("Formato de correo no válido")
                    }

                } while (!correo.includes("@") || !correo.includes(".com"))

                agenda.push({nombre: nombre, telefono: telefono, correo: correo})

                break

                
            case 2:
                    
                // Muestra los conatactos

                console.table(agenda)

                break

                
            case 3:

                // Buscar nombres por coincidencias de letras

                nombreBuscar = prompt("Ingresa el nombre a buscar").toLowerCase()

                const Resultados = agenda.filter(contacto => contacto.nombre.toLowerCase().includes(nombreBuscar))

                if (Resultados.length > 0){

                    console.table(Resultados)

                }else{

                    alert("No se encontraron contactos")

                }

                break

            default:

                alert("Opción no válida, intenta nuevamente")

        }
    }

} while (menu)
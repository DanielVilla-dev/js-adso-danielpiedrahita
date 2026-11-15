// Objeto para practicar

const aprendices = [
  { nombre: "Ana", nota: 4.5, jornada: "Mañana" },
  { nombre: "Luis", nota: 2.8, jornada: "Tarde" },
  { nombre: "Sofía", nota: 3.9, jornada: "Mañana" },
  { nombre: "Juan", nota: 4.8, jornada: "Noche" },
  { nombre: "María", nota: 2.5, jornada: "Tarde" },
  { nombre: "Pedro", nota: 3.4, jornada: "Noche" }
];


// * Metodo Filter

// const aprobados = aprendices.filter((a) => a.nota >= 3);

// const jornada = aprendices.filter((n) => n.jornada == "Noche");

// console.table(jornada)

// const cantidadAprendices = aprendices.filter((i) => i.jornada == "Noche");

// console.log(cantidadAprendices)


// * Metodo Map

const nombres = aprendices.map((a) => a.nombre.toUpperCase());

console.table(nombres)

const aprobado = aprendices.map((x) => ({
    ...x,

    // * USO DEL CONDICIONAL TERCIARIO

    aprobado: x.nota >= 3 ? "Aprobado" : "No Aprobado"

    // x.nota >=3 es la condicion, el ? es el delimitador para entrar a los bloques de ejecucion y : es por decir el else

}));

console.table(aprobado)


// * Metodo Find

const juan = aprendices.find((a) => a.nombre === "Juan")

console.log(juan)

// NOTA: El find se detiene cuando encuentra la primera coincidencia, normalmente se utiliza para buscar números de placas de autos, números de identificación o algun dato que deba de ser ÚNICO.


// * Metodo Some - Every

// El Some es utilizado para saber si hay almenos algo que se cumpla, ya sea una nota mayor, alguien que exista, etc.

console.log(aprendices.some((a) => a.nota >= 4.6));

// El Every es utilizado para saber si todos los items cumplen una función, todos cumplen true, contrario false.

console.log(aprendices.every((a) => a.nota >= 3));



// practica combinada


const jornota = aprendices
    .filter((a) => a.jornada === "Mañana" && a.nota >= 3)
    .map((a) => a.nombre.toUpperCase())

console.table(jornota)


// * Metodo Reduce

const suma = aprendices.reduce((total, a) => total + a.nota, 0)

console.log(suma)

const promedio = suma / aprendices.length

console.log(promedio)


// * Metodo Sort

// Sort modifica el arreglo original

console.log([10, 9, 1, 100].sort((a,b) => a - b));

// Sorted crea un nuevo arreglo

const ranking = aprendices.toSorted((a,b) => b.nota - a.nota);

console.table(ranking)

// El metodo reverse() sirve para poner en reversa algun arreglo, lo de izquierda lo pone a la derecha sin darle organización de menor a mayor o viceversa.

console.table(ranking.reverse())

// Sort para organizar alfabeticamente

const alfabetico = [...aprendices].sort((a,b) => a.nombre.localeCompare(b.nombre))

console.table(alfabetico)
console.table(alfabetico.reverse())





// * FORMATO JSON

// Con esta instrucción empaquetamos el objeto en un JSON

const texto = JSON.stringify(ranking, null, 2)

console.log(texto)

// Con esta instrucción se realiza el desempaquetado del JSON

const desempaquetado = JSON.parse(texto)

console.log(desempaquetado[0].nombre)
const textoPeliculas = `[
  {"titulo": "Encanto", "anio": 2021, "genero": "Animación", "calificacion": 4.4},
  {"titulo": "El abrazo de la serpiente", "anio": 2015, "genero": "Drama", "calificacion": 4.6},
  {"titulo": "Coco", "anio": 2017, "genero": "Animación", "calificacion": 4.8},
  {"titulo": "Pájaros de verano", "anio": 2018, "genero": "Drama", "calificacion": 4.3},
  {"titulo": "Intensamente 2", "anio": 2024, "genero": "Animación", "calificacion": 4.2},
  {"titulo": "Interestelar", "anio": 2014, "genero": "Ciencia ficción", "calificacion": 4.7},
  {"titulo": "Dune", "anio": 2021, "genero": "Ciencia ficción", "calificacion": 4.1},
  {"titulo": "La estrategia del caracol", "anio": 1993, "genero": "Comedia", "calificacion": 4.5}
]`;

// 1. Conviértelo en arreglo con `JSON.parse`.

const peliculas = JSON.parse(textoPeliculas)
console.log("Catalogo de peliculas")
console.table(peliculas)

// 2. Con `filter`: las películas de animación y, aparte, las estrenadas desde 2018.

const peliculasAnimadas = peliculas.filter((pelicula) => pelicula.genero === "Animación")
console.log("Peliculas animadas")
console.table(peliculasAnimadas)

console.log("Peliculas estrenadas desde 2018")

const peliculasPost = peliculas.filter((pelicula) => pelicula.anio >= 2018)
console.table(peliculasPost)

// 3. Con `map`: la lista de títulos en mayúscula.

const titulosMayus = peliculas.map((pelicula) => pelicula.titulo.toUpperCase())

console.table("Titulos en mayusculas")
console.table(titulosMayus)


// 4. Con `reduce`: la calificación promedio.

const calificacion = peliculas.reduce((acumulador, pelicula) => acumulador + pelicula.calificacion, 0)

const promedio = calificacion / peliculas.length

console.log(`El promedio de calificacion es: ${promedio.toFixed(2)}`)

// 5. Con `toSorted` y `slice`: el top 3 por calificación, convertido de nuevo a texto con `JSON.stringify(..., null, 2)`.

const topPeliculas = peliculas.toSorted((a, b) => b.calificacion - a.calificacion).slice(0,3);

const peliculasTexto = JSON.stringify(...topPeliculas, null, 2)

console.log(peliculasTexto)

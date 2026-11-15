document.querySelector("#nombre").textContent = "Daniel Villa";
document.querySelector(".rol").textContent = "Aprendiz ADSO"

document.querySelector(".rol").classList.add("destacado")



// Agregar una lista con js a el HTML

const habilidades = ["HTML", "CSS", "JavaScript"]

const listaHabilidades = document.querySelector("#habilidades")

for (const habilidad of habilidades){
    listaHabilidades.innerHTML += `<li>${habilidad}</li>`
}

// BOTON CAMBIO DE MODO

document.querySelector("#btnTema").addEventListener("click", () => { document.body.classList.toggle("oscuro");});


// CONTADOR

let valor = 0
const pantalla = document.querySelector("#pantalla");

document.querySelector("#btnSumar").addEventListener("click", () => {
    valor++
    pantalla.textContent = valor;
})

document.querySelector("#btnRestar").addEventListener("click", () => {
    if (valor > 0) {
        valor--;
        pantalla.textContent = valor;
    }
})

const inputProducto = document.querySelector("#producto");

inputProducto.addEventListener("keydown", (e) => {
    console.log("Presionaste", e.key);
})

// const lista = document.querySelector("#lista");

// const li = document.createElement("li")
// li.textContent = "arroz"
// lista.append(li)

// Datos + render


const compras = [];

function render() {
  lista.innerHTML = "";                 // 1. borrar el tablero
  for (const producto of compras) {     // 2. pintar desde los datos
    const li = document.createElement("li");
    li.textContent = producto;

    const borrar = document.createElement("button");
    borrar.textContent = "❌";
    borrar.addEventListener("click", () => {
      compras.splice(compras.indexOf(producto), 1);
      render();
    });

    li.append(borrar);
    lista.append(li);
  }
}

function agregar() {
  const texto = inputProducto.value.trim();
  if (texto === "") return;
  compras.push(texto);
  inputProducto.value = "";
  render();
}

document.querySelector("#btnAgregar").addEventListener("click", agregar);
inputProducto.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregar();
});


// NOTA: el .value se usa en los inputs, para traer la informacion que este en él y re asignar 



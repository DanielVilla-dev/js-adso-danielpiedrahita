const pedidos = [
  { id: 1, cliente: "Ana", plato: "Bandeja paisa", cantidad: 2, precioUnitario: 32000, estado: "entregado", domicilio: true },
  { id: 2, cliente: "Luis", plato: "Ajiaco", cantidad: 1, precioUnitario: 28000, estado: "pendiente", domicilio: false },
  { id: 3, cliente: "Sofía", plato: "Arepa de choclo", cantidad: 4, precioUnitario: 8000, estado: "entregado", domicilio: true },
  { id: 4, cliente: "Juan", plato: "Sancocho", cantidad: 3, precioUnitario: 26000, estado: "pendiente", domicilio: true },
  { id: 5, cliente: "María", plato: "Empanadas x6", cantidad: 2, precioUnitario: 12000, estado: "entregado", domicilio: false },
  { id: 6, cliente: "Pedro", plato: "Bandeja paisa", cantidad: 1, precioUnitario: 32000, estado: "entregado", domicilio: true },
  { id: 7, cliente: "Camila", plato: "Mondongo", cantidad: 2, precioUnitario: 25000, estado: "pendiente", domicilio: false },
  { id: 8, cliente: "Andrés", plato: "Arroz con pollo", cantidad: 3, precioUnitario: 22000, estado: "entregado", domicilio: true },
  { id: 9, cliente: "Valentina", plato: "Ajiaco", cantidad: 2, precioUnitario: 28000, estado: "entregado", domicilio: false },
  { id: 10, cliente: "Daniel", plato: "Chicharrón", cantidad: 5, precioUnitario: 15000, estado: "pendiente", domicilio: true }
];


// 1. Con `map`, un arreglo nuevo donde cada pedido tenga su `total` (cantidad × precio). Muéstralo con `console.table`.

console.log("Pedidos con su total")

const totalPedido = pedidos.map((p) => ({
    ...p,
    total: p.cantidad * p.precioUnitario
}));

console.table(totalPedido)

// 2. Con `filter`, cuántos pedidos están pendientes.

console.log("Pedidos Pendientes")

const pendientes = pedidos.filter(pedido => pedido.estado === "pendiente")
console.table(pendientes)

// 3. Con `filter` y `reduce`, el **total vendido** de los pedidos entregados, en pesos colombianos.

console.log("Total de pedidos entregados")

const totalVendido = pedidos.filter((pedido) => pedido.estado === "entregado").reduce((acumulador, pedido) => (acumulador + pedido.precioUnitario), 0);

// Formato de conversion a pesos colombianos

const totalFormatoPesos = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
}).format(totalVendido)

console.log(`El precio total de pedidos entregados es: ${totalFormatoPesos}`)

// 4. Con `toSorted` (o `sort` sobre una copia) y `slice`, los **3 pedidos más grandes**.

console.log("Pedidos mas grandes")

const pedidosGrandes = pedidos.toSorted((a, b) => b.cantidad - a.cantidad).slice(0,3)

console.table(pedidosGrandes)


// 5. Con `find`, busca un pedido por su número (pídelo con `prompt`) y avisa si no existe.


const pedirPedido = Number(prompt("Ingresa el número del pedido"))

const pedidoEncontrado = pedidos.find((pedido) => pedido.id === pedirPedido)

if (pedidoEncontrado === undefined){
    alert("Producto no encontrado")
}else{
    console.table(pedidoEncontrado)
}


// 6. Con `some`, di si todavía hay domicilios pendientes por despachar.

const pedidosPorDespachar = pedidos.some((pedido) => pedido.estado === "pendiente")

if (pedidosPorDespachar === true){
    console.log("Todavia hay pedidos por despachar")

    // Muestra cuales estan pendientes
    console.table(pendientes)
}else {
    console.log("Todos los pedidos fueron despachados")
}

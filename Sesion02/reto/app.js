let entrada = prompt("Ingresa el precio")

let precioUnitario = Number(entrada)

let cantidad = Number(prompt("Ingresa la cantidad"))

let porcentajeDescuento = Number(prompt("Ingresa el descuento"))

const IVA = 0.19

let subtotal = 0

let descuento = 0

let subtotalConDescuento = 0

let precioConIva = 0

let total = 0

if (entrada === null || Number.isNaN(precioUnitario) || Number.isNaN(cantidad) || Number.isNaN(porcentajeDescuento)){

    alert("Revisa los datos ingresados");

}else {

    subtotal = precioUnitario * cantidad

    descuento = subtotal * porcentajeDescuento / 100

    subtotalConDescuento = subtotal - descuento

    precioConIva = subtotalConDescuento * IVA

    total = subtotalConDescuento + precioConIva

    console.log(`Subtotal: ${subtotal.toLocaleString("es-CO", {style: "currency", currency: "COP" })}`)

    console.log(`Descuento: ${descuento.toLocaleString("es-CO", {style: "currency", currency: "COP" })}`)
    
    console.log(`IVA (19 %): ${precioConIva.toLocaleString("es-CO", {style: "currency", currency: "COP" })}`)
    
    alert(`TOTAL: ${total.toLocaleString("es-CO", {style: "currency", currency: "COP" })}`)

}
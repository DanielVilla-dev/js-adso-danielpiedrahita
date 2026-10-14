let nombreAprendiz = prompt("Ingresa el nombre del aprendiz")

let nota = Number(prompt("Ingresa la nota del aprendiz"))

let jornada = prompt("ingresa tu jornada (M, T o N)")

let resultado = ""

let textoJornada = ""

if (Number.isNaN(nota)){
    alert("La nota debe ser un número")
}else if (nota < 0 || nota > 5){
    alert("La nota está fuera de rango")
}else{
    if (nota >= 4.6){
        resultado = "🏆 Excelente"
    }
    else if (nota >= 4.0){
        resultado = "⭐ Sobresaliente"
    }
    else if (nota >= 3.0){
        resultado = "✅ Aprobado"
    }
    else{
        resultado = "❌ No aprobado"
    }

    switch (jornada.toUpperCase()){
        case "M":
            textoJornada = "Jornada mañana"
            break
        case "T":
            textoJornada = "Jornada tarde"
            break
        case "N":
            textoJornada = "Jornada noche"
            break
        default:
            textoJornada = "Jornada no válida"
    }
    
    console.log(`${nombreAprendiz}: ${nota.toFixed(1)} -> ${resultado} -> ${textoJornada}`)
    
    alert(resultado)
}
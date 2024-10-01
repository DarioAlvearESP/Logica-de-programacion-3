function calcularFactorial(n) {
    if (n < 0) return "No se puede calcular el factorial de un número negativo.";
    if (n === 0 || n === 1) return 1;
    
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function solicitarNumero() {
    let numero;

    while (true) {
        numero = prompt("Por favor, ingresa un número para calcular su factorial:");

        // Convertir la entrada a número
        numero = Number(numero);

        // Verificar si es un número
        if (!isNaN(numero) && Number.isInteger(numero)) {
            break; // Salir del bucle si es un número válido
        } else {
            alert("Entrada no válida. Por favor, ingresa un número entero.");
        }
    }

    return numero;
}

const numeroIngresado = solicitarNumero();
const resultado = calcularFactorial(numeroIngresado);
document.getElementById("resultado").innerText = `El factorial de ${numeroIngresado} es ${resultado}.`;

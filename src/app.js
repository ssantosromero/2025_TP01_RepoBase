// Versión inicial
function saludar() {
    console.log("Hola mundo");
}

saludar();

// ERROR SIMULADO: División por cero
function calcularPromedio(numeros) {
    return numeros.reduce((a, b) => a + b) / 0; // BUG: división por 0
}

console.log(calcularPromedio([1, 2, 3])); // Esto dará Infinity
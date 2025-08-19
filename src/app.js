// Versión inicial
function saludar() {
    console.log("Hola mundo");
}

saludar();

// HOTFIX: Corregir división por cero
function calcularPromedio(numeros) {
    if (!numeros || numeros.length === 0) {
        return 0;
    }
    return numeros.reduce((a, b) => a + b) / numeros.length; // CORREGIDO
}

console.log(calcularPromedio([1, 2, 3])); // Ahora dará 2
// Versión inicial
function saludar() {
    console.log("Hola mundo");
}

// Nueva funcionalidad: Validador de datos
function validarDatos(datos) {
    if (!datos || typeof datos !== 'object') {
        return { valido: false, error: 'Datos inválidos o vacíos' };
    }
    
    if (!datos.nombre || datos.nombre.trim() === '') {
        return { valido: false, error: 'Nombre es requerido' };
    }
    
    if (!datos.email || !datos.email.includes('@')) {
        return { valido: false, error: 'Email inválido' };
    }
    
    return { valido: true, error: null };
}

saludar();

// Ejemplo de uso del validador
const datosEjemplo = { nombre: 'Juan', email: 'juan@email.com' };
console.log('Validación:', validarDatos(datosEjemplo));
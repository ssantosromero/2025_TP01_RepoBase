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

// Sistema de logging
class Logger {
    constructor() {
        this.logs = [];
    }
    
    info(mensaje) {
        const timestamp = new Date().toISOString();
        const log = { nivel: 'INFO', mensaje, timestamp };
        this.logs.push(log);
        console.log(`[${timestamp}] INFO: ${mensaje}`);
    }
    
    error(mensaje) {
        const timestamp = new Date().toISOString();
        const log = { nivel: 'ERROR', mensaje, timestamp };
        this.logs.push(log);
        console.error(`[${timestamp}] ERROR: ${mensaje}`);
    }
    
    obtenerLogs() {
        return this.logs;
    }
}

const logger = new Logger();

function procesarInformacion(info) {
    logger.info('Iniciando procesamiento de información');
    
    if (!info || info.trim() === '') {
        logger.error('Información vacía o inválida');
        return false;
    }
    
    logger.info(`Información procesada: ${info.trim()}`);
    return true;
}

// HOTFIX: Función calcularPromedio corregida
function calcularPromedio(numeros) {
    if (!numeros || numeros.length === 0) {
        return 0;
    }
    return numeros.reduce((a, b) => a + b) / numeros.length;
}

// Ejecución
saludar();
const datosEjemplo = { nombre: 'Juan', email: 'juan@email.com' };
console.log('Validación:', validarDatos(datosEjemplo));
logger.info('Sistema iniciado correctamente');
procesarInformacion('Información inicial');
console.log('Promedio:', calcularPromedio([1, 2, 3]));
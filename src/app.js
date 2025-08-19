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



// Nueva funcionalidad: Sistema de logging
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

// Instancia global del logger
const logger = new Logger();

// Función para procesar datos del archivo info.txt
function procesarInformacion(info) {
    logger.info('Iniciando procesamiento de información');
    
    if (!info || info.trim() === '') {
        logger.error('Información vacía o inválida');
        return false;
    }
    
    logger.info(`Información procesada: ${info.trim()}`);
    return true;
}

// Ejemplo de uso
logger.info('Sistema iniciado correctamente');
procesarInformacion('Información inicial');
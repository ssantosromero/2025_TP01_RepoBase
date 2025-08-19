# Decisiones de Desarrollo - TP01 Git Básico

## 1. Configuración del Entorno

1) Entre al desktop (cd desktop)
2) Clone el repositorio (git clone https://github.com/ingsoft3ucc/2025_TP01_RepoBase)
3) Me dirigi al repositorio (cd 2025_TP01_RepoBase)
4) Verifique la configuracion de git:
**Comandos utilizados:**
git config --global user.name "Santos Romero"
git config --global user.email "santosromeroreyna@gmail.com"

Configuré mi identidad global para que todos los commits queden correctamente atribuidos a mi persona, asegurando trazabilidad en el equipo.

5)Cree este archivo llamado "decisiones.md" a traves del text mate(mate decisiones.md)

6) git add decisiones.md y git commit informando lo que subi a git

## 2. Flujo de Trabajo Elegido

GitFlow simplificado con ramas feature y hotfix
- `main`: Rama principal con código estable
- `feature/nueva-funcionalidad`: Desarrollo de nueva funcionalidad  
- `hotfix/correccion-error`: Corrección rápida de errores

Este flujo me permite desarrollo paralelo seguro y facilita la integración ordenada de cambios.

## 3. Desarrollo de Funcionalidad

7) Creo la rama feature:

git branch feature/nueva-funcionalidad
git checkout feature/nueva-funcionalidad

8)Verifique que archivos tiene el repositorio base en el cual el proyecto tiene una función básica saludar() en JavaScript y datos de ejemplo.:
bashls -la
ls src/
cat README.md
cat src/app.js
cat data/info.txt

9) Realice el primer commit atómico (Agregar función de validación):
mate src/app.js 

#####PRIMER COMMIT ATÓMICO
git add src/app.js
git commit -m "feat: agregue función validarDatos con verificación de nombre y email"


10) Realice el segundo commit atómico(Sistema de logging):
mate src/app.js

#####SEGUNDO COMMIT ATÓMICO
git add src/app.js
git commit -m "feat: agregue sistema de logging y procesamiento de info"


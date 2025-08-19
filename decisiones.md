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

## 4. Corrección de Error (Hotfix)

11) Simular error en main, nos dirijimos a la branch main primero y modificamos el archivo:

git checkout main
mate src/app.js

12) Agregue la funcion calcularPromedio con división por 0, lo subimos a git y hacemos commit

git add src/app.js
git commit -m "feat: agregue función calcularPromedio (CON error - división por 0)"

13) Cree rama Hotfix y nos situamos en esa branch:

git branch hotfix/correccion-division-cero
git checkout hotfix/correccion-division-cero

14) Corregi el error, corregí la división por 0 agregando validación de array vacío

git add src/app.js
git commit -m "hotfix: corregi la división por cero en calcularPromedio"

15) Aplique fix a main, nos situamos en main y hacemos merge con hotfix:

git checkout main
git merge hotfix/correccion-division-cero

16)Aplique fix a rama feature, nos situamos en feature, y hacemos merge con main:

git checkout feature/nueva-funcionalidad
git merge main

17)Hubo un conflicto connel merge que solucione manualmente, y le hice un add y commit.
git add src/app.js
git commit -m "fix: resolver conflicto de merge en archivo app.js"

Usé merge de main a feature para traer el hotfix, asegurando que ambas ramas tengan la corrección.



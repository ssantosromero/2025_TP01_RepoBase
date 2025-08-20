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

18)Tuve un conflicto con el merge de y la nueva funcionalidad, lo arregle manualmente

git checkout main
git merge feature/nueva-funcionalidad

Despues hice el famoso add, commit, push

19) Cree el tag v1.0, usé Semantic Versioning (SemVer) v1.0 para marcar la primera versión estable del sistema.

git tag v1.0 -m "Versión 1.0: Sistema completo con validación, logging y hotfix aplicado"
git push origin v1.0


## 6. Reflexión: Calidad y Trazabilidad en Equipos Reales

### Problemas encontrados y resoluciones:
### Problemas encontrados y resoluciones:
- **Conflictos de merge:** Se resolvieron manualmente priorizando mantener todas las funcionalidades
- **Permisos de repositorio:** Inicialmente intenté pushear al repo original, solucionado con fork
- **Integración de hotfix:** Cherry-pick falló, resuelto con merge directo desde main

### Como aseguraria calidad en un equipo real:

#### Lo que aplicaria del TP:
- **Commits claros** como hice: "feat:", "fix:", "docs:" para que el equipo entienda rápido
- **Una rama por funcionalidad** - evita que se pisen el código entre compañeros
- **Pull Requests obligatorios** - que otro revise tu código antes de subir a main
- **Tags para versiones** como el v1.0 que cree - para saber exactamente que se deployó

#### Herramientas que investigaría:
- **GitHub Actions o Jenkins** para que corra tests automáticamente cuando hago push
- **ESLint o Prettier** para que todo el código tenga el mismo formato
- **SonarQube** que me dijeron que detecta bugs automáticamente 
- **Utilizando como ayuda el Claude.AI encontré que existen herramientas como Husky** para validar commits antes de subirlos

#### Reglas que estableceria:
- **main siempre tiene que funcionar** - nada roto en producción
- **Code review de al menos 1 persona** - 4 ojos ven más que 2
- **Documentar en README** que hace cada función importante
- **Backups regulares** del repositorio por las dudas

#### Para proyectos grandes:
- **Separar en módulos** - cada dev se enfoca en su parte
- **Sprint planning** con Jira o Trello para organizar tareas
- **Daily standups** para no duplicar trabajo
- **Testing automatizado** - que se ejecute solo cuando hago push

### Por que elegí este flujo:
Me pareció lo más simple pero completo. Feature branches me permitió experimentar sin romper main, y el hotfix me enseñó como arreglar bugs urgentes sin afectar el desarrollo normal.
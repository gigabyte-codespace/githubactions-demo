# GitHub Actions and CodeQL Demo

Este repositorio demuestra cómo configurar y utilizar GitHub Actions para automatizar tareas como la integración continua (CI), la entrega continua (CD), y la ejecución de análisis estático de código utilizando CodeQL.

## Estructura del Proyecto

El proyecto incluye los siguientes archivos y carpetas principales:

- `app.js`: Contiene el código JavaScript del proyecto, incluyendo ejemplos de vulnerabilidades y code smells.
- `math.js`: Contiene funciones matemáticas utilizadas en el proyecto.
- `tests/`: Carpeta que contiene los archivos de prueba.
    - `math.test.js`: Pruebas unitarias para las funciones matemáticas definidas en `math.js`.
- `.github/workflows/ci.yml`: Configuración de GitHub Actions para ejecutar pruebas y análisis de CodeQL.
- `package.json`: Archivo de configuración de npm que incluye scripts y dependencias del proyecto.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/)

## Instalación

1. Clona este repositorio en tu máquina local:
```bash
   git clone https://github.com/<tu-usuario>/github-actions-demo.git
   cd github-actions-demo
```

2. Instala las dependencias del proyecto:
```bash
npm install
```

3. Ejecutar las pruebas unitarias
```bash
npm test
```

4. Ejecutar el análisis estático de código (lint):
```shell
npm run lint
```

## Configuración de GitHub Actions

Este proyecto está configurado para utilizar GitHub Actions para CI/CD y análisis estático de código con CodeQL. El archivo **.github/workflows/ci.yml** define los pasos del workflow.

### Desencadenar el Workflow

El workflow de GitHub Actions se ejecuta en las siguientes condiciones:

*   En cada push a la rama **main**.
*   En cada push a las ramas que siguen el patrón **feature-\***.
*   En cada pull request dirigido a la rama **main**.

### Configuración de Protección de Ramas

Para asegurar que CodeQL bloquee la fusión de un pull request si se encuentran vulnerabilidades o code smells:

1.  Ve a la configuración del repositorio en GitHub.
2.  Haz clic en "Branches" y luego en "Add rule".
3.  Configura la regla de protección de la rama **main** para requerir que los checks de estado de CodeQL pasen antes de permitir la fusión del PR.


### Crear un Commit en Blanco

Para crear un commit en blanco y desencadenar el workflow de GitHub Actions, puedes usar el siguiente comando:
```shell
git commit --allow-empty -m "Empty commit to trigger CI/CD"
git push origin <tu-rama>
```

# PR Check Status

Podemos ver en la [zona de PRs](https://github.com/gigabyte-codespace/githubactions-demo/pull) un PR que esta abierto y podemos ver como los checks
no se han cumplido asi como los detalles de cada vulnerabilidad encontrada.

Happy Coding!

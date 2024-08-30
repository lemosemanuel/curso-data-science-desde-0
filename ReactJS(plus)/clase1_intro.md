# Clase 1: Introducción a React y Configuración del Entorno

## 1.1 ¿Qué es React?

- **React** es una biblioteca de JavaScript para construir interfaces de usuario, especialmente para aplicaciones web de una sola página.
- Fue desarrollada por Facebook y es ampliamente utilizada para crear aplicaciones web modernas.
- **Componentes**: En React, las interfaces se construyen con componentes, que son bloques de construcción reutilizables.

## 1.2 Instalación del Entorno de Desarrollo

Antes de poder trabajar con React, necesitamos configurar nuestro entorno de desarrollo.

### Paso 1: Instalar Node.js y npm

- **Node.js** es un entorno de ejecución para JavaScript que nos permite ejecutar JavaScript fuera del navegador.
- **npm** (Node Package Manager) es el gestor de paquetes de Node.js, que nos permite instalar paquetes como React.

1. Visita la [página oficial de Node.js](https://nodejs.org/) y descarga la versión recomendada para tu sistema operativo.
2. Instala Node.js siguiendo las instrucciones del instalador.

> **Nota**: Al instalar Node.js, npm también se instalará automáticamente.

### Paso 2: Verificar la instalación

Abre una terminal o línea de comandos y ejecuta los siguientes comandos para verificar que Node.js y npm se instalaron correctamente:
en terminal:
```
node -v
npm -v
```

### Paso 3: Crear un nuevo proyecto React con create-react-app
React proporciona una herramienta llamada create-react-app que simplifica la creación de nuevos proyectos React con una configuración predefinida.
1. En la terminal, navega hasta la carpeta donde deseas crear tu proyecto y ejecuta:
```
npx create-react-app mi-primer-react
```
2. Navega al directorio del proyecto:
```
cd mi-primer-react
```
3. Inicia la aplicación:
```
npm start
```

### 1.3 Estructura Básica de un Proyecto React
Ahora que hemos creado nuestro primer proyecto React, echemos un vistazo a la estructura de archivos generada:
- **public/:** Contiene archivos estáticos como el archivo index.html, que es el punto de entrada de la aplicación.
- **src/:** Aquí es donde se encuentran los archivos principales de tu aplicación, incluyendo:
- **index.js:** El archivo que inicia la aplicación y renderiza el componente raíz (App).
- **App.js:** El componente principal de tu aplicación. Aquí es donde comenzarás a construir tu interfaz.


### 1.4 Crear tu Primer Componente React
Vamos a editar el archivo App.js para que muestre nuestro primer componente React.

- Abre src/App.js en tu editor de código
- Modifica el código para que se vea así:
```
import React from 'react';

function App() {
  return (
    <div>
      <h1>¡Hola, Mundo!</h1>
      <p>Este es mi primer componente en React.</p>
    </div>
  );
}

export default App;
```
- Guarda los cambios. Tu navegador debería actualizar automáticamente y mostrar “¡Hola, Mundo!” junto con el texto adicional.


### 1.5 Entender la Sintaxis JSX
- JSX es una extensión de sintaxis para JavaScript que se parece a HTML. Con JSX, puedes escribir estructuras de la interfaz de usuario dentro de tu código JavaScript.
- Aunque JSX parece HTML, se convierte en llamadas a React.createElement() en tiempo de compilación, creando una estructura de elementos que React maneja eficientemente.
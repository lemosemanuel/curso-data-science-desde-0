# Machete de Etiquetas HTML Más Usadas

## 1. **Estructura Básica de un Documento HTML**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la Página</title>
</head>
<body>
  <!-- Contenido aquí -->
</body>
</html>
```

- **`<!DOCTYPE html>`**: Declara el tipo de documento, necesario para que el navegador interprete correctamente el HTML.
- **`<html>`**: Contiene todo el contenido de la página web.
- **`<head>`**: Incluye metadatos, enlaces a CSS, scripts, y el título de la página.
- **`<body>`**: Contiene el contenido visible de la página.

---

## 2. **Etiquetas de Contenido**

- **`<div>`**: División o contenedor genérico.
  - Uso: Agrupar contenido para aplicar estilos o scripts.
  - Ejemplo:
    ```html
    <div class="contenedor">
      <!-- Otros elementos aquí -->
    </div>
    ```

- **`<span>`**: Contenedor en línea.
  - Uso: Agrupar texto o elementos en línea para estilos.
  - Ejemplo:
    ```html
    <span class="resaltado">Texto resaltado</span>
    ```

- **`<p>`**: Párrafo.
  - Uso: Definir bloques de texto.
  - Ejemplo:
    ```html
    <p>Este es un párrafo de texto.</p>
    ```

- **`<h1>` a `<h6>`**: Encabezados de distintos niveles.
  - Uso: Títulos y subtítulos.
  - Ejemplo:
    ```html
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
    ```

- **`<a>`**: Enlace (anchor).
  - Uso: Crear hipervínculos.
  - Ejemplo:
    ```html
    <a href="https://ejemplo.com">Visita Ejemplo</a>
    ```

- **`<img>`**: Imagen.
  - Uso: Insertar imágenes.
  - Ejemplo:
    ```html
    <img src="imagen.jpg" alt="Descripción de la imagen">
    ```

- **`<ul>`** y **`<ol>`**: Listas desordenadas y ordenadas.
  - Uso: Crear listas con o sin orden.
  - Ejemplo:
    ```html
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
    </ul>

    <ol>
      <li>Primer elemento</li>
      <li>Segundo elemento</li>
    </ol>
    ```

- **`<li>`**: Elemento de lista.
  - Uso: Representa un ítem dentro de una lista.
  - Ejemplo: Ver `<ul>` y `<ol>`.

- **`<strong>`**: Texto en negrita.
  - Uso: Resaltar texto importante.
  - Ejemplo:
    ```html
    <p>Este es un <strong>texto importante</strong>.</p>
    ```

- **`<em>`**: Texto en cursiva.
  - Uso: Enfatizar texto.
  - Ejemplo:
    ```html
    <p>Este es un <em>texto enfatizado</em>.</p>
    ```

---

## 3. **Etiquetas de Formularios**

- **`<form>`**: Formulario.
  - Uso: Contener campos de entrada de datos.
  - Ejemplo:
    ```html
    <form action="/enviar" method="post">
      <!-- Campos aquí -->
    </form>
    ```

- **`<input>`**: Campo de entrada.
  - Uso: Capturar datos de usuario (texto, contraseñas, etc.).
  - Ejemplo:
    ```html
    <input type="text" name="nombre" placeholder="Ingresa tu nombre">
    ```

- **`<button>`**: Botón.
  - Uso: Botón para enviar formularios o ejecutar scripts.
  - Ejemplo:
    ```html
    <button type="submit">Enviar</button>
    ```

- **`<label>`**: Etiqueta para un campo.
  - Uso: Asociar texto descriptivo con un campo de formulario.
  - Ejemplo:
    ```html
    <label for="nombre">Nombre:</label>
    <input id="nombre" type="text" name="nombre">
    ```

- **`<textarea>`**: Área de texto.
  - Uso: Capturar texto largo.
  - Ejemplo:
    ```html
    <textarea name="mensaje" rows="4" cols="50"></textarea>
    ```

- **`<select>`**: Menú desplegable.
  - Uso: Crear listas de opciones seleccionables.
  - Ejemplo:
    ```html
    <select name="opciones">
      <option value="1">Opción 1</option>
      <option value="2">Opción 2</option>
    </select>
    ```

---

## 4. **Etiquetas de Estilos y Scripts**

- **`<style>`**: Estilos CSS en línea.
  - Uso: Añadir estilos CSS directamente en el HTML.
  - Ejemplo:
    ```html
    <style>
      body {
        background-color: lightblue;
      }
    </style>
    ```

- **`<link>`**: Enlace a un archivo CSS externo.
  - Uso: Conectar un archivo CSS con el HTML.
  - Ejemplo:
    ```html
    <link rel="stylesheet" href="estilos.css">
    ```

- **`<script>`**: Scripts de JavaScript.
  - Uso: Añadir o enlazar scripts JS.
  - Ejemplo:
    ```html
    <script src="script.js"></script>
    ```

---

## 5. **Otras Etiquetas Útiles**

- **`<br>`**: Salto de línea.
  - Uso: Insertar un salto de línea.
  - Ejemplo:
    ```html
    <p>Primera línea<br>Segunda línea</p>
    ```

- **`<hr>`**: Línea horizontal.
  - Uso: Insertar una línea divisoria.
  - Ejemplo:
    ```html
    <hr>
    ```

- **`<footer>`**: Pie de página.
  - Uso: Definir el pie de una página web.
  - Ejemplo:
    ```html
    <footer>
      <p>Derechos reservados &copy; 2024</p>
    </footer>
    ```

- **`<header>`**: Encabezado.
  - Uso: Definir la cabecera de una página web.
  - Ejemplo:
    ```html
    <header>
      <h1>Bienvenidos a mi sitio web</h1>
    </header>
    ```

- **`<nav>`**: Barra de navegación.
  - Uso: Definir un menú de navegación.
  - Ejemplo:
    ```html
    <nav>
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
    ```

---

## Resumen Rápido

- **`<div>`** y **`<span>`**: Contenedores para agrupar contenido.
- **`<p>`** y **`<h1>`** a **`<h6>`**: Párrafos y encabezados.
- **`<a>`** y **`<img>`**: Enlaces e imágenes.
- **`<form>`**, **`<input>`**, **`<button>`**: Formularios y campos de entrada.
- **`<style>`**, **`<link>`**, **`<script>`**: Estilos y scripts.
- **`<br>`**, **`<hr>`**: Saltos de línea y líneas horizontales.

Este machete es una referencia rápida y útil para empezar a escribir HTML y entender el propósito de las etiquetas más utilizadas en la creación de páginas web.

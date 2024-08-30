# Clase 2: Componentes y Props en React

## 2.1 Componentes en React

### ¿Qué es un Componente?

- Un **componente** en React es una función o clase que opcionalmente acepta entradas (conocidas como `props`) y devuelve un elemento React que describe cómo debería verse una sección de la interfaz.
- Los componentes son reutilizables y permiten construir interfaces de usuario de manera modular.

### Componentes de Función vs Componentes de Clase

- **Componentes de Función**: Son funciones de JavaScript que devuelven JSX. Son más simples y se utilizan para componentes que solo renderizan UI sin manejar mucho estado o lógica interna.

```javascript
  function MiComponente() {
    return <h1>¡Hola, soy un componente de función!</h1>;
  }
```

- **Componentes de Clase**: Son clases de JavaScript que extienden de React.Component y tienen métodos como render(). Antes de React 16.8, eran necesarios para manejar el estado y el ciclo de vida de un componente, pero con los Hooks ahora podemos hacer esto también en componentes de función.

```javascript
    class MiComponente extends React.Component {
        render() {
            return <h1>¡Hola, soy un componente de clase!</h1>;
        }
    }
```

### Crear Varios Componentes
Es común dividir la UI en componentes pequeños, cada uno encargado de una parte específica.

Ejemplo: Crear un componente Saludo y un componente App que lo utilice.

```javascript
    function Saludo(props) {
    return <h2>¡Hola, {props.nombre}!</h2>;
    }

    function App() {
    return (
        <div>
        <Saludo nombre="Mundo" />
        <Saludo nombre="React" />
        </div>
    );
    }

    export default App;
```

## 2.2 Props (Propiedades)
- **Props** (abreviatura de "properties") son el mecanismo mediante el cual los componentes de React pueden recibir datos de sus componentes padres.
Son similares a los parámetros de las funciones y permiten que los componentes sean dinámicos y reutilizables.
- Pasar Datos con Props
Puedes pasar cualquier tipo de dato como prop, incluyendo cadenas, números, arrays, objetos, e incluso funciones.


```javascript
function Saludo(props) {
  return <h2>¡Hola, {props.nombre}!</h2>;
}

function App() {
  return (
    <div>
      <Saludo nombre="Juan" />
      <Saludo nombre="María" />
      <Saludo nombre="Carlos" />
    </div>
  );
}
```

- Props por Defecto y Validación
```javascript
import PropTypes from 'prop-types';

function Saludo(props) {
  return <h2>¡Hola, {props.nombre}!</h2>;
}
// agrego por defecto si no le paso props
Saludo.defaultProps = {
  nombre: 'Amigo',
};
// me aseguro que sea tipo string
Saludo.propTypes = {
  nombre: PropTypes.string.isRequired,
};

function App() {
  return (
    <div>
      <Saludo />
    </div>
  );
}
```


## 2.3 Ejercicio Práctico
Crear un Componente Greeting
Vamos a crear un componente Greeting que reciba un nombre como prop y lo muestre en la pantalla.

- Crea un archivo nuevo en src/components/Greeting/Greeting.js.
- normalmente guardamos los componentes de la siguiente manera , con su css para sus estilos
```
src/
├── components/
│   ├── Greeting/
│   │   ├── Greeting.js
│   │   └── Greeting.css
```
Añade el siguiente código:
```javascript
import React from 'react';

function Greeting(props) {
  return <h1>¡Hola, {props.name}!</h1>;
}

export default Greeting;
```

# Clase 4: Manejo de Eventos y Formularios en React

## 4.1 Manejo de Eventos en React

### ¿Qué son los Eventos en React?

- Los eventos en React son similares a los eventos en el DOM, pero se manejan de manera diferente.

- Ahora , si estas mariado de que es el DOM , te lo explico en 2 seg , pero para que entiendas el DOM vendria a ser la estructura HTML y los Eventos de DOM son predeterminados para HTML 

### ¿Qué es el DOM?
DOM (Document Object Model): Piensa en el DOM como la "estructura" que el navegador crea a partir del HTML de tu página web. Es como un mapa de la página web que permite a JavaScript interactuar con los elementos HTML , como: 
```
<div>, <button>, <p>, etc 
```

### Eventos en el DOM
- Eventos en el DOM: Cuando trabajas con el DOM, puedes usar métodos como addEventListener, onclick, removeEventListener, etc para escuchar y manejar eventos. 
- Por ejemplo, puedes hacer que un botón muestre un mensaje cuando se hace clic en él usando addEventListener.

``` javascript
document.querySelector('button').addEventListener('click', function() {
  alert('¡Botón clickeado!');
});
```

### Eventos en React
- Eventos en React: En React, los eventos se manejan de una manera más simple y elegante. En lugar de usar métodos como addEventListener, pasas funciones directamente como propiedades (props) a tus componentes. 
- React se encarga de conectar estos manejadores de eventos con los eventos correspondientes en el DOM.
``` javascript
Copy code
import React from 'react';

function Boton() {
  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return (
    <button onClick={handleClick}>
      Haz clic aquí
    </button>
  );
}

export default Boton;
```

### Resumen Simplificado
- DOM: La estructura interna del HTML que el navegador usa para mostrar la página y permitir que JavaScript interactúe con ella.
- Eventos en el DOM: Usas métodos como addEventListener para manejar eventos (ej., clics en botones).
- Eventos en React: Usas propiedades (props) en componentes para manejar eventos, y React se encarga de lo demás.



### Eventos Formulario
- Para manejar eventos en formularios, como el envío de datos o la entrada del usuario, se usan eventos como onChange, onSubmit, etc.

```javascript
import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nombre enviado: ${nombre}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
```

## 4.2 Formularios en React
- En React, los formularios se controlan mediante el estado del componente.
- Los valores de los inputs se almacenan en el estado y se actualizan mediante eventos.
#### Controlando Formularios

```javascript
import React, { useState } from 'react';

function FormularioControlado() {
  const [inputs, setInputs] = useState({
    nombre: '',
    email: ''
  });
  // esto quedaria asi en primera instancia
  // inputs={
  //   nombre: '', <- vamos a meter el string aca
  //   email: '' <- vamos a controlar este
  // }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };
  // si te confunde un poco lo podemos ver asi
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputs((prevInputs) => {
  //     console.log('Estado anterior:', prevInputs);
  
  //     // Retornamos el nuevo estado actualizando la propiedad correspondiente
  //     return {
  //       ...prevInputs,
  //       [name]: value
  //     };
  //   });
  // };

  // Explicacion
  // setInputs((prevInputs) => {...}):
  // Aquí, setInputs maneja un estado que es un objeto con múltiples propiedades (por ejemplo, email, nombre).
  // prevInputs es el estado anterior..
  // Cuando tienes varios campos en un formulario, necesitas actualizar solo una parte del estado (por ejemplo, solo el campo email), sin perder los otros campos (por ejemplo, nombre).
  // prevInputs te da el estado anterior del objeto inputs completo antes de realizar la actualización. Utilizas el operador spread (...) para copiar el contenido de prevInputs y luego solo modificas la parte que necesitas cambiar ([name]: value).

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nombre: ${inputs.nombre}\nEmail: ${inputs.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={inputs.nombre}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioControlado;
```

## 4.3 Ejercicio Práctico
### Crear un Formulario de Registro
Vamos a crear un componente Registro que permita a los usuarios ingresar su nombre, email y una contraseña. El formulario debe mostrar un mensaje de confirmación al enviar los datos.

1. Crea un componente llamado Registro.js.

2. Intenta darle un poco de diseño

3. Respuesta:
```javascript
import React, { useState } from 'react';

function Registro() {
  const [inputs, setInputs] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Registro Exitoso\nNombre: ${inputs.nombre}\nEmail: ${inputs.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={inputs.nombre}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Registro;

```
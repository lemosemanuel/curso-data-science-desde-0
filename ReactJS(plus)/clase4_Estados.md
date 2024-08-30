# Clase 3: Estado y Ciclo de Vida de los Componentes en React

## 3.1 Introducción al Estado (State) en React

### ¿Qué es el Estado?

- El **estado** en React es un objeto que almacena datos que pueden cambiar a lo largo del ciclo de vida de un componente.
- A diferencia de las props, el estado es manejado internamente por el componente y puede cambiar en respuesta a eventos de usuario, solicitudes de datos, etc.

### Uso del Estado en Componentes de Función con Hooks

- React introdujo los **Hooks** en la versión 16.8, permitiendo que los componentes de función puedan tener estado.
- El hook más común para manejar el estado es `useState`.

ejercicio: create un nuevo componente llamado Contador
recorda que la arquitectura de las carpetas son asi ..
```
src/
├── components/
│   ├── Contador/
│   │   ├── Contador.js
```
y llamado en App.js

```javascript
  import React, { useState } from 'react';

  function Contador() {
    // Declarar una variable de estado llamada "count" e inicializarla en 0
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Has hecho clic {count} veces</p>
        <button onClick={() => setCount(count + 1)}>
          Haz clic aquí
        </button>
      </div>
    );
  }

  export default Contador;
```
- En este ejemplo, el estado count se inicializa en 0. Cada vez que se hace clic en el botón, setCount actualiza el estado incrementándolo en 1.


## 3.2 Ciclo de Vida de un Componente
### Fases del Ciclo de Vida
El ciclo de vida de un componente React se puede dividir en tres fases:
- Montaje: Cuando el componente se crea e inserta en el DOM.
- Actualización: Cuando el estado o las props cambian y el componente se vuelve a renderizar.
- Desmontaje: Cuando el componente se elimina del DOM.

### Uso del Hook useEffect en Componentes de Función

En componentes de función, el hook useEffect reemplaza la funcionalidad de los métodos de ciclo de vida.

- useEffect se ejecuta después de cada renderizado

``` javascript
import React, { useState, useEffect } from 'react';

function EjemploEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Has hecho clic ${count} veces`);

    // Cleanup opcional
    return () => {
      console.log('El efecto se limpia.');
    };
  }, [count]);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}

export default EjemploEffect;
```


## 3.3 Ejercicio Práctico
Crear un Temporizador con Estado y Efecto
Vamos a crear un componente Temporizador que cuente el tiempo desde que el componente se monta y muestre el tiempo transcurrido.

Crea un archivo nuevo Componente llamado Temporizador.js

Respuesta:
``` javascript
import React, { useState, useEffect } from 'react';

function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);

    // Cleanup
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <p>Tiempo transcurrido: {segundos} segundos</p>
    </div>
  );
}

export default Temporizador;
```
# ¿Qué es useEffect?
useEffect es un hook que te permite ejecutar código adicional después de que React haya actualizado el DOM. Se utiliza para manejar efectos secundarios en los componentes, como:

- Realizar solicitudes a APIs. (ya veremos que es)
- Configurar suscripciones a servicios (como WebSockets).
- Manipular directamente el DOM.
- Ejecutar lógica que deba ocurrir como respuesta a cambios en el estado o en las props.

En términos simples, useEffect es como decirle a React: "Después de que hayas hecho esta actualización en el DOM, quiero que ejecutes este código."

## Sintaxis Básica de useEffect
```javascript
useEffect(() => {
  // Código que se ejecuta después de que el componente se ha renderizado
});
```

un ejemplo claro seria
Este es el caso más sencillo. Queremos ejecutar algún código solo una vez, cuando el componente se monta (es decir, la primera vez que aparece en la pantalla).
``` javascript
import React, { useEffect } from 'react';

function Bienvenida() {
  useEffect(() => {
    console.log('Componente montado!');
  }, []); // El array vacío significa que solo se ejecuta una vez al montar el componente

  return <h1>Bienvenido a mi sitio!</h1>;
}

export default Bienvenida;
```


hagamos algo más complejo
```javascript
import React, { useState, useEffect } from 'react';

function Reloj() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => clearInterval(intervalo); // Limpia el intervalo al desmontar el componente
  }, []); // Solo se ejecuta una vez al montar el componente
  // si quiero que se ejecute una sola vez , puedo poner dentro del [] una variable por ejemplo [nombre] lo que hace que solo se ejecute cuando nombre cambie

  return <h1>Segundos: {segundos}</h1>;
}

export default Reloj;
```
un ejemplo de que solo se ejecute una vez 
```javascript
import React, { useState, useEffect } from 'react';

function BuscarUsuario({ usuarioId }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data));
  }, [usuarioId]); // Este efecto se ejecuta cada vez que `usuarioId` cambia

  if (!usuario) {
    return <p>Cargando usuario...</p>;
  }

  return (
    <div>
      <h2>{usuario.name}</h2>
      <p>Email: {usuario.email}</p>
    </div>
  );
}

export default BuscarUsuario;
```

### Ejemplo Avanzado: Escuchar Eventos de Teclado

```javascript
import React, { useState, useEffect } from 'react';

function EscucharTecla() {
  const [teclaPresionada, setTeclaPresionada] = useState(null);

  useEffect(() => {
    const manejarTecla = (event) => {
      setTeclaPresionada(event.key);
    };

    window.addEventListener('keydown', manejarTecla);

    return () => {
      window.removeEventListener('keydown', manejarTecla); // Limpiamos el listener al desmontar
    };
  }, []);

  return (
    <div>
      <h1>Presiona una tecla</h1>
      {teclaPresionada && <p>Tecla presionada: {teclaPresionada}</p>}
    </div>
  );
}

export default EscucharTecla;
```

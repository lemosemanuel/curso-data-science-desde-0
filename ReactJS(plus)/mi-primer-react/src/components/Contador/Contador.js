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
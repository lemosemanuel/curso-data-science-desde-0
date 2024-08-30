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
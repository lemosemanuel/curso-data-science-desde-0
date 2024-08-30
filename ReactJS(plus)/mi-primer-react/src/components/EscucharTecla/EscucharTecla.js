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

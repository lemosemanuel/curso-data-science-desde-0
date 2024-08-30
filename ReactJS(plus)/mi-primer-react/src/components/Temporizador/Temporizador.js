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
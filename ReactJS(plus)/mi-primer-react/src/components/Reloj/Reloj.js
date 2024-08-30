import React, { useState, useEffect } from 'react';

function Reloj() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => clearInterval(intervalo); // Limpia el intervalo al desmontar el componente
  }, []); // Solo se ejecuta una vez al montar el componente

  return <h1>Segundos: {segundos}</h1>;
}

export default Reloj;
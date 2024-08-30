import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');

  const handleChange = (event) => {
    // console.log(event); // aca podes ver que el onChange devuelve un Objeto y tengo que ir a buscar event['target']['value'] 
    setNombre(event.target.value); // aca actualizamos nombre que luego ira a value={nombre}
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // esto previene que la pagina vuelva a su valor por defecto (en pocas palabras se cargara de nuevo la pagina y el box quedaria vacio)
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
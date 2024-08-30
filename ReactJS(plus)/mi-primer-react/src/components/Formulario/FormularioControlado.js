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

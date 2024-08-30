import React, { useState } from 'react';
import './Registro.css'; // Asegúrate de importar el CSS

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

import React from 'react';
import './Greeting.css'; // Importa los estilos si los hay

function Greeting(props) {
  return <h1 className="greeting">¡Hola, {props.name}!</h1>;
}

export default Greeting;
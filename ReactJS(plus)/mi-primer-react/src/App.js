import PropTypes from 'prop-types';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import Contador from './components/Contador/Contador';
import EjemploEffect from './components/EjemploEffect/EjemploEffect';
import Temporizador from './components/Temporizador/Temporizador';
import Formulario from './components/Formulario/Formulario';
import FormularioControlado from './components/Formulario/FormularioControlado'
import Registro from './components/Registro/Registro'
import Reloj from './components/Reloj/Reloj'
import EscucharTecla from './components/EscucharTecla/EscucharTecla'
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton/ThemeToggleButton'; // Un componente para cambiar el tema
import ThemeDisplay from './components/ThemeDisplay/ThemeDisplay'; // Un componente para mostrar el tema actual



function Saludo(props) {
  return <h2>¡Hola, {props.nombre}!</h2>;
}
// agrego por defecto si no le paso props
Saludo.defaultProps = {
  nombre: 2,
};

// me aseguro que sea tipo string
Saludo.propTypes = {
  nombre: PropTypes.string.isRequired,
};



function App() {
  return (
    <div>
      {/* <Saludo /> */}
      {/* <Greeting name="Ema lemos"></Greeting> */} {/* clase 3 */}
      {/* <Contador></Contador> */} {/* clase 4 */}
      {/* <EjemploEffect></EjemploEffect> */} {/* clase 4 */}
      {/* <Temporizador></Temporizador> */} {/* clase 4 */}
      {/* <Formulario></Formulario> */} {/* clase 5 */}
      {/* <FormularioControlado></FormularioControlado> */} {/* clase 5 */}
      {/* <Registro></Registro>  */} {/* clase 5 */}
      {/* <Reloj></Reloj> */}  {/* clase 6 */}
      {/* <EscucharTecla></EscucharTecla>  */}{/* clase 6 */}
      <ThemeProvider> {/* Envolvemos los componentes en ThemeProvider */}
        <div>
          <h1>Aplicación con Contexto</h1>
          <ThemeToggleButton /> {/* Botón para cambiar el tema */}
          <ThemeDisplay /> {/* Muestra el tema actual */}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;


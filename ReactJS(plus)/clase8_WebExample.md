# Clase 5: Context API y Manejo del Estado Global en React
## 5.1 Introducción a la Context API
La Context API de React es una forma de manejar el estado global y compartirlo entre componentes sin tener que pasar props a través de muchos niveles. Es útil para manejar datos que necesitan ser accesibles en muchas partes de la aplicación, como la autenticación del usuario, la configuración del tema, etc.

## 5.2 Crear un Contexto
Para usar la Context API, necesitas crear un contexto con React.createContext(). Luego, puedes proporcionar y consumir este contexto en los componentes.

### Paso 1: Crear el Contexto

Primero, crea un archivo para tu contexto, por ejemplo, ThemeContext.js.

```
src/
│
├── components/
│
├── contexts/
│   └── ThemeContext.js
```

```javascript
import React, { createContext, useState } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Crear un proveedor de contexto
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
```
En este código:
- ThemeContext: Se crea el contexto.
- ThemeProvider: Un componente que envuelve a los componentes hijos y proporciona el contexto. En este caso, maneja un estado de theme y una función toggleTheme para cambiar el tema.

### Paso 2: Usar el Contexto en App.js

Envuelve tu aplicación con el ThemeProvider para que todos los componentes dentro de App puedan acceder al contexto.

Quedaria algo asi 
```javascript
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton'; // Un componente para cambiar el tema
import ThemeDisplay from './ThemeDisplay'; // Un componente para mostrar el tema actual

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Aplicación con Contexto</h1>
        <ThemeToggleButton />
        <ThemeDisplay />
      </div>
    </ThemeProvider>
  );
}

export default App;
```

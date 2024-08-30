import React, { createContext, useState } from 'react';

// Creamos el contexto
const ThemeContext = createContext();

// Proveedor del contexto
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado para manejar el tema

  // Función para alternar entre los temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // El proveedor pasa el valor del tema y la función para cambiarlo
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Exportamos el contexto y el proveedor para que se puedan usar en otros archivos
export { ThemeContext, ThemeProvider };
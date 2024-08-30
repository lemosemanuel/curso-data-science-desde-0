import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'oscuro' : 'claro'} modo
    </button>
  );
}

export default ThemeToggleButton;



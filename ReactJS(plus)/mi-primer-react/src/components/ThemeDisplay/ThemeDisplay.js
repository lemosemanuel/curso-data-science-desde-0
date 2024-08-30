import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function ThemeDisplay() {
  const { theme } = useContext(ThemeContext);

  return <p>El tema actual es: {theme}</p>;
}

export default ThemeDisplay;
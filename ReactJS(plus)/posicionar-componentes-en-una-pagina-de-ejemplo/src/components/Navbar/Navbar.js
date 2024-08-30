// src/components/Navbar/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importa Link

const Navbar = ({ isOpen }) => {
  return (
    <NavContainer isOpen={isOpen}>
      <NavItem to="/">Productos</NavItem>
      <NavItem to="/about">Nosotros</NavItem>
      <NavItem to="/contact">Contacto</NavItem>
      {/* Añadir más opciones */}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    width: 100%;
    background: #444;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    padding: 1rem;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #ff8ee4;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #fbb1fc;
  }
`;
export default Navbar;

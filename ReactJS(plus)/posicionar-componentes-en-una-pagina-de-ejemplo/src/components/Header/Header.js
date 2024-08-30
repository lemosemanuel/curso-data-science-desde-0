import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>EmaLemos AI</Logo>
      <NavToggle onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </NavToggle>
      <Navbar isOpen={menuOpen} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: #ff8ee4;
  position: relative;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavToggle = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;

// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'; // Ajusta la ruta según tu estructura

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <Title>Redes Sociales</Title>
        <SocialMediaLinks />
      </Column>
      <Column>
        <Title>Información</Title>
        <FooterLink href="#">Acerca de</FooterLink>
        <FooterLink href="#">Términos de Servicio</FooterLink>
      </Column>
      <Column>
        <Title>Contacto</Title>
        <FooterLink href="#">Email</FooterLink>
        <FooterLink href="#">Teléfono</FooterLink>
      </Column>
      <Column>
        <Title>Más Información</Title>
        <FooterLink href="#">Blog</FooterLink>
        <FooterLink href="#">FAQs</FooterLink>
      </Column>
      <BottomSection>
        <PolicyLink href="#">Políticas de Privacidad</PolicyLink>
      </BottomSection>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomSection = styled.div`
  text-align: center;
  padding-top: 2rem;
`;

const PolicyLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;

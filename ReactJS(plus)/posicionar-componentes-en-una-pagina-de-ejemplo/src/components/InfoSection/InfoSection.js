// src/components/InfoSection/InfoSection.js
import React from 'react';
import styled from 'styled-components';

const InfoSection = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <Title>EmaLemos AI: Gestión Inteligente para Empresas</Title>
        <Description>Optimiza la gestión de tu empresa y equipo con EmaLemos AI. Desde la planificación hasta la ejecución, simplifica cada paso con la ayuda de inteligencia artificial.</Description>
        <List>
          <ListItem><Icono>🤖</Icono><strong>Tiempo:</strong>Ahorra tiempo automatizando tareas repetitivas.</ListItem>
          <ListItem><Icono>📊</Icono><strong>Datos:</strong> Toma decisiones informadas con análisis predictivos.</ListItem>
          <ListItem><Icono>📅</Icono><strong>Gestión:</strong> Mantén a tu equipo alineado con herramientas de planificación avanzada.</ListItem>
        </List>
        <ButtonContainer>
          <Button className="demo-btn">Obtener Demo</Button>
          <Button className="start-btn">Comenzar Ahora</Button>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer>
        <img src="https://media.licdn.com/dms/image/v2/D4E12AQFWx7IHc6Mwvw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694018980042?e=2147483647&v=beta&t=lUCoSeYyIpKHB_4TI1fF6oV6RHloeKLYOTok_mH2wcs" alt="EmaLemos AI en acción" />
      </ImageContainer>
    </SectionContainer>
  );
};
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  margin-right: 1rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #666;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #444;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Icono = styled.span`
  margin-right: 0.5rem;
  font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-weight: bold;

  &.demo-btn {
    background-color: #333;
  }

  &.start-btn {
    background-color: #007bff;
  }

  &:hover {
    background-color: #555;
  }

  &:active {
    background-color: #444;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-left: 1rem;
  
  img {
    width: 100%;
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 0;
  }
`;

export default InfoSection;

import React from 'react';
import styled from 'styled-components';

const HorizontalScrollSection = () => {
  return (
    <ScrollContainer>
      <ScrollContent>
        <ScrollBox>Cuadro 1</ScrollBox>
        <ScrollBox>Cuadro 2</ScrollBox>
        <ScrollBox>Cuadro 3</ScrollBox>
        {/* Más cuadros */}
      </ScrollContent>
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  overflow-x: auto;
  padding: 1rem 0;
`;

const ScrollContent = styled.div`
  display: flex;
  gap: 1rem;
`;

const ScrollBox = styled.div`
  flex: 0 0 auto;
  background: #ddd;
  padding: 2rem;
  border-radius: 10px;
  min-width: 200px;
`;

export default HorizontalScrollSection;

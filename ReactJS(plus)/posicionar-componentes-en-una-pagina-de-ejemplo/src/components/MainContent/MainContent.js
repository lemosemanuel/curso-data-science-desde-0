import React from 'react';
import styled from 'styled-components';
import InfoSection from '../InfoSection/InfoSection';
import HorizontalScrollSection from '../HorizontalScrollSection/HorizontalScrollSection';

const MainContent = () => {
  return (
    <MainContainer>
      <InfoSection />
      <HorizontalScrollSection />
      <InfoSection /> {/* Repetimos la primera sección */}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 2rem;
`;

export default MainContent;

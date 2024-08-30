import React from 'react';
import styled from 'styled-components';

const SocialMediaLinks = () => {
  return (
    <LinksContainer>
      <SocialLink href="#">Facebook</SocialLink>
      <SocialLink href="#">Twitter</SocialLink>
      <SocialLink href="#">Instagram</SocialLink>
      {/* Agrega más enlaces según sea necesario */}
    </LinksContainer>
  );
};

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default SocialMediaLinks;

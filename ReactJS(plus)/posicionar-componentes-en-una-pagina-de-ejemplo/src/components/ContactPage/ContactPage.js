import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 50px;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 15px;
  font-size: 18px;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <Title>Contacta con Nosotros</Title>
      <Description>Estamos aquí para ayudarte. Completa el formulario a continuación o envíanos un correo directamente.</Description>
      <Form>
        <Input type="text" placeholder="Nombre" required />
        <Input type="email" placeholder="Correo Electrónico" required />
        <TextArea rows="5" placeholder="Mensaje" required></TextArea>
        <Button type="submit">Enviar Mensaje</Button>
      </Form>
    </ContactContainer>
  );
};

export default ContactPage;

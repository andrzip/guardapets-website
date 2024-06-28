import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, GeneralContainer, TextContainer, FormContainer, Title, Subtitle, Input, TextLink, StyledLink, Button, ButtonGroup } from './SigninStyles';

const Index = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    if (!email || !password) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      const response = await axios.post('https://guardapet-api.vercel.app/users/signin', { email, password });
      alert('Acesso autorizado!');
      navigate('/');
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <Container>
      <GeneralContainer>

        <TextContainer>
          <Title>Fazer login</Title>
          <Subtitle>Entre com sua conta GuardaPets</Subtitle>
        </TextContainer>

        <FormContainer>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <TextLink>
            Esqueceu sua senha? <StyledLink to="/">Redefinir senha</StyledLink>
          </TextLink>
          <ButtonGroup>
            <Button href='/signup'>Criar uma conta</Button>
            <Button primary onClick={handleSignin}>Entrar</Button>
          </ButtonGroup>
        </FormContainer>

      </GeneralContainer>
    </Container>
  );
};

export default Index;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Services/Api/ApiConfig";
import {
  Container,
  GeneralContainer,
  TextContainer,
  FormContainer,
  Title,
  Subtitle,
  Input,
  TextLink,
  StyledLink,
  Button,
  ButtonGroup,
} from "./SigninStyles";
import { AuthContext } from "../../Context/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");

  const handleSignin = async () => {
    if (!user_email || !user_password) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await Api.post("/users/signin", {
        user_email,
        user_password,
      });

      if (response.status === 200) {
        alert(response.data.message);
        login();
        navigate("/");
      } else {
        alert("Falha ao realizar o login. Tente novamente.");
      }
    } catch (error) {
      alert("Credenciais de login incorretas");
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
            value={user_email}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={user_password}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <TextLink>
            Esqueceu sua senha? <StyledLink to="/">Redefinir senha</StyledLink>
          </TextLink>
          <ButtonGroup>
            <Button href="/signup">Criar uma conta</Button>
            <Button primary onClick={handleSignin}>
              Entrar
            </Button>
          </ButtonGroup>
        </FormContainer>
      </GeneralContainer>
    </Container>
  );
};

export default Index;

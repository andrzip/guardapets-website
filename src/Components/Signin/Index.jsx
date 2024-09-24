import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Services/ApiConfig";
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

const Signin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignin = async () => {
    const { user_email, user_password } = formData;

    if (!user_email || !user_password) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await Api.post("/users/signin", { user_email, user_password });

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
            name="user_email"
            placeholder="E-mail"
            value={formData.user_email}
            onChange={handleInputChange}
            required
          />
          <Input
            type="password"
            name="user_password"
            placeholder="Senha"
            value={formData.user_password}
            onChange={handleInputChange}
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

export default Signin;

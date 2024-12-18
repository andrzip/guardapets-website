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
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignin = async () => {
    const { user_email, user_password } = formData;
  
    if (!(user_email && user_password)) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await Api.post("/users/signin", { user_email, user_password });
  
      if (response.status === 200) {
        alert(response.data.message);
        login();
        navigate("/");
      } else {
        alert("Falha ao realizar o login. Tente novamente.");
      }
    } catch (err) {
      console.log(err);
      alert("Falha ao realizar o login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const renderInput = (type, name, placeholder, additionalProps = {}) => (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleInputChange}
      {...additionalProps}
    />
  );

  return (
    <Container>
      <GeneralContainer>
        <TextContainer>
          <Title>Fazer login</Title>
          <Subtitle>Entre com sua conta GuardaPets</Subtitle>
        </TextContainer>
        <FormContainer>
          {renderInput("email", "user_email", "E-mail")}
          {renderInput("password", "user_password", "Senha")}
          <TextLink>
            Esqueceu sua senha? <StyledLink to="/">Redefinir senha</StyledLink>
          </TextLink>
          <ButtonGroup>
            <StyledLink to="/signup">
              <Button>Criar uma conta</Button>
            </StyledLink>
            <Button primary onClick={handleSignin} disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </ButtonGroup>
        </FormContainer>
      </GeneralContainer>
    </Container>
  );
};

export default Signin;

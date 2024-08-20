import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Services/Api/ApiConfig";
import {
  Container,
  FormWrapper,
  Title,
  FormRow,
  Input,
  Button,
  TextLink,
  StyledLink,
} from "./SignupStyles";

const Signup = () => {
  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");
  const [user_phone, setUserPhone] = useState("");
  const [user_doc, setUserDoc] = useState("");
  const [user_birthdate, setUserBirthdate] = useState("");
  const [user_address, setUserAddress] = useState("");
  const [user_state, setUserState] = useState("");
  const [user_city, setUserCity] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!user_email || !user_password) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const response = await Api.post("/users/signup", {
        user_name,
        user_email,
        user_password,
        user_phone,
        user_doc,
        user_birthdate,
        user_address,
        user_state,
        user_city,
      });
      if (response.status !== 200) throw new Error("Erro ao cadastrar usuário");
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Crie sua Conta</Title>
        <FormRow>
          <Input
            type="text"
            placeholder="Nome completo"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
          />
        </FormRow>
        <FormRow>
          <Input
            type="email"
            placeholder="E-mail"
            value={user_email}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Input
            type="tel"
            placeholder="Celular Whatsapp"
            value={user_phone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Input
            type="text"
            placeholder="RG/CPF"
            value={user_doc}
            onChange={(e) => setUserDoc(e.target.value)}
          />
          <Input
            type="date"
            value={user_birthdate}
            onChange={(e) => setUserBirthdate(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Input
            type="text"
            placeholder="Endereço completo"
            value={user_address}
            onChange={(e) => setUserAddress(e.target.value)}
            fullWidth
          />
        </FormRow>
        <FormRow>
          <Input
            type="text"
            placeholder="Estado"
            value={user_state}
            onChange={(e) => setUserState(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Cidade"
            value={user_city}
            onChange={(e) => setUserCity(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Input
            type="password"
            placeholder="Senha"
            value={user_password}
            onChange={(e) => setUserPassword(e.target.value)}
            fullWidth
          />
        </FormRow>
        <TextLink>
          Ao clicar em Cadastrar, você concorda com nossos{" "}
          <StyledLink to="/">
            Termos, Política de Privacidade e Política de Cookies.
          </StyledLink>
        </TextLink>
        <Button onClick={handleSignup}>Cadastrar</Button>
      </FormWrapper>
    </Container>
  );
};

export default Signup;

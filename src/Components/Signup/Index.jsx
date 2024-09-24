import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Services/ApiConfig";
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
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    user_phone: "",
    user_doc: "",
    user_birthdate: "",
    user_address: "",
    user_state: "",
    user_city: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return Object.values(formData).every((field) => field);
  };

  const handleSignup = async () => {
    if (!validateForm()) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const response = await Api.post("/users/signup", formData);
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
            name="user_name"
            placeholder="Nome completo"
            value={formData.user_name}
            onChange={handleChange}
            fullWidth
          />
        </FormRow>
        <FormRow>
          <Input
            type="email"
            name="user_email"
            placeholder="E-mail"
            value={formData.user_email}
            onChange={handleChange}
          />
          <Input
            type="tel"
            name="user_phone"
            placeholder="Celular Whatsapp"
            value={formData.user_phone}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Input
            type="text"
            name="user_doc"
            placeholder="RG/CPF"
            value={formData.user_doc}
            onChange={handleChange}
          />
          <Input
            type="date"
            name="user_birthdate"
            value={formData.user_birthdate}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Input
            type="text"
            name="user_address"
            placeholder="Endereço completo"
            value={formData.user_address}
            onChange={handleChange}
            fullWidth
          />
        </FormRow>
        <FormRow>
          <Input
            type="text"
            name="user_state"
            placeholder="Estado"
            value={formData.user_state}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="user_city"
            placeholder="Cidade"
            value={formData.user_city}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Input
            type="password"
            name="user_password"
            placeholder="Senha"
            value={formData.user_password}
            onChange={handleChange}
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

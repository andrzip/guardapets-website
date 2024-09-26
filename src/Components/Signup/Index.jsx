import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
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
    user_cpf: "",
    user_birthdate: "",
    user_address: "",
    user_state: "",
    user_city: "",
    user_cep: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = () => {
    return Object.values(formData).every(Boolean);
  };

  const submitSignupForm = async () => {
    if (!isFormValid()) {
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
          <InputMask
            mask="(99) 99999-9999"
            value={formData.user_phone}
            onChange={handleChange}
          >
            {(inputProps) => (
              <Input
                {...inputProps}
                type="tel"
                name="user_phone"
                placeholder="Celular Whatsapp"
              />
            )}
          </InputMask>
        </FormRow>
        <FormRow>
          <InputMask
            mask="999.999.999-99"
            value={formData.user_cpf}
            onChange={handleChange}
          >
            {(inputProps) => (
              <Input
                {...inputProps}
                type="text"
                name="user_cpf"
                placeholder="CPF"
              />
            )}
          </InputMask>
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
          <InputMask
            mask="99999-999"
            value={formData.user_cep}
            onChange={handleChange}
          >
            {(inputProps) => (
              <Input
                {...inputProps}
                type="text"
                name="user_cep"
                placeholder="CEP"
              />
            )}
          </InputMask>
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
        <Button onClick={submitSignupForm}>Cadastrar</Button>
      </FormWrapper>
    </Container>
  );
};

export default Signup;

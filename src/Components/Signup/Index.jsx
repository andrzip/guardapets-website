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

  const [errors, setErrors] = useState({}); // Adicionando estado para os erros
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {}; // Objeto para armazenar os erros

    // Verifica se algum campo está vazio
    for (const key in formData) {
      if (formData[key] === "") {
        newErrors[key] = "Este campo é obrigatório"; // Adiciona erro ao campo
      }
    }

    setErrors(newErrors); // Atualiza os erros no estado

    return Object.keys(newErrors).length === 0; // Se não houver erros, retorna true
  };

  const submitSignupForm = async () => {
    if (!validateForm()) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      const response = await Api.post("/users/signup", formData);
      if (response.status !== 200) throw new Error("Erro ao cadastrar usuário");

      alert("Usuário cadastrado com sucesso!");
      setFormData({
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
      navigate("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderInput = (type, name, placeholder, additionalProps = {}) => (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      value={formData[name]}
      hasError={!!errors[name]} // Passa o estado do erro para o estilo
      {...additionalProps}
    />
  );

  const renderMaskedInput = (mask, name, placeholder) => (
    <InputMask mask={mask} value={formData[name]} onChange={handleChange}>
      {(inputProps) => renderInput("text", name, placeholder, inputProps)}
    </InputMask>
  );

  return (
    <Container>
      <FormWrapper>
        <Title>Crie sua Conta</Title>
        {renderInput("text", "user_name", "Nome completo", { fullWidth: true })}
        <FormRow>
          {renderInput("email", "user_email", "E-mail")}
          {renderMaskedInput("(99) 99999-9999", "user_phone", "Celular Whatsapp")}
        </FormRow>
        <FormRow>
          {renderMaskedInput("999.999.999-99", "user_cpf", "CPF")}
          {renderInput("date", "user_birthdate", "Data de Nascimento")}
        </FormRow>
        {renderInput("text", "user_address", "Endereço completo", { fullWidth: true })}
        <FormRow>
          {renderInput("text", "user_state", "Estado")}
          {renderInput("text", "user_city", "Cidade")}
          {renderMaskedInput("99999-999", "user_cep", "CEP")}
        </FormRow>
        {renderInput("password", "user_password", "Senha", { fullWidth: true })}
        <TextLink>
          Ao clicar em Cadastrar, você concorda com nossos{" "}
          <StyledLink to="/">
            Termos, Política de Privacidade e Política de Cookies.
          </StyledLink>
        </TextLink>
        <Button onClick={submitSignupForm} disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default Signup;

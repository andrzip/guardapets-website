import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { Api } from "../../Services/ApiConfig";
import { z } from "zod"; // Importando o Zod
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

// Definindo o esquema de validação usando Zod
const formSchema = z.object({
  user_name: z.string().nonempty("O campo 'nome' é obrigatório"),
  user_email: z.string().email("Insira um e-mail válido").nonempty("O campo 'e-mail' é obrigatório"),
  user_password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").nonempty("O campo 'senha' é obrigatório"),
  user_phone: z.string().nonempty("O campo 'celular' é obrigatório"),
  user_cpf: z.string()
    .nonempty("O campo 'CPF' é obrigatório")
    .length(14, "O CPF deve ter exatamente 14 caracteres"),
  user_birthdate: z.string().nonempty("O campo 'data de nascimento' é obrigatório"),
  user_address: z.string().nonempty("O campo 'endereço' é obrigatório"),
  user_state: z.string().nonempty("O campo 'estado' é obrigatório"),
  user_city: z.string().nonempty("O campo 'cidade' é obrigatório"),
  user_cep: z.string()
    .nonempty("O campo 'CEP' é obrigatório")
    .min(8, "O CEP deve ter pelo menos 8 caracteres")
    .max(9, "O CEP deve ter no máximo 9 caracteres"),
});

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

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      return true;
    } catch (error) {
      alert(error.errors[0].message);
      return false;
    }
  };

  const submitSignupForm = async () => {
    if (!validateForm()) return;

    try {
      const response = await Api.post("/users/signup", formData);
      if (response.status !== 200) throw new Error("Erro ao cadastrar usuário");
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // Funções auxiliares para simplificar a renderização de campos
  const renderInput = (type, name, placeholder, additionalProps = {}) => (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      {...additionalProps}
    />
  );

  const renderMaskedInput = (mask, name, placeholder) => (
    <InputMask
      mask={mask}
      value={formData[name]}
      onChange={handleChange}
    >
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
          {renderInput("date", "user_birthdate", "")}
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
        <Button onClick={submitSignupForm}>Cadastrar</Button>
      </FormWrapper>
    </Container>
  );
};

export default Signup;

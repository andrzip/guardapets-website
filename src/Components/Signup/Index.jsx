import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Dropdown
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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");
  const navigate = useNavigate();

  // Função para buscar as cidades de um estado usando a API do IBGE
  useEffect(() => {
    if (selectedUf === "0") return;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`;
    axios.get(url).then((response) => {
      setCities(response.data);
    });
  }, [selectedUf]);

  // Função para buscar os estados
  useEffect(() => {
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    axios.get(url).then((response) => {
      setUfs(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectUf = (e) => {
    setSelectedUf(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      user_state: e.target.value,
      user_city: "", // Limpar a cidade quando o estado mudar
    }));
  };

  const handleSelectCity = (e) => {
    setSelectedCity(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      user_city: e.target.value,
    }));
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => {
    const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return regex.test(phone);
  };
  const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]/g, "");
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf[10]);
  };
  const validateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    return m > 0 || (m === 0 && today.getDate() >= birthDate.getDate())
      ? age >= 20
      : age - 1 >= 20;
  };

  const validateForm = () => {
    const newErrors = {};

    for (const key in formData) {
      if (formData[key] === "") newErrors[key] = "Este campo é obrigatório";
    }

    if (!validateEmail(formData.user_email)) newErrors.user_email = "E-mail inválido";
    if (!validatePhone(formData.user_phone)) newErrors.user_phone = "Número inválido";
    if (!validateCPF(formData.user_cpf)) newErrors.user_cpf = "CPF inválido";
    if (!validateAge(formData.user_birthdate)) newErrors.user_birthdate = "Você deve ter pelo menos 20 anos";
    if (!formData.user_state) newErrors.user_state = "Estado é obrigatório";
    if (!formData.user_city) newErrors.user_city = "Cidade é obrigatória";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitSignupForm = async () => {
    if (!validateForm()) {
      alert("Verifique os campos e tente novamente.");
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
      hasError={!!errors[name]}
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
          {/* Dropdown de estados */}
          <Dropdown
            name="user_state"
            value={formData.user_state}
            onChange={handleSelectUf}
            className={`input ${errors.user_state ? "hasError" : ""}`}
          >
            <option value="">Selecione o Estado</option>
            {ufs.map((uf) => (
              <option key={uf.sigla} value={uf.sigla}>
                {uf.nome}
              </option>
            ))}
          </Dropdown>

          {/* Dropdown de cidades */}
          {formData.user_state && (
            <Dropdown
              name="user_city"
              value={formData.user_city}
              onChange={handleSelectCity}
              className={`input ${errors.user_city ? "hasError" : ""}`}
            >
              <option value="">Selecione a Cidade</option>
              {cities.map((city) => (
                <option key={city.id} value={city.nome}>{city.nome}</option>
              ))}
            </Dropdown>
          )}

          {renderMaskedInput("99999-999", "user_cep", "CEP")}
        </FormRow>
        {renderInput("password", "user_password", "Senha", { fullWidth: true })}
        <TextLink>
          Ao clicar em Cadastrar, você concorda com nossos{" "}
          <StyledLink to="/">Termos, Política de Privacidade e Política de Cookies.</StyledLink>
        </TextLink>
        <Button onClick={submitSignupForm} disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default Signup;

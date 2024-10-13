import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Services/ApiConfig";
import { z } from "zod";
import {
  Container,
  FormWrapper,
  Title,
  FormCol,
  FormRow,
  Input,
  Select,
  TextLink,
  StyledLink,
  Button,
} from "./DonateStyles";

// Schema de validação usando Zod
const formSchema = z.object({
  animal_name: z.string().nonempty("O campo 'nome' é obrigatório"),
  animal_age: z.string().nonempty("O campo 'idade' é obrigatório"),
  animal_gender: z.string().nonempty("O campo 'sexo' é obrigatório"),
  animal_type: z.string().nonempty("O campo 'tipo' é obrigatório"),
  animal_size: z.string().nonempty("O campo 'porte' é obrigatório"),
  animal_address: z.string().nonempty("O campo 'residência' é obrigatório"),
  animal_cep: z.string()
    .nonempty("O campo 'CEP' é obrigatório")
    .min(8, "O CEP deve ter pelo menos 8 caracteres")
    .max(9, "O CEP deve ter no máximo 9 caracteres"),
  animal_picurl: z.instanceof(File, { message: "O campo 'imagem' é obrigatório" }),
  animal_desc: z.string().nonempty("O campo 'descrição' é obrigatório"),
});

const Donate = () => {
  const [formData, setFormData] = useState({
    animal_name: "",
    animal_age: "",
    animal_gender: "",
    animal_type: "",
    animal_size: "",
    animal_address: "",
    animal_cep: "",
    animal_picurl: null,
    animal_desc: "",
  });

  const navigate = useNavigate();

  // Função para atualizar o estado do formulário
  const handleChange = ({ target: { name, value, files } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // Função para validar os dados do formulário
  const validateForm = () => {
    try {
      formSchema.parse(formData);
      return true;
    } catch (error) {
      alert(error.errors[0].message);
      return false;
    }
  };

  // Função para lidar com a doação
  const handleDonate = async () => {
    if (!validateForm()) return;

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await Api.post("/animals/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status !== 200) throw new Error("Erro ao doar animal");
      alert("Animal enviado para análise");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };


  // Funções auxiliares para simplificar a renderização de campos
  const renderInput = (type, name, placeholder, additionalProps = {}) => (
    <FormRow>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        {...additionalProps}
      />
    </FormRow>
  );

  const renderSelect = (name, placeholder, options) => (
    <FormRow>
      <Select name={name} onChange={handleChange} defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormRow>
  );

  return (
    <Container>
      <FormWrapper encType="multipart/form-data">
        <Title>Formulário de Doação</Title>
        <FormRow>
          <FormCol>
            {renderInput("text", "animal_name", "Nome")}
            {renderInput("text", "animal_age", "Idade", handleChange)}
            {renderSelect("animal_type", "Tipo", ["Cachorro", "Gato", "Ave", "Outro"])}
            {renderSelect("animal_gender", "Sexo", ["Macho", "Fêmea"])}
            {renderSelect("animal_size", "Porte", ["Pequeno", "Médio", "Grande"])}
            <FormRow style={{ display: "flex", gap: "10px" }}>
              {renderInput("text", "animal_address", "Residência")}
              {renderInput("text", "animal_cep", "CEP")}
            </FormRow>
            {renderInput("file", "animal_picurl", "Imagem", { accept: "image/*" })}
          </FormCol>
          <FormCol>
            <Input
              style={{ marginLeft: "10px" }}
              type="textarea"
              name="animal_desc"
              placeholder="Insira uma descrição sobre o animal..."
              value={formData.animal_desc}
              onChange={handleChange}
            />
          </FormCol>
        </FormRow>
        <TextLink>
          Ao clicar em Doar, você concorda com nossos{" "}
          <StyledLink to="/">Termos, Política de Privacidade e Política de Cookies.</StyledLink>
        </TextLink>
        <Button onClick={handleDonate}>Doar</Button>
      </FormWrapper>
    </Container>
  );
};

export default Donate;

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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const formSchema = z.object({
  animal_name: z.string().nonempty("O campo 'nome' é obrigatório"),
  animal_age: z.string().nonempty("O campo 'idade' é obrigatório"),
  animal_gender: z.string().nonempty("O campo 'sexo' é obrigatório"),
  animal_type: z.string().nonempty("O campo 'tipo' é obrigatório"),
  animal_size: z.string().nonempty("O campo 'porte' é obrigatório"),
  animal_picurl: z
    .instanceof(File, { message: "O campo 'imagem' é obrigatório" })
    .refine(
      (file) => ["image/jpeg", "image/png"].includes(file.type),
      "O arquivo deve ser uma imagem nos formatos JPG ou PNG."
    )
    .refine((file) => file.size <= MAX_FILE_SIZE, "A imagem deve ter no máximo 5MB."),
  animal_desc: z.string().nonempty("O campo 'descrição' é obrigatório"),
});

const Donate = () => {
  const [formData, setFormData] = useState({
    animal_name: "",
    animal_age: "",
    animal_gender: "",
    animal_type: "",
    animal_size: "",
    animal_picurl: null,
    animal_desc: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value, files } }) => {
    if (name === "animal_picurl" && files) {
      const file = files[0];
      if (file) {
        if (!["image/jpeg", "image/png"].includes(file.type)) {
          alert("Apenas arquivos JPG ou PNG são permitidos.");
          return;
        } else if (file.size > MAX_FILE_SIZE) {
          alert("A imagem deve ter no máximo 5MB.");
          return;
        }
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
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

      if (response.status !== 200) return alert("Erro ao doar animal");
      alert("Animal enviado para análise");
      navigate("/");
    } catch (err) {
      console.error("Erro ao doar animal:", err);
      return alert("Erro ao doar animal");
    }
  };

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
            {renderSelect("animal_age", "Idade", ["Filhote", "Adulto", "Idoso"])}
            {renderSelect("animal_type", "Tipo", ["Cachorro", "Gato", "Ave", "Outro"])}
            {renderSelect("animal_gender", "Sexo", ["Macho", "Fêmea"])}
            {renderSelect("animal_size", "Porte", ["Pequeno", "Médio", "Grande"])}
            {renderInput("file", "animal_picurl", "Imagem", { accept: "image/jpeg,image/png" })}
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

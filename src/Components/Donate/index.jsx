import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Services/ApiConfig";

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

const Donate = () => {
  const [formData, setFormData] = useState({
    animal_name: "",
    animal_age: "",
    animal_gender: "",
    animal_type: "",
    animal_size: "",
    animal_address: "",
    animal_picurl: null,
    animal_desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const isValid = Object.values(formData).every(
      (field) => field !== "" && field !== null
    );
    return isValid && formData.animal_picurl instanceof File;
  };

  const handleDonate = async () => {
    if (!validateForm()) {
      return alert("Preencha todos os campos corretamente");
    }

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

  return (
    <Container>
      <FormWrapper encType="multipart/form-data">
        <Title>Formulário de Doação</Title>
        <FormRow>
          <FormCol>
            <FormRow>
              <Input
                type="text"
                name="animal_name"
                placeholder="Nome"
                value={formData.animal_name}
                onChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <Input
                type="text"
                name="animal_age"
                placeholder="Idade"
                value={formData.animal_age}
                onChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <Select
                name="animal_type"
                value={formData.animal_type}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Tipo
                </option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Ave">Ave</option>
                <option value="Outro">Outro</option>
              </Select>
            </FormRow>
            <FormRow>
              <Select
                name="animal_gender"
                value={formData.animal_gender}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Sexo
                </option>
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
              </Select>
            </FormRow>
            <FormRow>
              <Select
                name="animal_size"
                value={formData.animal_size}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Porte
                </option>
                <option value="Pequeno">Pequeno</option>
                <option value="Médio">Médio</option>
                <option value="Grande">Grande</option>
              </Select>
            </FormRow>
            <FormRow>
              <Input
                type="text"
                name="animal_address"
                placeholder="Residência"
                value={formData.animal_address}
                onChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <Input
                type="file"
                name="animal_picurl"
                accept="image/*"
                onChange={handleChange}
              />
            </FormRow>
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
          <StyledLink to="/">
            Termos, Política de Privacidade e Política de Cookies.
          </StyledLink>
        </TextLink>
        <Button onClick={handleDonate}>Doar</Button>
      </FormWrapper>
    </Container>
  );
};

export default Donate;

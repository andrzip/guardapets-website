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
  const [animal_name, setAnimalName] = useState("");
  const [animal_age, setAnimalAge] = useState("");
  const [animal_gender, setAnimalGender] = useState("");
  const [animal_type, setAnimalType] = useState("");
  const [animal_size, setAnimalSize] = useState("");
  const [animal_adress, setAnimalAddress] = useState("");
  const [animal_picurl, setAnimalPicUrl] = useState("");
  const [animal_desc, setAnimalDesc] = useState("");

  const navigate = useNavigate();

  const handleDonate = async () => {
    if (
      !animal_name ||
      !animal_age ||
      !animal_gender ||
      !animal_type ||
      !animal_size ||
      !animal_adress ||
      !animal_picurl ||
      !animal_desc
    ) {
      return alert("Preencha todos os campos");
    }

    try {
      const response = await Api.post(
        "/animals/add",
        {
          animal_name,
          animal_age,
          animal_type,
          animal_gender,
          animal_size,
          animal_adress,
          animal_picurl,
          animal_desc,
        },
        { withCredentials: true },
      ); // Garante que o cookie JWT seja enviado com a requisição

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
                placeholder="Nome"
                value={animal_name}
                onChange={(e) => setAnimalName(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Input
                type="text"
                placeholder="Idade"
                value={animal_age}
                onChange={(e) => setAnimalAge(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Select
                value={animal_type}
                onChange={(e) => setAnimalType(e.target.value)}
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
                value={animal_gender}
                onChange={(e) => setAnimalGender(e.target.value)}
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
                value={animal_size}
                onChange={(e) => setAnimalSize(e.target.value)}
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
                placeholder="Residência"
                value={animal_adress}
                onChange={(e) => setAnimalAddress(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setAnimalPicUrl(e.target.files[0])}
              />
            </FormRow>
          </FormCol>

          <FormCol>
            <Input
              style={{ marginLeft: "10px" }}
              type="textarea"
              placeholder="Insira uma descrição sobre o animal..."
              value={animal_desc}
              onChange={(e) => setAnimalDesc(e.target.value)}
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

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Services/ApiConfig";
import {
  HeaderContainer,
  Title,
  Input,
  SearchButton,
  AnimalListContainer,
  AnimalCard,
  AnimalImage,
  AnimalDetails,
  AnimalFooter,
  AdoptButton,
} from "./AdoptStyles";

const Adopt = () => {
  const [inputCep, setInputCep] = useState("");
  const [cep, setCep] = useState("");
  const [animals, setAnimals] = useState([]);
  const navigate = useNavigate();

  const handleCepChange = (event) => {
    setInputCep(event.target.value);
  };

  const handleSearch = () => {
    setCep(inputCep);
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const endpoint = cep ? `/animals/list/${cep}` : "/animals/list";
        const response = await Api.get(endpoint);
        setAnimals(response.data);
      } catch (err) {
        console.error("Erro ao buscar animais:", err);
        alert("Animais indisponíveis no momento");
        return navigate("/");
      }
    };

    fetchAnimals();
  }, [cep, navigate]);

  const handleAdoptClick = (animalId) => {
    navigate(`/animal/${animalId}`);
  };

  return (
    <div>
      <HeaderContainer>
        <Title>Lista de Animais</Title>
        <span>|</span>
        <Title>Busca por CEP:</Title>
        <Input
          type="text"
          value={inputCep}
          onChange={handleCepChange}
          placeholder="Digite o CEP"
        />
        <SearchButton onClick={handleSearch}>Buscar</SearchButton>
      </HeaderContainer>

      <AnimalListContainer>
        {animals.map((animal) => (
          <AnimalCard key={animal.animal_id}>
            <AnimalImage src={animal.animal_picurl} alt={animal.animal_name} />
            <AnimalDetails>
              <span>{animal.user_name}</span>
              <h3>{animal.animal_name.split(" ")[0]}</h3>
              <p>
                {animal.user_city}, {animal.user_state}
              </p>
            </AnimalDetails>
            <AnimalFooter gender={animal.animal_gender}>
              <span className="gender">
                {animal.animal_gender === "Fêmea" ? "♀" : "♂"}
              </span>
              <AdoptButton onClick={() => handleAdoptClick(animal.animal_id)}>
                Quero adotar
              </AdoptButton>
            </AnimalFooter>
          </AnimalCard>
        ))}
      </AnimalListContainer>
    </div>
  );
};

export default Adopt;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Services/ApiConfig";
import { HeaderContainer, Title, Input, SearchButton, AnimalListContainer, AnimalCard, AnimalImage, AdoptButton } from "./AdoptStyles";

const Adopt = () => {
  const [inputCep, setInputCep] = useState('');
  const [cep, setCep] = useState('');
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
        const endpoint = cep ? `/animals/list/${cep}` : '/animals/list';
        const response = await Api.get(endpoint);
        setAnimals(response.data);
      } catch (err) {
        console.error("Erro ao buscar animais:", err);
        alert("Animais indisponíveis no momento");
        return navigate('/');
      }
    };

    fetchAnimals();
  }, [cep]);

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
            <h2>{animal.animal_name}</h2>
            <AnimalImage
              src={animal.animal_picurl}
              alt={animal.animal_name}
            />
            <p>
              <strong>🎂 Idade:</strong> {animal.animal_age} anos <br />
              <strong>📌 Tipo:</strong> {animal.animal_type} <br />
              <strong>🧬 Gênero:</strong> {animal.animal_gender} <br />
              <strong>🐾 Porte:</strong> {animal.animal_size} <br />
              <strong>🚩 Local:</strong> {animal.user_city} - {animal.user_state}
            </p>
            <AdoptButton onClick={() => handleAdoptClick(animal.animal_id)}>
              Ver mais
            </AdoptButton>
          </AnimalCard>
        ))}
      </AnimalListContainer>
    </div>
  );
};

export default Adopt;

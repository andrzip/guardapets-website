import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Api } from "../../Services/ApiConfig";
import { useNavigate } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.25rem 0;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  margin: 0 0.625rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
`;

export const SearchButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.3125rem;
  cursor: pointer;
  margin-left: 0.625rem;

  &:hover {
    background-color: #45a049;
  }
`;

const AnimalListContainer = styled.div`
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 1.25rem;
  justify-items: center;
`;

const AnimalCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 0.9375rem;
  width: 100%;
  max-width: 18.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AnimalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 9.375rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.625rem;
`;

const AdoptButton = styled.button`
  background-color: #c9df8a;
  color: black;
  border: none;
  width: 100%;
  padding: 2%;
  border-radius: 0.3125rem;
  cursor: pointer;
  margin-top: 0.625rem;

  &:hover {
    background-color: #aac268;
  }
`;

export const AnimalList = ({ cep }) => {
  const [animals, setAnimals] = useState([]);
  const navigate = useNavigate(); // Inicializando useNavigate

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const endpoint = cep ? `/animals/list/${cep}` : '/animals/list';
        const response = await Api.get(endpoint);
        setAnimals(response.data);
      } catch (error) {
        console.error("Erro ao buscar animais:", error);
      }
    };

    fetchAnimals();
  }, [cep]);

  const handleAdoptClick = (animalId) => {
    navigate(`/animal/${animalId}`)
  };

  return (
    <AnimalListContainer>
      {animals.map((animal) => (
        <AnimalCard key={animal.animal_id}>
          <h2 style={{ textAlign: "center" }}>{animal.animal_name}</h2>
          <AnimalImage
            src={animal.animal_picurl}
            alt={animal.animal_name}
          />
          <p>
            <strong>🎂 Idade:</strong> {animal.animal_age} anos <br />
            <strong>📌 Tipo:</strong> {animal.animal_type} <br />
            <strong>🧬 Gênero:</strong> {animal.animal_gender} <br />
            <strong>🐾 Porte:</strong> {animal.animal_size} <br />
            <strong>🚩 Local:</strong> {animal.animal_address}
          </p>
          <AdoptButton onClick={() => handleAdoptClick(animal.animal_id)}>
            Ver mais
          </AdoptButton>
        </AnimalCard>
      ))}
    </AnimalListContainer>
  );
};

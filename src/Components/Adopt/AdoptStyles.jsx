import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Api } from "../../Services/ApiConfig";

const AnimalListContainer = styled.div`
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  justify-items: center;
`;

const AnimalCard = styled.div`
  background: #f9f9f9;
  border: 0.0625rem solid #ddd;
  padding: 0.9375rem;
  width: 100%;
  max-width: 18.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
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

export const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await Api.get("/animals/list");
        setAnimals(response.data);
      } catch (error) {
        console.error("Erro ao buscar animais:", error);
      }
    };

    fetchAnimals();
  }, []);

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
            <strong>🐾 Porte:</strong> {animal.animal_size} <br/>
            <strong>🚩 Local:</strong> {animal.animal_address}
          </p>
          <AdoptButton>Ver mais</AdoptButton>
        </AnimalCard>
      ))}
    </AnimalListContainer>
  );
};

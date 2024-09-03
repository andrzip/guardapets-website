import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Api } from "../../Services/Api/ApiConfig";

const AnimalListContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-items: center;
`;

const AnimalCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const AnimalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const AdoptButton = styled.button`
  background-color: #c9df8a;
  color: black;
  border: none;
  width: 100%;
  padding: 2%;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

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
          <AnimalImage
            src="https://encurtador.com.br/4dH6I"
            alt={animal.animal_name}
          />
          <h3 style={{ textAlign: "center" }}>{animal.animal_name}</h3>
          <p>
            <strong>Tipo:</strong> {animal.animal_type} <br />
            <strong>Idade:</strong> {animal.animal_age} anos <br />
            <strong>Porte:</strong> {animal.animal_size}
          </p>
          <AdoptButton>Adotar</AdoptButton>
        </AnimalCard>
      ))}
    </AnimalListContainer>
  );
};

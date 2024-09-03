import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Api } from "../../Services/Api/ApiConfig";

const AnimalListContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimalCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
          <h3>{animal.animal_name}</h3>
          <p>{animal.animal_description}</p>
          <p>
            <strong>Idade:</strong> {animal.animal_}age anos
          </p>
        </AnimalCard>
      ))}
    </AnimalListContainer>
  );
};

import React, { useEffect, useState } from "react";
import { Api } from "../../Services/ApiConfig";

import { 
  AnimalsListContainer, 
  AnimalCard, 
  AnimalImage, 
  AnimalRow, 
  CardColumn, 
  ButtonsContainer, 
  Button, 
  Separator, 
  AnimalText 
} from './AdminStyles';

const Admin = () => {
  const [animals, setAnimals] = useState([]);

  const handleAccept = async (id) => {
    try {
      await Api.put(`/admin/accept/${id}`);
      const response = await Api.get("/admin");
      setAnimals(response.data);
    } catch (error) {
      console.error("Erro ao aceitar animal:", error);
    }
  }

  const handleDeny = async (id) => {
    try {
      await Api.put(`/admin/deny/${id}`);
      const response = await Api.get("/admin");
      setAnimals(response.data);
    } catch (error) {
      console.error("Erro ao excluir animal:", error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await Api.delete(`/admin/delete/${id}`);
      const response = await Api.get("/admin");
      setAnimals(response.data);
    } catch (error) {
      console.error("Erro ao excluir animal:", error);
    }
  }

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await Api.get("/admin");
        setAnimals(response.data);
      } catch (error) {
        console.error("Erro ao buscar animais:", error);
      }
    };
    fetchAnimals();
  }, []); 

  return (
    <AnimalsListContainer>
      {animals.map(animal => (
        <AnimalCard key={animal.animal_id}>
          <AnimalRow>
            <AnimalImage src={animal.animal_picurl} alt={animal.animal_name} />
            <AnimalText>
              <p>
                <strong>Nome:</strong> {animal.animal_name} <br />
                <strong>Idade:</strong> {animal.animal_age} anos <br />
                <strong>Classificação:</strong> {animal.animal_type} <br />
                <strong>Gênero:</strong> {animal.animal_gender} <br />
                <strong>Estatura:</strong> {animal.animal_size} <br />
                <strong>Residência:</strong> {animal.animal_address} <br />
                <strong>Situação:</strong> {animal.animal_avaliable ? "Disponível" : "Indisponível"}
              </p>
            </AnimalText>
          </AnimalRow>

          <Separator />

          <CardColumn>
            <p>{animal.animal_desc}</p>
            <ButtonsContainer>
              <Button onClick={() => handleAccept(animal.animal_id)} color="#4CAF50">✅ Aceitar</Button>
              <Button color="#FFC107">✏️ Alterar</Button>
              <Button onClick={() => handleDeny(animal.animal_id)} color="#F44336">❌ Negar</Button>
              <Button onClick={() => handleDelete(animal.animal_id)} color="#000000">🗑 Excluir</Button>
            </ButtonsContainer>
          </CardColumn>
        </AnimalCard>
      ))}
    </AnimalsListContainer>
  );
};

export default Admin;

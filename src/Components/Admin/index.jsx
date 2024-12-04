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

  // Função para buscar lista de animais
  const fetchAnimals = async () => {
    try {
      const response = await Api.get("/admin");
      setAnimals(response.data);
    } catch (error) {
      console.error("Erro ao buscar animais:", error);
    }
  };

  // Função para manipular mudanças de status do animal
  const updateAnimalStatus = async (url, id) => {
    try {
      await Api.put(url);
      await fetchAnimals();
      alert("Situação atualizada!");
    } catch (error) {
      console.error(`Erro ao atualizar status do animal (id: ${id}):`, error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await Api.delete(`/admin/delete/${id}`);
      await fetchAnimals();
      alert("Situação atualizada!");
    } catch (error) {
      console.error("Erro ao excluir animal:", error);
    }
  };

  useEffect(() => {
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
                <strong>Faixa Etária:</strong> {animal.animal_age} <br />
                <strong>Classificação:</strong> {animal.animal_type} <br />
                <strong>Gênero:</strong> {animal.animal_gender} <br />
                <strong>Estatura:</strong> {animal.animal_size} <br />
                <strong>Residência:</strong> {animal.user_address}<br />
                <strong>CEP:</strong> {animal.user_cep} / ({animal.user_city} - {animal.user_state})<br />
                <strong>Situação:</strong> {animal.animal_avaliable ? "Disponível" : "Indisponível"}
              </p>
            </AnimalText>
          </AnimalRow>

          <Separator />

          <CardColumn>
            <p>{animal.animal_desc}</p>
            <ButtonsContainer>
              <Button
                onClick={() => updateAnimalStatus(`/admin/accept/${animal.animal_id}`, animal.animal_id)}
                color="#4CAF50">
                ✅ Aceitar
              </Button>
              <Button color="#FFC107">✏️ Alterar</Button>
              <Button
                onClick={() => updateAnimalStatus(`/admin/deny/${animal.animal_id}`, animal.animal_id)}
                color="#F44336">
                ❌ Negar
              </Button>
              <Button
                onClick={() => handleDelete(animal.animal_id)}
                color="#000000">
                🗑 Excluir
              </Button>
            </ButtonsContainer>
          </CardColumn>
        </AnimalCard>
      ))}
    </AnimalsListContainer>
  );
};

export default Admin;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../Services/ApiConfig'; // Ajuste o caminho conforme necessário
import {
  PageContainer,
  AnimalImageContainer,
  AnimalImage,
  AnimalOverlay,
  AnimalNameOverlay,
  AnimalInfo,
  AnimalInfoSection,
  AnimalInfoItem,
  ContactButton,
  DetailsWrapper,
  BackButton,
  ButtonContainer,
} from './ContactStyles';

const Contact = () => {
  const { id } = useParams(); // Pega o ID da URL
  const [animalData, setAnimalData] = useState(null); // Estado para armazenar os dados do animal

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const response = await Api.get(`/animals/view/${id}`); // Altere para o endpoint corret
        setAnimalData(response.data[0]); // Assume que a resposta é um array e pega o primeiro item
      } catch (error) {
        console.error("Erro ao buscar detalhes do animal:", error);
      }
    };

    fetchAnimalData();
  }, [id]);

  const handleContactClick = () => {
    alert("Contato do doador: (11) 91234-5678");
  };

  const handleBackClick = () => {
    window.history.back();
  };

  if (!animalData) {
    return <div>Carregando...</div>;
  }

  return (
    <PageContainer>
      <AnimalImageContainer>
        <AnimalImage src={animalData.animal_picurl} alt={animalData.animal_name} />
        <AnimalOverlay>
          <AnimalNameOverlay>{animalData.animal_name}</AnimalNameOverlay>
        </AnimalOverlay>
      </AnimalImageContainer>
      <AnimalInfo>
        <DetailsWrapper>
          <AnimalInfoSection>
            <AnimalInfoItem><strong>Tipo:</strong> {animalData.animal_type}</AnimalInfoItem>
            <AnimalInfoItem><strong>Idade:</strong> {animalData.animal_age}</AnimalInfoItem>
            <AnimalInfoItem><strong>Porte:</strong> {animalData.animal_size}</AnimalInfoItem>
            <AnimalInfoItem><strong>Gênero:</strong> {animalData.animal_gender}</AnimalInfoItem>
          </AnimalInfoSection>
        </DetailsWrapper>
        <DetailsWrapper>
          <AnimalInfoItem><strong>Descrição:</strong> {animalData.animal_desc}</AnimalInfoItem>
        </DetailsWrapper>
        <ButtonContainer>
          <BackButton onClick={handleBackClick}>↺</BackButton>
          <ContactButton onClick={handleContactClick}>Contato do Doador</ContactButton>
        </ButtonContainer>
      </AnimalInfo>
    </PageContainer>
  );
};

export default Contact;

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
  const { id } = useParams();
  const [animalData, setAnimalData] = useState(null);

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const response = await Api.get(`/animals/view/${id}`);
        setAnimalData(response.data[0]);
      } catch (err) {
        console.error("Erro ao buscar detalhes do animal:", err);
        return 
      }
    };

    fetchAnimalData();
  }, [id]);

  const handleContactClick = () => {
    if (animalData.user_phone) {
      const donorContact = animalData.user_phone;
      const formattedContact = donorContact.replace(/\D/g, "");
      alert("Redirecionando ao contato do doador...");
      const whatsappLink = `https://wa.me/${formattedContact.user_phone}`;
      window.open(whatsappLink, "_blank");
    } else {
      alert("Contato do doador não disponível");
    }
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
            <AnimalInfoItem><strong>Idade:</strong> {animalData.animal_age} anos</AnimalInfoItem>
            <AnimalInfoItem><strong>Porte:</strong> {animalData.animal_size}</AnimalInfoItem>
            <AnimalInfoItem><strong>Gênero:</strong> {animalData.animal_gender}</AnimalInfoItem>
            <AnimalInfoItem><strong>Cidade:</strong> {animalData.user_city}/{animalData.user_state}</AnimalInfoItem>
            <AnimalInfoItem><strong>Endereço:</strong> {animalData.user_address}</AnimalInfoItem>
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

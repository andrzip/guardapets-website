import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../Services/ApiConfig";
import ContactModal from "./ContactModal";
import { FaLocationArrow, FaUser  } from "react-icons/fa";
import {
  PageContainer,
  AnimalImageContainer,
  AnimalImage,
  AnimalInfo,
  AnimalHeader,
  AnimalDetails,
  AnimalDetailsItem,
  Description,
  DescriptionText,
  ActionButton,
} from "./ContactStyles";

const Contact = () => {
  const { id } = useParams();
  const [animalData, setAnimalData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const response = await Api.get(`/animals/view/${id}`);
        setAnimalData(response.data[0]);
      } catch (err) {
        console.error("Erro ao buscar detalhes do animal:", err);
      }
    };

    fetchAnimalData();
  }, [id]);

  const handleContactClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleBackClick = () => window.history.back();

  if (!animalData) return <div>Carregando...</div>;

  const dataFormatada = new Date(animalData.animal_addition).toLocaleDateString("pt-BR");
  return (
    <PageContainer>
      <AnimalImageContainer>
        <AnimalImage src={animalData.animal_picurl} alt={animalData.animal_name} />
      </AnimalImageContainer>
      <AnimalInfo>
        <AnimalHeader>
          {animalData.animal_name}
          <p>
            {animalData.animal_type} | {animalData.animal_gender} | {animalData.animal_age} | {animalData.animal_size}
          </p>
        </AnimalHeader>
        <AnimalDetails>
          <AnimalDetailsItem>
            <FaLocationArrow /> <span>Está em {animalData.user_city} - {animalData.user_state}</span>
          </AnimalDetailsItem>
          <AnimalDetailsItem>
            <FaUser /> <span>Publicado por {animalData.user_name} em {dataFormatada}</span>
          </AnimalDetailsItem>
          <ActionButton primary onClick={handleContactClick}>
            Contato do Doador
          </ActionButton>
        </AnimalDetails>
        <Description>
          <h1>A história de {animalData.animal_name}</h1>
          <DescriptionText>{animalData.animal_desc}</DescriptionText>
        </Description>
        <ActionButton onClick={handleBackClick}>Voltar</ActionButton>
      </AnimalInfo>

      <ContactModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        contact={{
          email: animalData.user_email,
          phone: animalData.user_phone
        }}
      />
    </PageContainer>
  );
};

export default Contact;

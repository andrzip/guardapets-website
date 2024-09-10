import React from 'react';
import {
  Section,
  Title,
  Text,
  Button,
  TextContainer,
  ImageContainer,
  Image
} from './AnimalsStyles';


const AnimalsSection = () => {
  return (
    <Section>
      <TextContainer>
        <Title>Conheça os bichinhos!</Title>
        <Text>
          Adotar um animal é mais do que apenas ganhar um novo membro na família; é sobre receber amor incondicional e companheirismo. Seja um cachorro animado ou um gato tranquilo, a presença de um animal de estimação traz alegria e calma para sua vida!
        </Text>
        <Button to="/adotar">Ver animais</Button>
      </TextContainer>
      <ImageContainer>
        <Image src="https://via.placeholder.com/450x300" alt="Animais" />
      </ImageContainer>
    </Section>
  );
};

export default AnimalsSection;

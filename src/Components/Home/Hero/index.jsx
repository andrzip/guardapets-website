import React from 'react';

import {
  Section,
  TextContainer,
  Heading,
  Subheading,
  ButtonContainer,
  DonateButton,
  AdoptButton,
  ImageContainer,
  Image
} from './HeroStyles';

const HeroSection = () => {
  return (
    <Section>
      <TextContainer>
        <Heading>Conectando corações, transformando <font color="#234D20">vidas</font></Heading>
        <Subheading>
          Unidos em um propósito: promover uma adoção responsável e espalhar o amor incondicional pelos animais.
        </Subheading>
        <ButtonContainer>
          <DonateButton to="/doar">Quero doar</DonateButton>
          <AdoptButton to="/adotar">Quero adotar</AdoptButton>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer>
        <Image src="https://via.placeholder.com/600x300" alt="hero-img" />
      </ImageContainer>
    </Section>
  );
};

export default HeroSection;
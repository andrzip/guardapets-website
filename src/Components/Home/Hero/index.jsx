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
  ImagePlaceholder
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
          <DonateButton>Quero doar</DonateButton>
          <AdoptButton>Quero adotar</AdoptButton>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer>
        <ImagePlaceholder />
      </ImageContainer>
    </Section>
  );
};

export default HeroSection;
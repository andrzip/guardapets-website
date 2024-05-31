import React from 'react';
import {
  Section,
  Title,
  Text
} from './AboutStyles';

import { BlackDividerTop } from '../ShapeDivider/index';

const AboutSection = () => {
  return (
    <>
      <BlackDividerTop />
      <Section>
        <Title>Saiba mais sobre nós!</Title>
        <Text>
          Nosso site de adoção de animais é uma plataforma dedicada a conectar animais de estimação necessitados a lares amorosos. Com uma interface intuitiva e amigável, facilitamos o processo de adoção, fornecendo perfis detalhados de cada animal, incluindo fotos e informações sobre sua personalidade e necessidades específicas. Priorizamos o bem-estar dos animais, garantindo que cada adoção seja feita com responsabilidade e cuidado.
        </Text>
      </Section>
    </>
  );
};

export default AboutSection;
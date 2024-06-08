import React from "react";
import {
  Section,
  SectionTitle,
  CardWrapper,
  Card
} from './TipsStyles';

const TipsSection = () => {
  return (
    <Section>
      <SectionTitle>CUIDADOS COM SEU PET</SectionTitle>
      <CardWrapper>
        <Card
          title="Preparando a chegada"
          content="Prepare sua casa e família para receber um novo animal de estimação com segurança e conforto, incluindo itens essenciais e uma introdução gradual a outros animais de estimação, se aplicável."
        />
        <Card
          title="Cuidados Básicos"
          content="Garanta a saúde e felicidade do seu pet com cuidados essenciais, como uma dieta adequada, exercícios regulares, visitas ao veterinário e esterilização/castração."
        />
        <Card
          title="Comportamento"
          content="Desenvolva uma relação sólida com seu animal de estimação ao entender seu comportamento único, utilizando técnicas de treinamento baseadas em reforço positivo e promovendo uma socialização adequada desde cedo."
        />
      </CardWrapper>
    </Section>
  )
}

export default TipsSection;

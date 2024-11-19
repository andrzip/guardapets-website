import React, { useState } from "react";
import {
  Container,
  Header,
  Categories,
  CategoryButton,
  FAQSection,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
} from "./HelpStyles";
import { FaPaw, FaDonate, FaHeart, FaFileAlt } from "react-icons/fa";

const Help = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const categories = [
    { label: "Adotar um Pet", icon: <FaPaw /> },
    { label: "Doação de Animais", icon: <FaDonate /> },
    { label: "Cuidados Gerais", icon: <FaHeart /> },
    { label: "Acompanhamento de Adoção", icon: <FaFileAlt /> },
    { label: "Termos e Políticas", icon: <FaFileAlt /> },
  ];

  const faqList = [
    {
      question: "Quais os requisitos para adotar um animal?",
      answer:
        "É necessário ser maior de 18 anos e apresentar documentos que comprovem sua identidade e residência. Também pedimos que o adotante tenha condições de oferecer um ambiente seguro e amoroso para o pet.",
    },
    {
      question: "Preciso ter um espaço grande para adotar?",
      answer:
        "O espaço necessário depende do tipo de animal e suas necessidades. Cães de grande porte, por exemplo, podem precisar de mais espaço para se exercitar, enquanto alguns gatos e cães menores se adaptam bem a ambientes menores.",
    },
    {
      question: "Os animais disponíveis para adoção já são treinados?",
      answer:
        "O nível de treinamento varia. Alguns animais podem já ter sido treinados para comandos básicos ou boas maneiras em casa, enquanto outros podem precisar de mais paciência e dedicação para aprender.",
    },
    {
      question: "É possível adotar mais de um animal?",
      answer:
        "Sim, desde que o adotante tenha condições de cuidar adequadamente de todos os animais, oferecendo tempo, atenção e recursos necessários para o bem-estar deles.",
    },
    {
      question: "O que devo considerar antes de adotar?",
      answer:
        "Antes de adotar, pense em questões como o tempo disponível para cuidar do animal, custos com alimentação, saúde e bem-estar, e se todos na casa estão de acordo com a chegada de um novo membro.",
    },
    {
      question: "Posso adotar se eu tiver outros animais em casa?",
      answer:
        "Sim, mas é importante considerar a personalidade do novo pet e dos que já moram na casa para garantir que todos possam se adaptar bem.",
    },
    {
      question: "Qual é a expectativa de vida dos animais?",
      answer:
        "A expectativa de vida varia conforme a espécie, raça e cuidados recebidos. Cães podem viver entre 10 e 15 anos ou mais, enquanto gatos geralmente vivem de 12 a 20 anos.",
    },
    {
      question: "Que cuidados devo ter ao introduzir um novo pet em casa?",
      answer:
        "Ao levar um novo pet para casa, permita um período de adaptação, oferecendo um ambiente seguro e tranquilo. É importante supervisionar interações com outros animais e crianças e fornecer brinquedos, alimentação e um lugar confortável para descansar.",
    },
    {
      question: "Como escolher o animal certo para minha família?",
      answer:
        "Considere o tamanho, nível de energia, necessidades de exercício e temperamento do animal. Avalie se ele se adapta bem ao seu estilo de vida, rotina e convivência.",
    },
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <Container>
      <Header>
        <h1>Olá, com o que podemos ajudá-lo?</h1>
        <p>Selecione uma categoria ou veja nossas perguntas frequentes.</p>
      </Header>
      <h3>Categorias</h3>
      <Categories>
        {categories.map((category, index) => (
          <CategoryButton key={index}>
            {category.icon} {category.label}
          </CategoryButton>
        ))}
      </Categories>
      <FAQSection>
        <h3>Perguntas Frequentes</h3>
        {faqList.map((item, index) => (
          <FAQItem key={index}>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
              {item.question}
              <span>{expandedIndex === index ? "-" : "+"}</span>
            </FAQQuestion>
            {expandedIndex === index && <FAQAnswer>{item.answer}</FAQAnswer>}
          </FAQItem>
        ))}
      </FAQSection>
    </Container>
  );
};

export default Help;

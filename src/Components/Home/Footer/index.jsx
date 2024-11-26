import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterLink,
  FooterTitle,
  FooterDivider,
  FooterBottom,
  FooterText,
  BackToTopButton,
} from './FooterStyles';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <BackToTopButton onClick={scrollToTop}>
        Voltar ao Topo <FaArrowUp/>
      </BackToTopButton>

      <FooterWrapper>
        {/* Primeira Coluna */}
        <FooterColumn>
          <FooterTitle>MAPA DO SITE</FooterTitle>
          <FooterLink href="#">Quem somos</FooterLink>
          <FooterLink href="/parceiros">Parceiros</FooterLink>
          <FooterLink href="/donate">Quero doar</FooterLink>
          <FooterLink href="/adopt">Quero adotar</FooterLink>
        </FooterColumn>

        {/* Segunda Coluna */}
        <FooterColumn>
          <FooterTitle>PRECISA DE SUPORTE?</FooterTitle>
          <FooterLink href="/ajuda">Ajuda</FooterLink>
          <FooterLink href="/termos-politicas">Termos e Políticas</FooterLink>
          <FooterLink href="#">Fale Conosco</FooterLink>
        </FooterColumn>
      </FooterWrapper>

      {/* Divisor */}
      <FooterDivider />

      {/* Texto Inferior */}
      <FooterBottom>
        <FooterText>
          &copy; 2024 GuardaPets. Todos os direitos reservados.
        </FooterText>
        <FooterText>
          Acessibilidade | Termos & Condições | Privacidade | Legal
        </FooterText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

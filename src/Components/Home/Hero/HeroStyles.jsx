import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10% 5%;
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 2%;
  font-weight: bold;
`;

export const Subheading = styled.p`
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const BaseButton = styled(Link)`
  border: none;
  padding: 1rem 3.5rem;
  cursor: pointer;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  color: black;
  display: inline-block;
  transition: background-color 0.3s ease;
`;

export const DonateButton = styled(BaseButton)`
  background-color: #F0F7DA;
  margin-right: 10px;

  &:hover {
    background-color: #e6f1be;
  }
`;

export const AdoptButton = styled(BaseButton)`
  background-color: #C9DF8A;

  &:hover {
    background-color: #aac268;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

// AdoptStyles.jsx
import styled from "styled-components";

// Estilos para a página de adoção

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.25rem 0;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  margin: 0 0.625rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
`;

export const SearchButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.3125rem;
  cursor: pointer;
  margin-left: 0.625rem;

  &:hover {
    background-color: #45a049;
  }
`;

export const AnimalListContainer = styled.div`
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 1.25rem;
  justify-items: center;
`;

export const AnimalCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 0.9375rem;
  width: 100%;
  max-width: 18.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
`;

export const AnimalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 9.375rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.625rem;
`;

export const AdoptButton = styled.button`
  background-color: #c9df8a;
  color: black;
  border: none;
  width: 100%;
  padding: 2%;
  border-radius: 0.3125rem;
  cursor: pointer;
  margin-top: 0.625rem;

  &:hover {
    background-color: #aac268;
  }
`;

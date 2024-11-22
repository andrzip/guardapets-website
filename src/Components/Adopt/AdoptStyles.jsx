import styled from "styled-components";

// Estilos atualizados para a página de adoção

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
  gap: 1.5rem;
  justify-items: center;
`;

export const AnimalCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 20rem;
`;

export const AnimalImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

export const AnimalDetails = styled.div`
  padding: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
    text-transform: uppercase;
    font-weight: bold;
  }

  span {
    font-size: 0.9rem;
    color: #888;
    text-transform: uppercase;
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.875rem;
    color: #666;
  }
`;

export const AnimalFooter = styled.div`
  padding: 0.5rem 1rem;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .gender {
    font-size: 1.25rem;
    color: ${({ gender }) => (gender === "F" ? "#e91e63" : "#2196f3")};
  }
`;

export const AdoptButton = styled.button`
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.3125rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #fb8c00;
  }
`;

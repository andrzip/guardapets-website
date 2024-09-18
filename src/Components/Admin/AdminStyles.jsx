import styled from 'styled-components';

export const AnimalsListContainer = styled.div`
  display: grid;
  gap: 20px;
  margin: 2% 3%;
  justify-items: center;
`;

export const AnimalCard = styled.div`
  display: flex;
  background: #f9f9f9;
  border: 1px solid #ddd;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  padding: 15px;
`;

export const AnimalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px;
  width: 49%;
`;

export const AnimalImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const CardColumn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49%;
`;

export const AnimalText = styled.div`
  justify-content: center;
  padding-left: 20px;
  
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  margin-left: 1%;
`;

export const Button = styled.button`
  background-color: ${({ color }) => color || '#4caf50'};
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  width: 100px; /* Ajuste de largura dos botões */
  height: 40px; /* Ajuste de altura dos botões */

  &:hover {
    opacity: 0.8;
  }
`;

export const Separator = styled.div`
  width: .5px; /* Largura da linha */
  background-color: grey; /* Cor da linha */
  height: 100%; /* Altura para cobrir todo o card */
`;

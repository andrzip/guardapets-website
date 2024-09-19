import styled from 'styled-components';

export const AnimalsListContainer = styled.div`
  display: grid;
  gap: 1.25rem;
  margin: 2% 3%;
  justify-items: center;
`;

export const AnimalCard = styled.div`
  display: flex;
  background: #f9f9f9;
  border: 0.0625rem solid #ddd;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  padding: 0.9375rem;
`;

export const AnimalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.625rem;
  width: 49%;
`;

export const AnimalImage = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.625rem;
`;

export const CardColumn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49%;
`;

export const AnimalText = styled.div`
  justify-content: center;
  padding-left: 1.25rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.625rem;
  margin-left: 1%;
`;

export const Button = styled.button`
  background-color: ${({ color }) => color || '#4caf50'};
  border: none;
  color: white;
  padding: 0.625rem;
  text-align: center;
  display: inline-block;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 6.25rem;
  height: 2.5rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const Separator = styled.div`
  width: 0.03125rem;
  background-color: grey;
  height: 100%;
`;

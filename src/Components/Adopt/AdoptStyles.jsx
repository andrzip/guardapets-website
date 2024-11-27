import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0;
  background-color: #f9f9f9;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  margin: 0 0.625rem;
`;

export const AnimalListContainer = styled.div`
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 1.5rem;
  justify-items: center;
  flex: 1; /* Occupy remaining space */
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
    color: black;
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

export const FilterContainer = styled.div`
  width: 20rem;
  padding: 1rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

export const FilterLabel = styled.label`
  display: block;
  margin: 0.5rem 0;
  font-size: 1rem;
  color: black;
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: black;
  background-color: #fff;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: black;
  background-color: #fff;
`;

const BaseButton = styled(Link)`
  border: none;
  padding: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
  border-radius: 0.625rem;
  text-decoration: none;
  text-align: center;
  color: black;
  display: inline-block;
  transition: background-color 0.3s ease;
`;

export const FilterButton = styled(BaseButton)`
  background-color: #c9df8a;

  &:hover {
    background-color: #aac268;
  }
`;

export const ClearFilter = styled(BaseButton)`
  background-color: #999;

  &:hover {
    background-color: #999999c5;
  }
`;

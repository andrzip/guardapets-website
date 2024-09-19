import styled from 'styled-components';
import backgroundImage from '../../Assets/background-sig.jpg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: calc(100vh - 3.75rem);
  display: flex;
  align-items: center;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  padding: 1.25rem;
`;

export const GeneralContainer = styled.div`
  background: #3f753b84;
  border-radius: 0.625rem;
  border: 0.063rem solid black;
  padding: 20vh 2.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  width: 50%;
  color: white;
`;

export const FormContainer = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1.25rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.625rem;
  margin-bottom: 0.9375rem;
  border: 0.063rem solid #ccc;
  border-radius: 0.3125rem;
  font-size: 1rem;
`;

export const TextLink = styled.p`
  color: black;
`;

export const StyledLink = styled(Link)`
  color: #4CAF50;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.a`
  padding: 0.625rem 3.125rem;
  border: none;
  border-radius: 0.3125rem;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  background: ${props => (props.primary ? '#C9DF8A' : '#ffffff0')};
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => (props.primary ? '#aac268' : '#ffffff0')};
  }
`;

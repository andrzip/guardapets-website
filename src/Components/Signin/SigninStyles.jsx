import styled from 'styled-components';
import backgroundImage from '../../Assets/background-sig.jpg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  padding: 20px;
`;

export const GeneralContainer = styled.div`
  background: #3f753b84;
  border-radius: 10px;
  border: 1px solid black;
  padding: 20vh 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const TextContainer = styled.div`
  width: 50%;
  color: white;
`

export const FormContainer = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
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
  padding: 10px 50px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
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
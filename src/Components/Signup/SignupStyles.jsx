import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from '../../Assets/background-sig.jpg';

const sharedInputStyles = `
  padding: 0.625rem;
  border: 0.063rem solid black;
  border-radius: 0.3125rem;
  margin-bottom: 0.625rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 3.75rem);
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  padding: 1.25rem;
`;

export const FormWrapper = styled.div`
  background: rgba(63, 117, 59, 0.52);
  padding: 1.25rem;
  border-radius: 0.625rem;
  border: 0.063rem solid black;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 1.875rem;
  color: white;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: ${(props) => (props.fullWidth ? '100%' : '50%')};
  ${sharedInputStyles};
`;

export const TextLink = styled.p`
  margin-top: 1.5625rem;
  text-align: left;
  color: black;
`;

export const StyledLink = styled(Link)`
  color: #4caf50;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.625rem;
  background-color: #c9df8a;
  color: black;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #aac268;
  }
`;

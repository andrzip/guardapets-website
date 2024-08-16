import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: calc(100vh - 60px);
    padding: 20px;
`;

export const FormWrapper = styled.div`
    background: #234D20;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    margin-bottom: 30px;
    color: white;
`;

export const FormCol = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const FormRow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
`;

export const Input = styled.input.attrs(props => ({
    as: props.type === 'textarea' ? 'textarea' : 'input'
}))`
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 10px;
    resize: ${props => (props.type === 'textarea' ? 'none' : 'auto')};
    height: ${props => (props.type === 'textarea' ? '100%' : 'auto')};
    width: ${props => (props.type === 'textarea' ? 'none' : '100%')};
`;

export const Select = styled.select`
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 10px;
    width: 100%;
`;

export const TextLink = styled.p`
    margin-top: 25px;
    text-align: left;
    color: black;
`;

export const StyledLink = styled(Link)`
    color: #4CAF50;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #C9DF8A;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #aac268;
    }
`;

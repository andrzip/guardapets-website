import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background: #eaf4ec;
    display: flex;
    align-items: center;
    height: calc(100vh - 3.75rem);
    padding: 1.25rem;
`;

export const FormWrapper = styled.div`
    background: #234D20;
    padding: 1.25rem;
    border-radius: 0.625rem;
    border: 0.0625rem solid black;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    margin-bottom: 1.875rem;
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
    padding: 0.625rem;
    border: 0.0625rem solid black;
    border-radius: 0.3125rem;
    background-color: white;
    margin-bottom: 0.625rem;
    resize: ${props => (props.type === 'textarea' ? 'none' : 'auto')};
    height: ${props => (props.type === 'textarea' ? '100%' : 'auto')};
    width: ${props => (props.type === 'textarea' ? 'none' : '100%')};
`;

export const Select = styled.select`
    padding: 0.625rem;
    border: 0.0625rem solid black;
    border-radius: 0.3125rem;
    background-color: white;
    margin-bottom: 0.625rem;
    width: 100%;
`;

export const TextLink = styled.p`
    margin-top: 1.5625rem;
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
    padding: 0.625rem;
    background-color: #C9DF8A;
    color: black;
    border: none;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #aac268;
    }
`;

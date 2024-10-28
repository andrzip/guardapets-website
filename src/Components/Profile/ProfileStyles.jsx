import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 80%;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  color: #2e7d32;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const ProfileTitle = styled.h2`
  font-size: 1.5rem;
  color: #1b5e20;
  margin-bottom: 1rem;
`;

export const InfoGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 0.875rem;
  color: #6b8f71;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.95rem;
  border: 1px solid #d0e6d3;
  border-radius: 6px;
  background-color: #f9fafb;
  color: #333;
  transition: all 0.3s;
  &:disabled {
    background-color: #f4f4f4;
    color: #9e9e9e;
  }
`;

export const EditButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #388e3c;
  }
`;

export const LogoutButton = styled(EditButton)`
  background-color: #f44336;
  &:hover {
    background-color: #d32f2f;
  }
`;

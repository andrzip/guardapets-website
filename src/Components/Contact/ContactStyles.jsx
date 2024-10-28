import styled from 'styled-components';

export const PageContainer = styled.div`
  background: #eaf4ec;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: #1b5e20;
  padding: 2%;
  width: 100%;
  height: calc(100vh - 3.75rem);
`;

export const AnimalImageContainer = styled.div`
  position: relative;
  height: 22.5rem;
  width: 33.75rem;
  margin-bottom: 25px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  &:hover {
    filter: brightness(1.1);
  }
`;

export const AnimalImage = styled.img`
  width: 100%;
  height: auto;
`;

export const AnimalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnimalNameOverlay = styled.h2`
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: 600;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
`;

export const AnimalInfo = styled.div`
  text-align: center;
  width: 100%;
  max-width: 650px;
`;

export const DetailsWrapper = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
`;

export const AnimalInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AnimalInfoItem = styled.p`
  font-size: 1.1rem;
  color: #444;
  strong {
    color: #2e7d32;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

export const ContactButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(45deg, #66bb6a, #43a047);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #388e3c;
  }
`;

export const BackButton = styled.button`
  padding: 10px 19px;
  background: #757575;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #5a5a5a;
  }
`;

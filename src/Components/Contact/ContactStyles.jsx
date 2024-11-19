import styled from 'styled-components';

export const PageContainer = styled.div`
  background: #eaf4ec;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: #234D20;
  padding: 2%;
  width: 100%;
  height: calc(100vh - 3.75rem);
`;

export const AnimalImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 40rem;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  &:hover {
    filter: brightness(1.1);
  }
`;

export const AnimalImage = styled.img`
  width: 100%;
  height: 100%;
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
  height: 100%;
  max-width: 770px;
`;

export const DetailsWrapper = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
`;

export const AnimalInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AnimalInfoItem = styled.p`
  font-size: 1rem;
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
  background: #C9DF8A;
  color: black;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #aac268;
  }
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background: #757575;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #5a5a5a;
  }
`;

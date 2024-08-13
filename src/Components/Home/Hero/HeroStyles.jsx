import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10% 5%;
  background-color: #f7f8ff;
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 2%;
  font-weight: bold;
`;

export const Subheading = styled.p`
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 1rem 3.5rem;
  cursor: pointer;
  border-radius: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

export const DonateButton = styled(Button)`
  background-color: #F0F7DA;
  margin-right: 10px;
  &:hover {
    background-color: #e6f1be;
  }
`;

export const AdoptButton = styled(Button)`
  background-color: #C9DF8A;
  &:hover {
    background-color: #aac268;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;
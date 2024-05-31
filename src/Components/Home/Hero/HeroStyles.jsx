import styled from 'styled-components';

// Styled Components
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10% 5%;
  background-color: #141414;
`;

export const TextContainer = styled.div`
  max-width: 50%;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 2%;
  color: #ececec;
  font-weight: bold;
`;

export const Subheading = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  color: #333;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s;
  &:last-child {
    margin-right: 0;
  }
`;

export const DonateButton = styled(Button)`
  background: none;
  margin-right: 10px;
  color: #fff;
  &:hover {
    background-color: #202020;
  }
`;

export const AdoptButton = styled(Button)`
  background-color: #fff;
  &:hover {
    background-color: #e6e6e6;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImagePlaceholder = styled.div`
  background-image: url("https://via.placeholder.com/600x300");
  height: 300px;
`;
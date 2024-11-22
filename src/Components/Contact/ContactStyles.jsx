import styled from 'styled-components';

export const PageContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  color: #444;
  height: calc(100vh - 3.75rem);
`;

export const AnimalImageContainer = styled.div`
  height: 100%;
  width: 40rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const AnimalImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AnimalInfo = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 1rem;
  background: #f8f8f8;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const AnimalHeader = styled.h1`
  font-size: 1.875rem;
  color: #3a7c2d;

  p {
    color: #6b7280b1;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

export const AnimalDetails = styled.div`
  margin-bottom: 1rem;
`;

export const AnimalDetailsItem = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #FF9800;

  span {
    color: black;
  }
`;

export const Description = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.3rem;
    color: #FF9800;
  }
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`;

export const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  width: 100%;
  margin: 1rem 0;
  font-size: 1rem;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => (props.primary ? '#C9DF8A' : '#999')};

  &:hover {
    background-color: ${(props) => (props.primary ? '#aac268' : '#999999c5')};
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #234D20;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #444;
  }

  a {
    display: block;
    margin: 0.5rem 0;
    color: #234D20;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: #FF9800;
    }
  }
`;

export const ModalButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${(props) => (props.primary ? '#C9DF8A' : '#999')};

  &:hover {
    background-color: ${(props) => (props.primary ? '#aac268' : '#999999c5')};
  }
`;

import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; /* Duas colunas: maior à esquerda, menor à direita */
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Responsivo: uma coluna em telas pequenas */
  }
`;

export const Section = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  color: #444;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 2rem;
  font-size: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: none;
  background: none;
  font-size: 1rem;
  color: black;
  width: 50%;
`;

export const Button = styled.button`
  padding: 0.75rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #135ba1;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

export const AvatarIcon = styled.div`
  background-image: url('   https://cdn-icons-png.flaticon.com/512/219/219970.png'); /* Verifique o caminho da imagem */
  background-size: cover;
  background-color: #327080;
  height: 128px;
  width: 128px;
  border-radius: 1rem;
`;

export const TokenButton = styled(Button)`
  background-color: #ff9800;
  &:hover {
    background-color: #f57c00;
  }
`;

export const LogoutButton = styled(Button)`
  background-color: #f44336;
  &:hover {
    background-color: #d32f2f;
  }
`;

export const TokenContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`;

export const AnimalsSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AnimalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
    border-radius: 8px;
  }

  h4 {
    font-size: 1.125rem;
    color: #333;
    margin-top: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 0.25rem 0;
  }
`;

export const AnimalsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;
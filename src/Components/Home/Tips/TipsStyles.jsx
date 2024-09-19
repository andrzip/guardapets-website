import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  width: 100%;
`;

export const SectionTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.25rem;
  text-align: center;
`;

export const CardContainer = styled.div`
  border: 0.0625rem solid #bebebe;
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin: 0.625rem;
  width: 18.75rem;
  box-shadow: 0 0.25rem 0.5rem #b6b6b6;
  text-align: center;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.625rem;
`;

export const CardContent = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const Card = ({ title, content }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </CardContainer>
);

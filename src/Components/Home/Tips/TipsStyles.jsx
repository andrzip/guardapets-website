import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const SectionTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
`;

export const CardContainer = styled.div`
  border: 1px solid #bebebe;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  box-shadow: 0 4px 8px #b6b6b6;
  text-align: center;
`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const CardContent = styled.p`
  font-size: 1em;
  color: #666;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = ({ title, content }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </CardContainer>
);
